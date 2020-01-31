// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

import { createDictionary, createStatistic, createWord, Dictionary, modelHelper, Statistic, Word } from '../models';
import createLogger from './createLogger';
import firebaseInstance from './Firebase';

// // Create a promise that resolves in <ms> milliseconds
// const timeout = (ms: number) =>
//   new Promise(resolve => {
//     const id = setTimeout(() => {
//       clearTimeout(id);
//       resolve(`Timed out in ${ms}ms.`);
//     }, ms);
//   });

class DictionaryService {
  private logger = createLogger('DictionaryService');

  private readonly db: firebase.database.Database;

  private uid: string | null = null;

  constructor() {
    this.db = firebaseInstance.db;
    firebaseInstance.auth.onAuthStateChanged(user => {
      this.uid = user && user.uid;
    });
  }

  /** GET dictionaries from the server */
  public async getDictionaries(): Promise<Dictionary[]> {
    this.logger.info('getDictionaries');
    const snapshot = await this.db.ref('dictionaryList').once('value');
    const arr: Dictionary[] = [];
    snapshot.forEach(payload => {
      arr.push(createDictionary(payload, this.uid));
    });
    return arr;
  }

  /** GET dictionary by id. */
  public async getDictionary(id: string): Promise<Dictionary> {
    return this.withLog(`getDictionary(${id})`, async () => {
      const dictionary = await this.getDictionaryById(id);
      const words = await this.getWords(id);
      const statistics = await this.getStatistics(id);
      words.forEach(word => {
        const stat = statistics[word.id];
        if (stat) {
          /* eslint-disable no-param-reassign */
          word.count = stat.count;
          word.occurs = stat.occurs;
          /* eslint-enable no-param-reassign */
        }
      });
      // will fix wordsLearned
      const wordsLearned = words.reduce((acc, word) => acc + (modelHelper.isNew(word) ? 0 : 1), 0);
      if (dictionary.wordsLearned !== wordsLearned) {
        dictionary.wordsLearned = wordsLearned;
      }
      return { ...dictionary, words };
    });
  }

  private async getDictionaryById(id: string): Promise<Dictionary> {
    return this.withLog('getDictionaryById', async () => {
      const snapshot = await this.db.ref(`dictionaryList/${id}`).once('value');
      return createDictionary(snapshot, this.uid);
    });
  }

  private async getWords(dictionaryId: string): Promise<Word[]> {
    return this.withLog('getWords', async () => {
      const snapshot = await this.db
        .ref('wordList')
        .orderByChild('dictionaryId')
        .equalTo(dictionaryId)
        .once('value');
      const arr: Word[] = [];
      snapshot.forEach(payload => {
        arr.push(createWord(payload));
      });
      return arr;
    });
  }

  private async getStatistics(dictionaryId: string): Promise<Record<string, Statistic>> {
    return this.withLog('getStatistics', async () => {
      const map: Record<string, Statistic> = {};
      if (this.uid) {
        const snapshot = await this.db
          .ref(`statistics/${this.uid}`)
          .orderByChild('dictionaryId')
          .equalTo(dictionaryId)
          .once('value');
        snapshot.forEach(payload => {
          map[payload.key as string] = createStatistic(payload);
        });
      }
      return map;
    });
  }

  private async withLog<R>(m: string, fn: () => Promise<R>): Promise<R> {
    const dt = Date.now();
    const r = await fn();
    const ms = Date.now() - dt;
    this.logger.info(`${m}: ${ms}ms`);
    return r;
  }
}

export default new DictionaryService();

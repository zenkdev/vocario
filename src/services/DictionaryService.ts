// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

import { Dictionary, Word, Statistic } from '../models';
import firebaseInstance from './Firebase';
import { isNew } from '../utils';
import createLogger from './createLogger';

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
      arr.push(Dictionary.fromSnapshot(payload, this.uid));
    });
    return arr;
  }

  /** GET dictionary by id. */
  public async getDictionary(id: string): Promise<Dictionary> {
    this.logger.info(`getDictionary(${id})`);
    const dictionary = await this.getDictionaryById(id);
    const words = await this.getWords(id);
    const statistics = await this.getStatistics(id);
    words.forEach(word => {
      const stat = statistics[word.id];
      if (stat) {
        /* eslint-disable no-param-reassign */
        word.count = stat.count;
        word.firstOccur = stat.firstOccur;
        word.nextOccur = stat.nextOccur;
        /* eslint-enable no-param-reassign */
      }
    });
    // will fix wordsLearned
    const wordsLearned = words.reduce((acc, word) => acc + (isNew(word) ? 0 : 1), 0);
    if (dictionary.wordsLearned !== wordsLearned) {
      dictionary.wordsLearned = wordsLearned;
    }
    return { ...dictionary, words };
  }

  private async getDictionaryById(id: string): Promise<Dictionary> {
    const snapshot = await this.db.ref(`dictionaryList/${id}`).once('value');
    return Dictionary.fromSnapshot(snapshot, this.uid);
  }

  private async getWords(dictionaryId: string): Promise<Word[]> {
    const snapshot = await this.db
      .ref('wordList')
      .orderByChild('dictionaryId')
      .equalTo(dictionaryId)
      .once('value');
    const arr: Word[] = [];
    snapshot.forEach(payload => {
      arr.push(Word.fromSnapshot(payload));
    });
    return arr;
  }

  private async getStatistics(dictionaryId: string): Promise<Record<string, Statistic>> {
    const map: Record<string, Statistic> = {};
    if (this.uid) {
      const snapshot = await this.db
        .ref(`statistics/${this.uid}`)
        .orderByChild('dictionaryId')
        .equalTo(dictionaryId)
        .once('value');
      snapshot.forEach(payload => {
        map[payload.key as string] = Statistic.fromSnapshot(payload);
      });
    }
    return map;
  }
}

export default new DictionaryService();

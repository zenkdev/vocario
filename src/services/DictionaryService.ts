// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

import { createDictionary, createStatistic, createWord, Dictionary, modelHelper, Statistic, Word } from '../models';
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
    return firebaseInstance.withTrace('getDictionaries', async () => {
      const snapshot = await this.db.ref('dictionary').once('value');
      const arr: Dictionary[] = [];
      snapshot.forEach(payload => {
        arr.push(createDictionary(payload, this.uid));
      });
      return arr;
    });
  }

  /** GET dictionary by id. */
  public async getDictionary(id: string): Promise<Dictionary> {
    return firebaseInstance.withTrace(`getDictionary(${id})`, async () => {
      const dictionary = await this.getDictionaryById(id);
      const words = await this.getWords(id);
      const statistics = await this.getStatistics(id);
      words.forEach(word => {
        const stat = statistics[word.id];
        if (stat) {
          // eslint-disable-next-line no-param-reassign
          word.occurs = stat.occurs;
        }
      });

      // fix wordsCompleted
      const wordsCompleted = modelHelper.count(words, w => modelHelper.isCompleted(w));
      if (dictionary.wordsCompleted !== wordsCompleted) {
        dictionary.wordsCompleted = wordsCompleted;
      }
      return { ...dictionary, words };
    });
  }

  private async getDictionaryById(id: string): Promise<Dictionary> {
    return firebaseInstance.withTrace('getDictionaryById', async () => {
      const snapshot = await this.db.ref(`dictionary/${id}`).once('value');
      return createDictionary(snapshot, this.uid);
    });
  }

  private async getWords(dictionaryId: string): Promise<Word[]> {
    return firebaseInstance.withTrace('getWords', async () => {
      const snapshot = await this.db
        .ref('word')
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
    return firebaseInstance.withTrace('getStatistics', async () => {
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
}

export default new DictionaryService();

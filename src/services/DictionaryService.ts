import { Database, ref, get, query, orderByChild, equalTo } from 'firebase/database';

import { createDictionary, createStatistic, createWord, type Dictionary, type Statistic, type Word } from '../models';
import { count } from '../utils';
import firebaseInstance, { Firebase } from './Firebase';

const { withTrace } = firebaseInstance;

// Create a promise that resolves in <ms> milliseconds
export const timeout = (ms: number) =>
  new Promise(resolve => {
    const id = setTimeout(() => {
      clearTimeout(id);
      resolve(`Timed out in ${ms}ms.`);
    }, ms);
  });

class DictionaryService {
  private readonly db: Database;

  private uid: string | null = null;

  constructor({ db, auth }: Firebase) {
    this.db = db;
    auth.onAuthStateChanged(user => {
      this.uid = user && user.uid;
    });
  }

  /** GET dictionaries from the server */
  public getDictionaries = async (): Promise<Dictionary[]> => {
    return withTrace('getDictionaries', async () => {
      // await timeout(5 * 1000);
      // if (Date.now() !== 0) throw new Error('test error');
      const snapshot = await get(ref(this.db, 'dictionary'));
      const arr: Dictionary[] = [];
      snapshot.forEach(payload => {
        arr.push(createDictionary(payload, this.uid));
      });
      return arr;
    });
  };

  /** GET dictionary by id. */
  public getDictionary = async (id: string): Promise<Dictionary> => {
    return withTrace(`getDictionary(${id})`, async () => {
      const dictionary = await this.getDictionaryById(id);
      const words = await this.getWords(id);
      const statistics = await this.getStatistics(id);
      const values = Object.values(words);
      values.forEach(word => {
        const stat = statistics[word.id];
        if (stat) {
          word.isCompleted = stat.isCompleted;
          word.occurs = stat.occurs;
          word.mistakes = stat.mistakes;
        }
      });
      // console.table(words);

      // fix wordsCompleted
      const wordsCompleted = count(values, w => w.isCompleted);
      if (dictionary.wordsCompleted !== wordsCompleted) {
        dictionary.wordsCompleted = wordsCompleted;
      }
      return { ...dictionary, words };
    });
  };

  private async getDictionaryById(id: string): Promise<Dictionary> {
    return withTrace('getDictionaryById', async () => {
      const snapshot = await get(ref(this.db, `dictionary/${id}`));
      return createDictionary(snapshot, this.uid);
    });
  }

  private async getWords(dictionaryId: string): Promise<Record<string, Word>> {
    return withTrace('getWords', async () => {
      const snapshot = await get(query(ref(this.db, 'word'), orderByChild('dictionaryId'), equalTo(dictionaryId)));
      const map: Record<string, Word> = {};
      snapshot.forEach(payload => {
        map[payload.key as string] = createWord(payload);
      });
      return map;
    });
  }

  private async getStatistics(dictionaryId: string): Promise<Record<string, Statistic>> {
    return withTrace('getStatistics', async () => {
      const map: Record<string, Statistic> = {};
      if (this.uid) {
        const snapshot = await get(query(ref(this.db, `statistics/${this.uid}`), orderByChild('dictionaryId'), equalTo(dictionaryId)));
        snapshot.forEach(payload => {
          map[payload.key as string] = createStatistic(payload);
        });
      }
      return map;
    });
  }
}

export default new DictionaryService(firebaseInstance);

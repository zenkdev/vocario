import firebase from 'firebase/app';

import { createPlainJS, createStatistic, Dictionary, Statistic, Word } from '../models';
import { omitUndefined } from '../utils';
import firebaseInstance from './Firebase';

const { auth, db, withTrace } = firebaseInstance;

class StatisticsService {
  private readonly database: firebase.database.Database;

  private uid: string | null = null;

  constructor() {
    this.database = db;
    auth.onAuthStateChanged(user => {
      this.uid = user && user.uid;
    });
  }

  /** GET statistics from the server */
  public async getStatistics(): Promise<Statistic[]> {
    return withTrace('getStatistics', async () => {
      if (!this.uid) {
        return [];
      }

      const snapshot = await this.database.ref(`statistics/${this.uid}`).once('value');
      const arr: Statistic[] = [];
      snapshot.forEach(payload => {
        arr.push(createStatistic(payload));
      });
      return arr;
    });
  }

  /** RESET all the progress */
  public async resetProgress(): Promise<void> {
    return withTrace('resetProgress', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      await this.database.ref(`statistics/${this.uid}`).remove();
    });
  }

  /** UPDATE statistics on the server */
  public async updateStatistics(dictionary: Dictionary, word: Word): Promise<void> {
    return withTrace('updateFromWord', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      const { id, texts, ...rest } = word;
      const poco = createPlainJS(texts);
      const ref = this.database.ref(`statistics/${this.uid}`);
      const updates: Record<string, Partial<Statistic>> = {
        [id]: omitUndefined({ ...rest, ...poco, dictionaryId: dictionary.id }),
      };
      await ref.update(updates);
    });
  }
}

export default new StatisticsService();

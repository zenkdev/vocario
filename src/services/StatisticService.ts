import firebase from 'firebase/app';

import { createPlainJS, Dictionary, Statistic, Word } from '../models';
import { omitUndefined } from '../utils';
import firebaseInstance from './Firebase';

class StatisticService {
  private readonly db: firebase.database.Database;

  private uid: string | null = null;

  constructor() {
    this.db = firebaseInstance.db;
    firebaseInstance.auth.onAuthStateChanged(user => {
      this.uid = user && user.uid;
    });
  }

  // /** GET statistics from the server */
  // public async getStatistics(): Promise<Statistic[]> {
  //   return firebaseInstance.withTrace('getStatistics', async () => {
  //     if (!this.uid) {
  //       return [];
  //     }

  //     const snapshot = await this.db.ref(`statistics/${this.uid}`).once('value');
  //     const arr: Statistic[] = [];
  //     snapshot.forEach(payload => {
  //       arr.push(createStatistic(payload));
  //     });
  //     return arr;
  //   });
  // }

  /** RESET all the progress */
  public async resetProgress(): Promise<void> {
    return firebaseInstance.withTrace('resetProgress', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      await this.db.ref(`statistics/${this.uid}`).remove();
    });
  }

  public async updateFromWord({ id: dictionaryId }: Dictionary, word: Word): Promise<void> {
    return firebaseInstance.withTrace('updateFromWord', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      const { id, texts, ...rest } = word;
      const poco = createPlainJS(texts);
      const ref = this.db.ref(`statistics/${this.uid}`);
      const updates: Record<string, Partial<Statistic>> = {
        [id]: omitUndefined({ ...rest, ...poco, dictionaryId }),
      };
      await ref.update(updates);
    });
  }
}

export default new StatisticService();

import firebase from 'firebase/app';

import { createPlainJS, createStatistic, Statistic, Word } from '../models';
import { omitUndefined } from '../utils';
import firebaseInstance, { Firebase } from './Firebase';

const { withTrace } = firebaseInstance;

type Database = firebase.database.Database;

class StatisticsService {
  private readonly db: Database;

  private uid: string | null = null;

  constructor({ db, auth }: Firebase) {
    this.db = db;
    auth.onAuthStateChanged(user => {
      this.uid = user && user.uid;
    });
  }

  /** GET statistics from the server */
  public getStatistics = async (): Promise<Statistic[]> => {
    return withTrace('getStatistics', async () => {
      if (!this.uid) {
        return [];
      }

      const snapshot = await this.db.ref(`statistics/${this.uid}`).once('value');
      const arr: Statistic[] = [];
      snapshot.forEach(payload => {
        arr.push(createStatistic(payload));
      });
      return arr;
    });
  };

  /** RESET all the progress */
  public resetProgress = async (): Promise<void> => {
    return withTrace('resetProgress', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      await this.db.ref(`statistics/${this.uid}`).remove();
    });
  };

  /** UPDATE statistics on the server */
  public updateStatistics = async (dictionaryId: string, { id, texts, ...rest }: Word): Promise<void> => {
    return withTrace('updateFromWord', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      const poco = createPlainJS(texts);
      const ref = this.db.ref(`statistics/${this.uid}`);
      const updates: Record<string, Partial<Statistic>> = {
        [id]: omitUndefined({ ...rest, ...poco, dictionaryId }),
      };
      await ref.update(updates);
    });
  };
}

export default new StatisticsService(firebaseInstance);

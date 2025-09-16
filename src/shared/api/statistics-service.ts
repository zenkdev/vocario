import { DataSnapshot, Database, get, ref, remove, update } from 'firebase/database';
import { type Statistic, type Word, createPlainJS, createStatistic } from '@/shared/model';
import { omitUndefined } from '@/shared/lib';

import { Firebase, firebaseInstance } from './firebase';

const { withTrace } = firebaseInstance;

export class StatisticsService {
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

      const snapshot = await get(ref(this.db, `statistics/${this.uid}`));
      const arr: Statistic[] = [];
      snapshot.forEach((payload: DataSnapshot) => {
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

      await remove(ref(this.db, `statistics/${this.uid}`));
    });
  };

  /** UPDATE statistics on the server */
  public updateStatistics = async (dictionaryId: string, { id, texts, ...rest }: Word): Promise<void> => {
    return withTrace('updateFromWord', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      const poco = createPlainJS(texts);
      const dbRef = ref(this.db, `statistics/${this.uid}`);
      const updates: Record<string, Partial<Statistic>> = {
        [id]: omitUndefined({ ...rest, ...poco, dictionaryId }),
      };
      await update(dbRef, updates);
    });
  };
}

export const statisticsService = new StatisticsService(firebaseInstance);

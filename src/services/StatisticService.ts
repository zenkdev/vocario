import firebase from 'firebase/app';

import { createPlainJS, createStatistic, Dictionary, Statistic, Word } from '../models';
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

  /** GET statistics from the server */
  public async getStatistics(): Promise<Statistic[]> {
    return firebaseInstance.withTrace('getStatistics', async () => {
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
  }

  /** RESET all the progress */
  public async resetProgress(): Promise<void> {
    return firebaseInstance.withTrace('resetProgress', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      await this.db.ref(`statistics/${this.uid}`).remove();
      await this.cleanupDictionaries(this.uid);
    });
  }

  public async updateFromWord({ id }: Dictionary, word: Word): Promise<void> {
    return firebaseInstance.withTrace('updateFromWord', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      await this.updateStatistics(word, this.uid, id);
      // await Promise.all([this.updateWordsCompleted(id, this.uid, wordsCompleted), this.updateStatistics(word, this.uid, id)]);
    });
  }

  private async cleanupDictionaries(uid: string): Promise<void> {
    const snapshot = await this.db.ref('dictionaryList').once('value');
    const arr: Promise<void>[] = [];
    snapshot.forEach(payload => {
      arr.push(this.updateWordsCompleted(payload.key as string, uid, null));
    });
    await Promise.all(arr);
  }

  private async updateWordsCompleted(dictionaryId: string, uid: string, newValue: number | null): Promise<void> {
    await this.db.ref(`dictionaryList/${dictionaryId}`).transaction(data => {
      if (data) {
        const { wordsCompleted, ...rest } = data;
        if (wordsCompleted == null) {
          if (newValue == null) {
            return data; // nothing to change
          }
          return { wordsCompleted: { [uid]: newValue }, ...rest };
        }
        if (newValue != null) {
          wordsCompleted[uid] = newValue;
        } else {
          delete wordsCompleted[uid];
        }
        return { wordsCompleted, ...rest };
      }
      return data;
    });
  }

  private async updateStatistics(word: Word, uid: string, dictionaryId: string): Promise<void> {
    const { id, texts, ...rest } = word;
    const poco = createPlainJS(texts);
    const ref = this.db.ref(`statistics/${uid}`);
    const updates: Record<string, Partial<Statistic>> = {
      [id]: omitUndefined({ ...rest, ...poco, dictionaryId }),
    };
    await ref.update(updates);
  }
}

export default new StatisticService();

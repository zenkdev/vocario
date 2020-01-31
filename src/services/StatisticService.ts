import firebase from 'firebase/app';

import { createPlainJS, createStatistic, Dictionary, Statistic, Word } from '../models';
import { omitUndefined } from '../utils';
import createLogger from './createLogger';
import firebaseInstance from './Firebase';

class StatisticService {
  private logger = createLogger('StatisticService');

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
    return this.withLog('getStatistics', async () => {
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
    return this.withLog('resetProgress', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      await this.db.ref(`statistics/${this.uid}`).remove();
      await this.cleanupDictionaries(this.uid);
    });
  }

  public async updateFromWord(dictionary: Dictionary, word: Word): Promise<void> {
    return this.withLog('updateFromWord', async () => {
      if (!this.uid) {
        throw new Error('User UID can not be null');
      }

      await Promise.all([
        this.updateWordsLearned(dictionary.id, this.uid, dictionary.wordsLearned),
        this.updateStatistics(word, this.uid, dictionary.id),
      ]);
    });
  }

  private async cleanupDictionaries(uid: string): Promise<void> {
    const snapshot = await this.db.ref('dictionaryList').once('value');
    const arr: Promise<void>[] = [];
    snapshot.forEach(payload => {
      arr.push(this.updateWordsLearned(payload.key as string, uid, null));
    });
    await Promise.all(arr);
  }

  private async updateWordsLearned(dictionaryId: string, uid: string, newValue: number | null): Promise<void> {
    await this.db.ref(`dictionaryList/${dictionaryId}`).transaction(data => {
      if (data) {
        const { wordsLearned, ...rest } = data;
        if (wordsLearned == null) {
          if (newValue == null) {
            return data; // nothing to change
          }
          return { wordsLearned: { [uid]: newValue }, ...rest };
        }
        if (newValue != null) {
          wordsLearned[uid] = newValue;
        } else {
          delete wordsLearned[uid];
        }
        return { wordsLearned, ...rest };
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

  private async withLog<R>(m: string, fn: () => Promise<R>): Promise<R> {
    const dt = Date.now();
    const r = await fn();
    const ms = Date.now() - dt;
    this.logger.info(`${m}: ${ms}ms`);
    return r;
  }
}

export default new StatisticService();

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

import { Dictionary, Word } from '../models';
import firebaseInstance from './Firebase';

// Create a promise that resolves in <ms> milliseconds
const timeout = (ms: number) =>
  new Promise(resolve => {
    const id = setTimeout(() => {
      clearTimeout(id);
      resolve(`Timed out in ${ms}ms.`);
    }, ms);
  });

class DictionaryService {
  private readonly db: firebase.database.Database;

  private uid: string | null = null;

  constructor() {
    this.db = firebaseInstance.db;
    firebaseInstance.auth.onAuthStateChanged(user => {
      this.uid = user && user.uid;
    });
  }

  /**
   * GET dictionaries from the server
   */
  public async getDictionaries(): Promise<Dictionary[]> {
    await timeout(0);
    const snapshot = await this.db.ref('dictionaryList').once('value');
    const arr: Dictionary[] = [];
    snapshot.forEach(payload => {
      arr.push(Dictionary.fromSnapshot(payload, this.uid));
    });
    return arr;
  }

  /** GET dictionary by id. */
  public async getDictionary(id: string): Promise<Dictionary> {
    const dictionary = await this.getDictionaryById(id);
    const words = await this.getWordsByDictionaryId(id);
    return { ...dictionary, words };
  }

  /**
   * GET statistics from the server
   */
  public async getStatistics(): Promise<Word[]> {
    if (!this.uid) {
      return [];
    }

    const snapshot = await this.db.ref(`statistics/${this.uid}`).once('value');
    const arr: Word[] = [];
    snapshot.forEach(payload => {
      arr.push(Word.fromSnapshot(payload, this.uid));
    });
    return arr;
  }

  public async updateDictionaryFromWord(dictionary: Dictionary, word: Word, valid: boolean): Promise<void> {
    if (!this.uid) {
      return;
    }

    let wordsLearned = dictionary.wordsLearned + (valid && word.count === word.errors ? 1 : 0);
    if (wordsLearned > dictionary.totalWords) {
      wordsLearned = dictionary.totalWords;
    }
    const promises: Promise<void>[] = [];
    if (valid) {
      promises.push(this.updateDictionaryWordsLearned(dictionary.id, this.uid, wordsLearned));
    }
    promises.push(this.updateWord(word.id, this.uid, valid));
    promises.push(this.updateStatistics(word, this.uid, valid));

    await Promise.all(promises);
  }

  private async getDictionaryById(id: string): Promise<Dictionary> {
    const snapshot = await this.db.ref(`dictionaryList/${id}`).once('value');
    return Dictionary.fromSnapshot(snapshot, this.uid);
  }

  private async getWordsByDictionaryId(dictionaryId: string): Promise<Word[]> {
    const snapshot = await this.db
      .ref('wordList')
      .orderByChild('dictionaryId')
      .equalTo(dictionaryId)
      .once('value');
    const arr: Word[] = [];
    snapshot.forEach(payload => {
      arr.push(Word.fromSnapshot(payload, this.uid));
    });
    return arr;
  }

  private async updateDictionaryWordsLearned(dictionaryId: string, uid: string, wordsLearned: number): Promise<void> {
    await this.db.ref(`dictionaryList/${dictionaryId}`).transaction(data => {
      if (data) {
        if (!data.wordsLearned) {
          // eslint-disable-next-line no-param-reassign
          data.wordsLearned = {};
        }
        // eslint-disable-next-line no-param-reassign
        data.wordsLearned[uid] = wordsLearned;
      }
      return data;
    });
  }

  private async updateWord(wordId: string, uid: string, valid: boolean): Promise<void> {
    await this.db.ref(`wordList/${wordId}`).transaction(data => {
      if (data) {
        if (!data.count) {
          // eslint-disable-next-line no-param-reassign
          data.count = {};
        }
        if (!data.errors) {
          // eslint-disable-next-line no-param-reassign
          data.errors = {};
        }
        const count = data.count[uid] || 0;
        const errors = data.errors[uid] || 0;

        // eslint-disable-next-line no-param-reassign
        data.count[uid] = count + 1;
        // eslint-disable-next-line no-param-reassign
        data.errors[uid] = errors + (valid ? 0 : 1);
      }
      return data;
    });
  }

  private async updateStatistics(word: Word, uid: string, valid: boolean): Promise<void> {
    const { id, ...rest } = word;
    const ref = this.db.ref(`statistics/${uid}`);
    await ref.child(id).once('value', snapshot => {
      const updates: Record<string, Partial<Word>> = {};
      const snap = snapshot.val();
      if (snap) {
        updates[id] = {
          ...rest,
          count: snap.count + 1,
          errors: snap.errors + (valid ? 0 : 1),
        };
      } else {
        updates[id] = { ...rest, count: 1, errors: valid ? 0 : 1 };
      }
      return ref.update(updates);
    });
  }
}

export default new DictionaryService();

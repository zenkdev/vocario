import firebase from 'firebase/app';

import Word from './word';

class Dictionary {
  constructor(id?: string, name?: string, totalWords?: number, wordsLearned?: number, words?: Word[]) {
    this.id = id || '';
    this.name = name || '';
    this.totalWords = totalWords || 0;
    this.wordsLearned = wordsLearned || 0;
    this.words = words || [];
  }

  public id: string;

  public name: string;

  public totalWords: number;

  public wordsLearned: number;

  public words: Word[];

  static fromSnapshot(payload: firebase.database.DataSnapshot, uid: string | null): Dictionary {
    const id = payload.key as string;
    const { name, totalWords, wordsLearned: wordsLearnedObject } = payload.val();
    const wordsLearned = (wordsLearnedObject && uid && wordsLearnedObject[uid]) || 0;
    return new Dictionary(id, name, totalWords, wordsLearned);
  }
}

export default Dictionary;

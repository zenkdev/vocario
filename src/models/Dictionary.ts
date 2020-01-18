import firebase from 'firebase/app';

import { Word } from './Word';

class Dictionary {
  constructor({
    id,
    name,
    wordsCount,
    wordsLearned,
    words,
  }: {
    id?: string;
    name?: string;
    wordsCount?: number;
    wordsLearned?: number;
    words?: Word[];
  }) {
    this.id = id || '';
    this.name = name || '';
    this.wordsCount = wordsCount || 0;
    this.wordsLearned = wordsLearned || 0;
    this.words = words || [];
  }

  public id: string;

  public name: string;

  public wordsCount: number;

  public wordsLearned: number;

  public words: Word[];

  static fromSnapshot(payload: firebase.database.DataSnapshot, uid: string | null): Dictionary {
    const id = payload.key as string;
    const { name, wordsCount, totalWords, wordsLearned: wordsLearnedObject } = payload.val();
    const wordsLearned = (wordsLearnedObject && uid && wordsLearnedObject[uid]) || 0;
    return new Dictionary({ id, name, wordsCount: wordsCount || totalWords, wordsLearned });
  }
}

export default Dictionary;

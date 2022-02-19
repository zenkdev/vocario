import { DataSnapshot } from 'firebase/database';

import { defaultTo } from '../utils';
import { Word } from './Word';

export type Dictionary = {
  id: string;
  name: string;
  wordsCount: number;
  wordsCompleted: number;
  words: Record<string, Word>;
};

export function createDictionary(payload: DataSnapshot, uid: string | null): Dictionary {
  const { name, wordsCount, wordsCompleted: wordsCompletedObject } = payload.val();
  const wordsCompleted = defaultTo(wordsCompletedObject && uid && wordsCompletedObject[uid], 0);
  return {
    id: defaultTo(payload.key, ''),
    name: defaultTo(name, ''),
    wordsCount: defaultTo(wordsCount, 0),
    wordsCompleted: defaultTo(wordsCompleted, 0),
    words: {},
  };
}

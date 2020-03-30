import firebase from 'firebase/app';

import { Word } from './Word';
import defaultTo from '../utils/defaultTo';

type DataSnapshot = firebase.database.DataSnapshot;

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

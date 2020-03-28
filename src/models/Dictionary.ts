import Word from './Word';

export type Dictionary = {
  id: string;
  name: string;
  wordsCount: number;
  wordsCompleted: number;
  words: Word[];
};

export function createDictionary(payload: firebase.database.DataSnapshot, uid: string | null): Dictionary {
  const id = payload.key;
  const { name, wordsCount, wordsCompleted: wordsCompletedObject } = payload.val();
  const wordsCompleted = (wordsCompletedObject && uid && wordsCompletedObject[uid]) || 0;
  return { id: id || '', name: name || '', wordsCount: wordsCount || 0, wordsCompleted: wordsCompleted || 0, words: [] };
}

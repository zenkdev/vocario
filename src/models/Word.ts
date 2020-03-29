import { createTextArray, Text } from './Text';

export type Word = {
  id: string;
  texts: Text[];
  translation: string;
  category: string;
  partOfSpeech: string;
  occurs?: string[];
};

export function createWord(payload: firebase.database.DataSnapshot): Word {
  const id = payload.key as string;
  const { translation, category, partOfSpeech, ...rest } = payload.val();
  const texts = createTextArray(rest);
  return { id: id || '', translation: translation || '', category: category || '', partOfSpeech: partOfSpeech || '', texts, occurs: [] };
}

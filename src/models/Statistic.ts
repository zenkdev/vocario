import { createTextArray, Text } from './Text';

export type Statistic = {
  id: string;
  dictionaryId: string;
  texts: Text[];
  translation: string;
  category: string;
  partOfSpeech: string;
  occurs: string[];
};

export function createStatistic(payload: firebase.database.DataSnapshot): Statistic {
  const id = payload.key;
  const { dictionaryId, translation, category, partOfSpeech, occurs, ...rest } = payload.val();
  const texts = createTextArray(rest);
  return {
    id: id || '',
    dictionaryId: dictionaryId || '',
    texts: texts || [],
    translation: translation || '',
    category: category || '',
    partOfSpeech: partOfSpeech || '',
    occurs,
  };
}

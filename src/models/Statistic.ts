import { fromNextOccur } from './factory';
import { Text, createTextArray } from './Text';

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
  const { dictionaryId, translation, category, partOfSpeech, count, firstOccur, nextOccur, occurs: o, ...rest } = payload.val();
  const texts = createTextArray(rest);
  if (Array.isArray(o) && o.length) {
    return {
      id: id || '',
      dictionaryId: dictionaryId || '',
      texts: texts || [],
      translation: translation || '',
      category: category || '',
      partOfSpeech: partOfSpeech || '',
      occurs: o || [],
    };
  }

  const occurs = [];
  if (firstOccur) {
    occurs.push(firstOccur);
  }
  if (count != null) {
    for (let n = 0; n < count; n += 1) {
      occurs.push(fromNextOccur(nextOccur, count));
    }
  }
  return {
    id: id || '',
    dictionaryId: dictionaryId || '',
    texts: texts || [],
    translation: translation || '',
    category: category || '',
    partOfSpeech: partOfSpeech || '',
    occurs: occurs || [],
  };
}

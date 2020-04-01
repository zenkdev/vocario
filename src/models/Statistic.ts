import firebase from 'firebase/app';

import { createTextArray, Text } from './Text';
import defaultTo from '../utils/defaultTo';

type DataSnapshot = firebase.database.DataSnapshot;

export type Statistic = {
  id: string;
  dictionaryId: string;
  texts: Text[];
  translation: string;
  category: string;
  partOfSpeech: string;
  occurs: string[];
};

export function createStatistic(payload: DataSnapshot): Statistic {
  const { dictionaryId, translation, category, partOfSpeech, occurs, ...rest } = payload.val();
  const texts = createTextArray(rest);
  return {
    id: defaultTo(payload.key, ''),
    dictionaryId: defaultTo(dictionaryId, ''),
    texts: defaultTo(texts, []),
    translation: defaultTo(translation, ''),
    category: defaultTo(category, ''),
    partOfSpeech: defaultTo(partOfSpeech, ''),
    occurs,
  };
}

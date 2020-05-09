import firebase from 'firebase/app';

import defaultTo from '../utils/defaultTo';
import isEmpty from '../utils/isEmpty';
import { createTextArray } from './Text';
import { Word } from './Word';

type DataSnapshot = firebase.database.DataSnapshot;

export const COUNT_TO_COMPLETE = 3;

const completed = ({ occurs }: Word): boolean => !isEmpty(occurs) && occurs.length > COUNT_TO_COMPLETE;

export type Statistic = Word & {
  dictionaryId: string;
  occurs: string[];
  mistakes: string[];
};

export function createStatistic(payload: DataSnapshot): Statistic {
  const { dictionaryId, translation, category, partOfSpeech, isCompleted, occurs, mistakes, ...rest } = payload.val();
  const texts = createTextArray(rest);
  return {
    id: defaultTo(payload.key, ''),
    dictionaryId: defaultTo(dictionaryId, ''),
    texts: defaultTo(texts, []),
    translation: defaultTo(translation, ''),
    category: defaultTo(category, ''),
    partOfSpeech: defaultTo(partOfSpeech, ''),
    isCompleted: defaultTo(isCompleted, completed(occurs)),
    occurs,
    mistakes: defaultTo(mistakes, []),
  };
}

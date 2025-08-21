import { DataSnapshot } from 'firebase/database';

import type { Word } from './Word';
import { createTextArray } from './Text';
import { defaultTo, isEmpty } from '../utils';

const COUNT_TO_COMPLETE = Number(import.meta.env.REACT_APP_COUNT_TO_COMPLETE);

const completed = (occurs?: string[]): boolean => !isEmpty(occurs) && occurs.length > COUNT_TO_COMPLETE;

export type Statistic = Word & {
  dictionaryId: string;
  occurs: string[];
  mistakes: string[];
};

export function createStatistic(payload: DataSnapshot): Statistic {
  const { dictionaryId, translation, category, partOfSpeech, isCompleted, occurs, mistakes, ...rest } = payload.val();

  return {
    id: defaultTo(payload.key, ''),
    dictionaryId: defaultTo(dictionaryId, ''),
    texts: defaultTo(createTextArray(rest), []),
    translation: defaultTo(translation, ''),
    category: defaultTo(category, ''),
    partOfSpeech: defaultTo(partOfSpeech, ''),
    isCompleted: defaultTo(isCompleted, completed(occurs)),
    occurs,
    mistakes: defaultTo(mistakes, []),
  };
}

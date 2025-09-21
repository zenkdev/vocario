import { DataSnapshot } from 'firebase/database';
import { addDays } from 'date-fns/addDays';
import { defaultTo, isEmpty } from '@/shared/lib';
import { parseISO } from 'date-fns/parseISO';
import { startOfDay } from 'date-fns/startOfDay';

import { type Text, createTextArray } from './text';

export type Word = {
  id: string;
  texts: Text[];
  translation: string;
  category: string;
  partOfSpeech: string;
  isCompleted: boolean;
  occurs?: string[];
  mistakes?: string[];
};

export function createWord(payload: DataSnapshot): Word {
  const { translation, category, partOfSpeech, isCompleted, ...rest } = payload.val();
  const texts = createTextArray(rest);
  return {
    id: defaultTo(payload.key, ''),
    translation: defaultTo(translation, ''),
    category: defaultTo(category, ''),
    partOfSpeech: defaultTo(partOfSpeech, ''),
    isCompleted: defaultTo(isCompleted, false),
    occurs: [],
    texts,
  };
}

export function nextOccur({ occurs }: Word): Date | undefined {
  if (isEmpty(occurs)) {
    return undefined;
  }
  const num = occurs.length - 1;
  const date = parseISO(occurs[num]);
  switch (num) {
    case 0:
      return date;
    case 1:
      return addDays(startOfDay(date), 1);
    case 2:
      return addDays(startOfDay(date), 3);
    default:
      return undefined;
  }
}

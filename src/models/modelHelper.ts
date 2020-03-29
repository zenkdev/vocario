import addDays from 'date-fns/addDays';
import differenceInDays from 'date-fns/differenceInDays';
import parseISO from 'date-fns/parseISO';
import startOfDay from 'date-fns/startOfDay';
import startOfToday from 'date-fns/startOfToday';

import { Dictionary } from './Dictionary';
import { Word } from './Word';

const COUNT_TO_COMPLETE = 3;
export const NEW_WORDS_PER_DAY = 20;

const isEmpty = <T>(value: Array<T> | undefined): boolean => value == null || !Array.isArray(value) || value.length === 0;

const count = <T>(arr: Array<T>, callback: (value: T) => boolean): number => arr.filter(callback).length;

export function nextOccur({ occurs }: Word): Date | undefined {
  if (isEmpty(occurs)) {
    return undefined;
  }
  const num = (occurs as string[]).length - 1;
  const date = parseISO((occurs as string[])[num] as string);
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

const isToday = (value: Date | string | undefined): boolean =>
  !!value && differenceInDays(startOfDay(typeof value === 'string' ? parseISO(value) : value), startOfToday()) <= 0;

const isTodayExact = (value: Date | string | undefined): boolean =>
  !!value && differenceInDays(startOfDay(typeof value === 'string' ? parseISO(value) : value), startOfToday()) === 0;

const isNew = ({ occurs }: Word): boolean => isEmpty(occurs);
const isCompleted = ({ occurs }: Word): boolean => !isEmpty(occurs) && (occurs as string[]).length > COUNT_TO_COMPLETE;
const isFirstOccurToday = ({ occurs }: Word): boolean => !isEmpty(occurs) && isTodayExact((occurs as string[])[0]);
const isNextOccurToday = (word: Word): boolean => isToday(nextOccur(word));

function wordsToLearn(dictionary: Dictionary): Word[] {
  const words = Object.values(dictionary.words);
  const today = words.reduce((acc, cur) => acc + (isFirstOccurToday(cur) ? 1 : 0), 0);
  return words.filter(cur => (today < NEW_WORDS_PER_DAY && isNew(cur)) || (!isNew(cur) && isNextOccurToday(cur) && !isCompleted(cur)));
}

function nextOccurString(word: Word) {
  const value = nextOccur(word);
  if (!value) {
    return undefined;
  }
  const days = differenceInDays(startOfDay(value), startOfToday());
  if (days <= 0) {
    return 'today';
  }
  if (days === 1) {
    return 'tomorrow';
  }
  return `in ${days} days`;
}

export default {
  isEmpty,
  count,

  isTodayExact,

  isNew,
  isCompleted,
  isFirstOccurToday,
  isNextOccurToday,

  audioUrl: ({ id }: Word): string => `https://us-central1-vocabionic.cloudfunctions.net/synthesize/${id}`,
  getText: ({ texts }: Word): string => texts.reduce((acc, { text }) => acc + (acc && text ? ', ' : '') + (text || ''), ''),
  getTextWithLang: ({ texts }: Word): string =>
    texts.reduce((acc, { text, lang }) => acc + (acc && text ? ', ' : '') + (text || '') + (text && lang ? ` (${lang})` : ''), ''),
  getTranscription: ({ texts }: Word): string =>
    texts.reduce((acc, { transcription }) => acc + (acc && transcription ? ', ' : '') + (transcription || ''), ''),

  wordsToLearn,

  nextOccurString,
};

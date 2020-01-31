import addDays from 'date-fns/addDays';
import differenceInDays from 'date-fns/differenceInDays';
import parseISO from 'date-fns/parseISO';
import startOfDay from 'date-fns/startOfDay';
import startOfToday from 'date-fns/startOfToday';

import Dictionary from './Dictionary';
import Word from './Word';

const COUNT_TO_COMPLETE = 3;
const NEW_WORDS_PER_DAY = 20;

function cnt<T>(arr: Array<T>, callback: (value: T) => boolean): number {
  return arr.filter(callback).length;
}

// function tbl(arr: Word[], callback: (value: Word) => boolean) {
//   return arr.filter(callback).map(w => ({ i: w.id, t: w.translation, c: w.count, o: JSON.stringify(w.occurs) }));
// }

function nextOccur({ occurs, count }: Word): Date | undefined {
  if (count == null || !occurs || !occurs[count]) {
    return undefined;
  }
  const date = parseISO(occurs[count] as string);
  switch (count) {
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

function isToday(value: Date | string | undefined): boolean {
  return !!value && differenceInDays(startOfDay(typeof value === 'string' ? parseISO(value) : value), startOfToday()) <= 0;
}

function isTodayExact(value: Date | string | undefined): boolean {
  return !!value && differenceInDays(startOfDay(typeof value === 'string' ? parseISO(value) : value), startOfToday()) === 0;
}

// count === null          - new
// count >= 3              - completed
// count >= 0 & count < 3
// occurs[count] === today - next

const isNew = ({ count }: Word): boolean => count == null;
const isCompleted = ({ count }: Word): boolean => count != null && count >= COUNT_TO_COMPLETE;
const isFirstOccurToday = ({ occurs }: Word): boolean => !!occurs && isTodayExact(occurs[0]);
const isNextOccurToday = (word: Word): boolean => isToday(nextOccur(word));

function wordsToLearn({ words }: Dictionary): Word[] {
  const today = words.reduce((acc, cur) => acc + (isFirstOccurToday(cur) ? 1 : 0), 0);
  return words.filter(cur => (today < NEW_WORDS_PER_DAY && isNew(cur)) || (!isNew(cur) && isNextOccurToday(cur) && !isCompleted(cur)));
}

function dailyStatistics(dictionary?: Dictionary): { completed: number; total: number; more: boolean } {
  if (!dictionary) {
    return { completed: 0, total: 0, more: false };
  }

  const { words } = dictionary;

  const today = cnt(words, w => isFirstOccurToday(w));
  const first = Math.min(today < NEW_WORDS_PER_DAY ? cnt(words, w => isNew(w)) : 0, NEW_WORDS_PER_DAY - today);
  const next = cnt(words, w => isNextOccurToday(w));
  const completed = cnt(words, ({ count, occurs }) => count != null && !!occurs && isTodayExact(occurs[count]));
  const total = first + next + completed;

  // console.table(tbl(words, w => isFirstOccurToday(w)));
  // console.table(tbl(words, w => isNew(w)));
  // console.table(tbl(words, w => isNextOccurToday(w)));
  // console.table(tbl(words, ({ count, occurs }) => count != null && !!occurs && isTodayExact(occurs[count])));
  // console.log({ completed, total, today, first, next });

  const more = words.some(w => !isCompleted(w));

  return { completed, total, more };
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
  isNew,
  isCompleted,

  getText: ({ texts }: Word): string => texts.reduce((acc, { text }) => acc + (acc && text ? ', ' : '') + (text || ''), ''),
  getTextWithLang: ({ texts }: Word): string =>
    texts.reduce((acc, { text, lang }) => acc + (acc && text ? ', ' : '') + (text || '') + (text && lang ? ` (${lang})` : ''), ''),
  getTranscription: ({ texts }: Word): string =>
    texts.reduce((acc, { transcription }) => acc + (acc && transcription ? ', ' : '') + (transcription || ''), ''),

  wordsToLearn,

  dailyStatistics,

  nextOccurString,
};

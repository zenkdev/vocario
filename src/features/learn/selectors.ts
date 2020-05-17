import differenceInDays from 'date-fns/differenceInDays';
import parseISO from 'date-fns/parseISO';
import startOfDay from 'date-fns/startOfDay';
import startOfToday from 'date-fns/startOfToday';

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { nextOccur, Word } from '../../models';
import { count, isEmpty, randomNumber } from '../../utils';

const NEW_WORDS_PER_DAY = Number(process.env.REACT_APP_NEW_WORDS_PER_DAY);

const isNew = ({ occurs }: Word): boolean => isEmpty(occurs);
const isToday = (value: Date | string | undefined): boolean =>
  !!value && differenceInDays(startOfDay(typeof value === 'string' ? parseISO(value) : value), startOfToday()) <= 0;
const isTodayExact = (value: Date | string | undefined): boolean =>
  !!value && differenceInDays(startOfDay(typeof value === 'string' ? parseISO(value) : value), startOfToday()) === 0;
const isFirstOccurToday = ({ occurs }: Word): boolean => !isEmpty(occurs) && isTodayExact(occurs[0]);
const isNextOccurToday = (word: Word): boolean => isToday(nextOccur(word));

const selectLearn = (state: RootState) => state.learn;

export const selectTitle = createSelector(selectLearn, ({ dictionary }): string => {
  if (!dictionary || !dictionary.name) {
    return 'Learn';
  }
  return dictionary.name;
});

export const selectWord = createSelector(selectLearn, ({ dictionary, wordId }): Word | null => {
  if (!dictionary || !wordId || !dictionary.words[wordId]) {
    return null;
  }
  return dictionary.words[wordId];
});

export const selectAudioUrl = createSelector(selectLearn, ({ wordId }): string | undefined => {
  return wordId ? `https://us-central1-vocario.cloudfunctions.net/synthesize/${wordId}` : undefined;
});

export const selectOptions = createSelector([selectLearn, selectWord], ({ dictionary }, word) => {
  if (!dictionary || !word) {
    return [];
  }
  const arr: string[] = [word.translation];
  const words = Object.values(dictionary.words);
  const numOptions = Math.min(3, words.length);
  while (arr.length < numOptions) {
    const opt = words[randomNumber(0, words.length - 1)];
    if (opt && !arr.includes(opt.translation)) {
      arr.push(opt.translation);
    }
  }
  return arr.sort();
});

export const selectDailyStatistics = createSelector(selectLearn, ({ dictionary }): { completed: number; total: number; more: boolean } => {
  if (!dictionary) {
    return { completed: 0, total: 0, more: false };
  }

  const words = Object.values(dictionary.words);
  const today = count(words, isFirstOccurToday);
  const first = Math.min(today < NEW_WORDS_PER_DAY ? count(words, isNew) : 0, NEW_WORDS_PER_DAY - today);
  const next = count(words, isNextOccurToday);
  const completed = count(words, ({ occurs }) => !isEmpty(occurs) && occurs.length > 1 && isTodayExact(occurs.slice(-1)[0]));
  const total = first + next + completed;
  const more = words.some(w => !w.isCompleted);

  return { completed, total, more };
});

export const selectWordsToLearn = createSelector(selectLearn, ({ dictionary }): Word[] => {
  if (!dictionary) {
    return [];
  }
  const words = Object.values(dictionary.words);
  const today = count(words, isFirstOccurToday);
  return words.filter(w => (today < NEW_WORDS_PER_DAY && isNew(w)) || (!isNew(w) && isNextOccurToday(w) && !w.isCompleted));
});

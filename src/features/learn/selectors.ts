import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { modelHelper, Word } from '../../models';
import { NEW_WORDS_PER_DAY } from '../../models/modelHelper';
import randomNumber from '../../utils/randomNumber';

const { count, isFirstOccurToday, isNew, isNextOccurToday, isEmpty, isTodayExact, isCompleted } = modelHelper;

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
  return wordId ? `https://us-central1-vocabionic.cloudfunctions.net/synthesize/${wordId}` : undefined;
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
  const completed = count(words, ({ occurs }) => !isEmpty(occurs) && isTodayExact((occurs as string[]).slice(-1)[0]));
  const total = first + next + completed;
  const more = words.some(w => !isCompleted(w));

  // console.table(tbl(words, w => isFirstOccurToday(w)));
  // console.table(tbl(words, w => isNew(w)));
  // console.table(tbl(words, w => isNextOccurToday(w)));
  // console.table(tbl(words, ({ count, occurs }) => count != null && !!occurs && isTodayExact(occurs[count])));

  return { completed, total, more };
});

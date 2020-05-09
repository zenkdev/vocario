/* eslint-disable no-param-reassign */
import formatISO from 'date-fns/formatISO';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { COUNT_TO_COMPLETE, Dictionary, Word } from '../../models';
import { dictionaryService, statisticsService, toastService } from '../../services';
import { deleteWordId, getWordId, setWordId } from '../../services/LocalStoreManager';
import { Answer } from '../../types';
import { isEmpty, randomNumber } from '../../utils';
import { selectWord, selectWordsToLearn } from './selectors';

const { getDictionary } = dictionaryService;
const { updateStatistics } = statisticsService;

const completed = (occurs?: string[]): boolean => !isEmpty(occurs) && occurs.length > COUNT_TO_COMPLETE;

export type LearnState = {
  isLoading: boolean;
  dictionary: Dictionary | null;
  wordId: string | null;
  error: string | null;
  answer: Answer | null;
};

const initialState: LearnState = {
  isLoading: false,
  dictionary: null,
  wordId: null,
  error: null,
  answer: null,
};

const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    getDictionaryStart(state: LearnState) {
      state.isLoading = true;
    },
    getDictionarySuccess(state: LearnState, { payload }: PayloadAction<Dictionary | null>) {
      state.dictionary = payload;
      state.wordId = payload ? getWordId(payload.id) : null;
      state.isLoading = false;
      state.error = null;
      state.answer = null;
    },
    nextWord(state: LearnState, { payload }: PayloadAction<{ force?: boolean } | undefined>) {
      const { dictionary, wordId } = state;
      const force = payload && payload.force;

      if (dictionary) {
        const words = selectWordsToLearn({ learn: state } as any);
        let newWordId = force ? null : wordId;
        if (words.length) {
          if (!words.some(({ id }) => id === newWordId)) {
            newWordId = words[randomNumber(0, words.length - 1)].id;
          }
        } else {
          newWordId = null;
        }

        if (newWordId) {
          setWordId(dictionary.id, newWordId);
        } else {
          deleteWordId(dictionary.id);
        }
        state.wordId = newWordId;
        state.answer = null;
      }
    },
    updateWordSuccess(state: LearnState, { payload }: PayloadAction<{ word: Word; answer: Answer }>) {
      let { dictionary } = state;
      const { word, answer } = payload;

      if (dictionary) {
        const { wordsCompleted, wordsCount, words } = dictionary;

        dictionary = {
          ...dictionary,
          words: {
            ...words,
            [word.id]: word,
          },
          wordsCompleted: Math.min(wordsCompleted + (word.isCompleted ? 1 : 0), wordsCount),
        };

        deleteWordId(dictionary.id);
      }

      state.dictionary = dictionary;
      state.isLoading = false;
      state.error = null;
      state.answer = answer;
    },
    loadingFailed(state: LearnState, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { getDictionaryStart, getDictionarySuccess, nextWord, updateWordSuccess, loadingFailed } = learnSlice.actions;

export { nextWord };

export default learnSlice.reducer;

export const fetchDictionary = (id: string): AppThunk => async dispatch => {
  try {
    dispatch(getDictionaryStart());
    const dictionary = await getDictionary(id);
    dispatch(getDictionarySuccess(dictionary));
    dispatch(nextWord());
  } catch (e) {
    toastService.showError(e);
    dispatch(loadingFailed(e.toString()));
  }
};

export const updateWord = (answer: Answer): AppThunk => async (dispatch, getState) => {
  const state = getState();
  const dateStr = formatISO(Date.now());

  const { dictionary } = state.learn;
  let word = selectWord(state);

  try {
    if (dictionary && word) {
      let { occurs = [], mistakes } = word;
      if (occurs.length === 0) {
        occurs = [dateStr];
      }
      if (answer === Answer.valid) {
        occurs = [...occurs, dateStr];
      } else {
        mistakes = [...(mistakes || []), dateStr];
      }
      word = { ...word, isCompleted: completed(occurs), occurs, mistakes };

      await updateStatistics(dictionary.id, word);

      dispatch(updateWordSuccess({ word, answer }));
    }
  } catch (e) {
    toastService.showError(e);
    dispatch(loadingFailed(e.toString()));
  }
};

/* eslint-disable no-param-reassign */
import formatISO from 'date-fns/formatISO';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Dictionary, modelHelper, Word } from '../../models';
import { dictionaryService, statisticsService, toastService } from '../../services';
import { deleteWordId, getWordId, setWordId } from '../../services/LocalStoreManager';
import { randomNumber } from '../../utils';
import { selectWord } from './selectors';

const { getDictionary } = dictionaryService;
const { updateStatistics } = statisticsService;
const { isCompleted } = modelHelper;

export type LearnState = {
  isLoading: boolean;
  dictionary: Dictionary | null;
  wordId: string | null;
  error: string | null;
};

const initialState: LearnState = {
  isLoading: false,
  dictionary: null,
  wordId: null,
  error: null,
};

function loadingFailed(state: LearnState, { payload }: PayloadAction<string>) {
  state.isLoading = false;
  state.error = payload;
}

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
    },
    getDictionaryFailure: loadingFailed,
    nextWord(state: LearnState) {
      const { dictionary, wordId } = state;
      if (dictionary) {
        const words = modelHelper.wordsToLearn(dictionary);
        let newWordId = wordId;
        if (words.length) {
          if (!words.some(({ id }) => id === wordId)) {
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
      }
    },
    updateWordSuccess(state: LearnState, { payload }: PayloadAction<Word>) {
      let { dictionary } = state;

      if (dictionary) {
        const { wordsCompleted, wordsCount, words } = dictionary;

        dictionary = {
          ...dictionary,
          words: {
            ...words,
            [payload.id]: payload,
          },
          wordsCompleted: Math.min(wordsCompleted + (isCompleted(payload) ? 1 : 0), wordsCount),
        };

        deleteWordId(dictionary.id);
      }

      state.dictionary = dictionary;
      state.wordId = null;
      state.isLoading = false;
      state.error = null;
    },
    updateWordFailure: loadingFailed,
  },
});

export const {
  getDictionaryStart,
  getDictionarySuccess,
  getDictionaryFailure,
  nextWord,
  updateWordSuccess,
  updateWordFailure,
} = learnSlice.actions;

export default learnSlice.reducer;

export const fetchDictionary = (id: string): AppThunk => async dispatch => {
  try {
    dispatch(getDictionaryStart());
    const dictionary = await getDictionary(id);
    dispatch(getDictionarySuccess(dictionary));
    dispatch(nextWord());
  } catch (e) {
    toastService.showError(e);
    dispatch(getDictionaryFailure(e.toString()));
  }
};

export const updateWord = (valid: boolean): AppThunk => async (dispatch, getState) => {
  const state = getState();
  const dateStr = formatISO(Date.now());

  const { dictionary } = state.learn;
  let word = selectWord(state);

  try {
    if (dictionary && word) {
      let { occurs = [] } = word;
      if (occurs.length === 0) {
        occurs = [dateStr];
      }
      if (valid) {
        occurs = [...occurs, dateStr];
      }
      word = { ...word, occurs };

      await updateStatistics(dictionary.id, word);

      dispatch(updateWordSuccess(word));
      dispatch(nextWord());
    }
  } catch (e) {
    toastService.showError(e);
    dispatch(updateWordFailure(e.toString()));
  }
};

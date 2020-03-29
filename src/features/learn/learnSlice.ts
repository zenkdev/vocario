/* eslint-disable no-param-reassign */
import formatISO from 'date-fns/formatISO';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Dictionary, modelHelper } from '../../models';
import { dictionaryService, statisticsService, toastService } from '../../services';
import { deleteWordId, getWordId, setWordId } from '../../services/LocalStoreManager';
import { randomNumber } from '../../utils';
import { selectWord } from './selectors';

const { getDictionary } = dictionaryService;
const { updateStatistics } = statisticsService;

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
    getDictionaryFailure(state: LearnState, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
    nextWord(state: LearnState) {
      const { dictionary } = state;
      if (dictionary) {
        const words = modelHelper.wordsToLearn(dictionary);
        if (words.length) {
          let wordId = getWordId(dictionary.id);
          if (!words.some(({ id }) => id === wordId)) {
            wordId = words[randomNumber(0, words.length - 1)].id;
            setWordId(dictionary.id, wordId);
          }
          // const newWord = words[index];
          // setUrl(modelHelper.audioUrl(newWord));
          state.wordId = wordId;
        } else {
          deleteWordId(dictionary.id);
          state.wordId = null;
        }
      }
    },
  },
});

export const { getDictionaryStart, getDictionarySuccess, getDictionaryFailure, nextWord } = learnSlice.actions;

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
  let { dictionary } = state.learn;
  let word = selectWord(state);

  try {
    if (dictionary && word) {
      const { id, wordsCompleted, wordsCount, words } = dictionary;
      let { occurs = [] } = word;
      // if (!occurs) {
      //   occurs = [];
      // }
      if (occurs.length === 0) {
        occurs = [dateStr];
      }
      if (valid) {
        occurs = [...occurs, dateStr];
      }
      word = { ...word, occurs };

      await updateStatistics(id, word);

      dictionary = {
        ...dictionary,
        words: {
          ...words,
          [word.id]: word,
        },
        wordsCompleted: Math.min(wordsCompleted + (modelHelper.isCompleted(word) ? 1 : 0), wordsCount),
      };

      dispatch(getDictionarySuccess(dictionary));
      deleteWordId(id);
      dispatch(nextWord());
    }
  } catch (e) {
    toastService.showError(e);
    dispatch(getDictionaryFailure(e.toString()));
  }
};

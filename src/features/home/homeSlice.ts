/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Dictionary } from '../../models';
import { dictionaryService, toastService } from '../../services';

const { getDictionaries } = dictionaryService;

export type HomeState = {
  isLoading: boolean;
  data: Dictionary[];
  error: string | null;
};

const initialState: HomeState = {
  isLoading: false,
  data: [],
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getDictionariesStart(state: HomeState) {
      state.isLoading = true;
    },
    getDictionariesSuccess(state: HomeState, { payload }: PayloadAction<Dictionary[]>) {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    },
    getDictionariesFailure(state: HomeState, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getDictionariesStart, getDictionariesSuccess, getDictionariesFailure } = homeSlice.actions;

export default homeSlice.reducer;

export const fetchDictionaries = (): AppThunk => async dispatch => {
  try {
    dispatch(getDictionariesStart());
    const dictionaries = await getDictionaries();
    dispatch(getDictionariesSuccess(dictionaries));
  } catch (e) {
    toastService.showError(e);
    dispatch(getDictionariesFailure(e.toString()));
  }
};

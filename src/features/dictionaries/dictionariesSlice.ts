/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Dictionary } from '../../models';
import { dictionaryService, toastService } from '../../services';

const { getDictionaries } = dictionaryService;

export type DictionariesState = {
  isLoading: boolean;
  data: Dictionary[];
  error: string | null;
};

const initialState: DictionariesState = {
  isLoading: false,
  data: [],
  error: null,
};

const dictionariesSlice = createSlice({
  name: 'dictionaries',
  initialState,
  reducers: {
    getDictionariesStart(state: DictionariesState) {
      state.isLoading = true;
    },
    getDictionariesSuccess(state: DictionariesState, { payload }: PayloadAction<Dictionary[]>) {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    },
    getDictionariesFailure(state: DictionariesState, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getDictionariesStart, getDictionariesSuccess, getDictionariesFailure } = dictionariesSlice.actions;

export default dictionariesSlice.reducer;

export const fetchDictionaries = (): AppThunk => async dispatch => {
  try {
    dispatch(getDictionariesStart());
    const issues = await getDictionaries();
    dispatch(getDictionariesSuccess(issues));
  } catch (e) {
    toastService.showError(e);
    dispatch(getDictionariesFailure(e.toString()));
  }
};

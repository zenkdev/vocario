/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { Statistic } from '../../models';
import { statisticsService, toastService } from '../../services';

const { getStatistics } = statisticsService;

export type StatisticsState = {
  isLoading: boolean;
  data: Statistic[];
  error: string | null;
};

const initialState: StatisticsState = {
  isLoading: false,
  data: [],
  error: null,
};

const statisticsSlice = createSlice({
  name: 'dictionaries',
  initialState,
  reducers: {
    getStatisticsStart(state: StatisticsState) {
      state.isLoading = true;
    },
    getStatisticsSuccess(state: StatisticsState, { payload }: PayloadAction<Statistic[]>) {
      state.data = payload;
      state.isLoading = false;
      state.error = null;
    },
    getStatisticsFailure(state: StatisticsState, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getStatisticsStart, getStatisticsSuccess, getStatisticsFailure } = statisticsSlice.actions;

export default statisticsSlice.reducer;

export const fetchStatistics = (): AppThunk => async dispatch => {
  try {
    dispatch(getStatisticsStart());
    const statistics = await getStatistics();
    dispatch(getStatisticsSuccess(statistics));
  } catch (e) {
    toastService.showError(e);
    dispatch(getStatisticsFailure(e.toString()));
  }
};

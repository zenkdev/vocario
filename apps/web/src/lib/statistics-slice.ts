import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AppThunk } from './store';
import type { Statistic } from '@/shared/model';
import { statisticsService } from '@/shared/api';
import { notifications } from '@/features/notifications';

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
  name: 'statistics',
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    notifications.error(e);
    dispatch(getStatisticsFailure(e.toString()));
  }
};

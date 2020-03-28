import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum StatisticsFilters {
  SHOW_LEARNING = 'SHOW_LEARNING',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
}

export type StatisticsFilterState = StatisticsFilters;

const filtersSlice = createSlice({
  name: 'statisticsFilter',
  initialState: StatisticsFilters.SHOW_LEARNING,
  reducers: {
    setStatisticsFilter(state: StatisticsFilterState, action: PayloadAction<StatisticsFilters>) {
      return action.payload;
    },
  },
});

export const { setStatisticsFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

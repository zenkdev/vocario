import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { StatisticsFilters } from '../filters/filtersSlice';
import { modelHelper } from '../../models';

const selectStatistics = (state: RootState) => state.statistics;

const selectStatisticsFilter = (state: RootState) => state.statisticsFilter;

export const selectIsLoading = createSelector(selectStatistics, ({ isLoading }) => isLoading);

export const selectVisible = createSelector([selectStatistics, selectStatisticsFilter], ({ data }, filter) => {
  switch (filter) {
    case StatisticsFilters.SHOW_LEARNING:
      return data.filter(s => !modelHelper.isCompleted(s));
    case StatisticsFilters.SHOW_COMPLETED:
      return data.filter(s => modelHelper.isCompleted(s));
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
});

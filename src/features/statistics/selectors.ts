import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { modelHelper } from '../../models';
import { VisibilityFilters } from '../filters/filtersSlice';

const selectStatistics = (state: RootState) => state.statistics;

const selectVisibilityFilter = (state: RootState) => state.visibilityFilter;

export const selectIsLoading = createSelector(selectStatistics, ({ isLoading }) => isLoading);

export const selectVisible = createSelector([selectStatistics, selectVisibilityFilter], ({ data }, { filter, numberOfItems }) => {
  switch (filter) {
    case VisibilityFilters.SHOW_LEARNING:
      return data.filter(s => !modelHelper.isCompleted(s)).slice(0, numberOfItems);
    case VisibilityFilters.SHOW_COMPLETED:
      return data.filter(s => modelHelper.isCompleted(s)).slice(0, numberOfItems);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
});

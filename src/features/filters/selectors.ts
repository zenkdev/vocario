import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { modelHelper } from '../../models';
import { VisibilityFilters } from './filtersSlice';

const selectStatistics = (state: RootState) => state.statistics;

const selectVisibilityFilter = (state: RootState) => state.visibilityFilter;

export const selectLearningCount = createSelector(selectStatistics, ({ data }) =>
  modelHelper.count(data, s => !modelHelper.isCompleted(s)),
);

export const selectCompletedCount = createSelector(selectStatistics, ({ data }) =>
  modelHelper.count(data, s => modelHelper.isCompleted(s)),
);

export const selectShowMore = createSelector(
  [selectLearningCount, selectCompletedCount, selectVisibilityFilter],
  (learning, completed, { filter, numberOfItems }) => {
    switch (filter) {
      case VisibilityFilters.SHOW_LEARNING:
        return learning > numberOfItems;
      case VisibilityFilters.SHOW_COMPLETED:
        return completed > numberOfItems;
      default:
        return false;
    }
  },
);

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { count } from '../../utils';
import { VisibilityFilters } from './filtersSlice';

const selectStatistics = (state: RootState) => state.statistics;
const selectVisibilityFilter = (state: RootState) => state.visibilityFilter;

export const selectLearningCount = createSelector(selectStatistics, ({ data }) => count(data, w => !w.isCompleted));
export const selectCompletedCount = createSelector(selectStatistics, ({ data }) => count(data, w => w.isCompleted));

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

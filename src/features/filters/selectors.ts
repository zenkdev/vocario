import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { modelHelper } from '../../models';

const selectStatistics = (state: RootState) => state.statistics;

export const selectLearningCount = createSelector(selectStatistics, ({ data }) =>
  modelHelper.count(data, s => !modelHelper.isCompleted(s)),
);

export const selectCompletedCount = createSelector(selectStatistics, ({ data }) =>
  modelHelper.count(data, s => modelHelper.isCompleted(s)),
);

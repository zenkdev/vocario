import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import formatISO from 'date-fns/formatISO';
import startOfToday from 'date-fns/startOfToday';

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { defaultTo } from '../../utils';
import { VisibilityFilters } from '../filters/filtersSlice';

export type ChartData = {
  date: string;
  count: number;
};

const selectStatistics = (state: RootState) => state.statistics;
const selectVisibilityFilter = (state: RootState) => state.visibilityFilter;

export const selectIsLoading = createSelector(selectStatistics, ({ isLoading }) => isLoading);

export const selectVisible = createSelector([selectStatistics, selectVisibilityFilter], ({ data }, { filter, numberOfItems }) => {
  switch (filter) {
    case VisibilityFilters.SHOW_LEARNING:
      return data.filter(w => !w.isCompleted).slice(0, numberOfItems);
    case VisibilityFilters.SHOW_COMPLETED:
      return data.filter(w => w.isCompleted).slice(0, numberOfItems);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
});

export const selectChartData = createSelector([selectStatistics], ({ data }) => {
  const list = data.reduce<string[]>((acc, { occurs }) => [...acc, ...occurs.slice(1).map(occur => occur.substring(0, 10))], []);
  const map = new Map<string, number>();
  list.forEach(item => {
    const count = map.get(item);
    if (!count) {
      map.set(item, 1);
    } else {
      map.set(item, count + 1);
    }
  });
  const chartData: ChartData[] = [];
  const end = startOfToday();
  for (let begin = addDays(addMonths(end, -1), 1); begin <= end; begin = addDays(begin, 1)) {
    const date = formatISO(begin).substring(0, 10);
    const count = defaultTo(map.get(date), 0);
    chartData.push({ date, count });
  }
  return chartData;
});

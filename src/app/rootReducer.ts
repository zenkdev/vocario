import { combineReducers } from 'redux';

import visibilityFilterReducer from '../features/filters/filtersSlice';
import homeReducer from '../features/home/homeSlice';
import learnReducer from '../features/learn/learnSlice';
import statisticsReducer from '../features/statistics/statisticsSlice';

const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  home: homeReducer,
  learn: learnReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

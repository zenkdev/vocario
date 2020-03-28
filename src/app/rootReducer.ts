import { combineReducers } from 'redux';

import visibilityFilterReducer from '../features/filters/filtersSlice';
import homeReducer from '../features/home/homeSlice';
import statisticsReducer from '../features/statistics/statisticsSlice';

const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  home: homeReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

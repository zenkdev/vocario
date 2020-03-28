import { combineReducers } from 'redux';

import dictionariesReducer from '../features/dictionaries/dictionariesSlice';
import visibilityFilterReducer from '../features/filters/filtersSlice';
import statisticsReducer from '../features/statistics/statisticsSlice';

const rootReducer = combineReducers({
  dictionaries: dictionariesReducer,
  visibilityFilter: visibilityFilterReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

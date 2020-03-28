import { combineReducers } from 'redux';

import dictionariesReducer from '../features/dictionaries/dictionariesSlice';
import statisticsFilterReducer from '../features/filters/filtersSlice';
import statisticsReducer from '../features/statistics/statisticsSlice';

const rootReducer = combineReducers({
  dictionaries: dictionariesReducer,
  statisticsFilter: statisticsFilterReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

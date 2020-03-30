import { combineReducers } from 'redux';

import visibilityFilterReducer from '../features/filters/filtersSlice';
import homeReducer from '../features/home/homeSlice';
import learnReducer from '../features/learn/learnSlice';
import profileReducer from '../features/profile/profileSlice';
import statisticsReducer from '../features/statistics/statisticsSlice';

const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  home: homeReducer,
  learn: learnReducer,
  profile: profileReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

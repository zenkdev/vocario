/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';

import appReducer from '../features/app/appSlice';
import visibilityFilterReducer from '../features/filters/filtersSlice';
import homeReducer from '../features/home/homeSlice';
import learnReducer from '../features/learn/learnSlice';
import profileReducer from '../features/profile/profileSlice';
import statisticsReducer from '../features/statistics/statisticsSlice';

const rootReducer = combineReducers({
  app: appReducer,
  visibilityFilter: visibilityFilterReducer,
  home: homeReducer,
  learn: learnReducer,
  profile: profileReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

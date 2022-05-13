import { combineReducers } from 'redux';

import visibilityFilterReducer from '../features/filters/filtersSlice';
import homeReducer from '../features/home/homeSlice';
import learnReducer from '../features/learn/learnSlice';
import loginReducer from '../features/login/loginSlice';
import profileReducer from '../features/profile/profileSlice';
import signupReducer from '../features/signup/signupSlice';
import statisticsReducer from '../features/statistics/statisticsSlice';
import appReducer from './appSlice';

const rootReducer = combineReducers({
  app: appReducer,
  visibilityFilter: visibilityFilterReducer,
  home: homeReducer,
  learn: learnReducer,
  login: loginReducer,
  profile: profileReducer,
  signup: signupReducer,
  statistics: statisticsReducer,
});

export default rootReducer;

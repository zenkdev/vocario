import { combineReducers } from 'redux';

import appReducer from './app-slice';
import homeReducer from './home-slice';
import learnReducer from './learn-slice';
import loginReducer from './login-slice';
import profileReducer from './profile-slice';
import signupReducer from './signup-slice';
import statisticsReducer from './statistics-slice';
import visibilityFilterReducer from './filters-slice';

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

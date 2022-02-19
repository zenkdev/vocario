/* eslint-disable import/no-import-module-exports */
import { ThunkAction } from 'redux-thunk';
import { Action, configureStore } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch | Dispatch<any>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;

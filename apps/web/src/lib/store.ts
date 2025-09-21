import { type Action, configureStore } from '@reduxjs/toolkit';
import type { ThunkAction } from 'redux-thunk';

import rootReducer from './root-reducer';

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

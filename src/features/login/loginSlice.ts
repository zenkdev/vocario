/* eslint-disable no-param-reassign */
import { History } from 'history';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { authService, toastService } from '../../services';

export type LoginState = {
  isLoading: boolean;
  error: string | null;
};

const initialState: LoginState = {
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginStart(state: LoginState) {
      state.isLoading = true;
    },
    loginSuccess(state: LoginState) {
      state.isLoading = false;
      state.error = null;
    },
    loginFailure(state: LoginState, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { loginStart, loginSuccess, loginFailure } = profileSlice.actions;

export default profileSlice.reducer;

export const goBack = (history: History) => {
  let { pathname } = history.location;
  if (pathname === '/login') {
    pathname = '/';
  }
  history.push(pathname);
};

export const loginWithGithub = (history: History): AppThunk => async dispatch => {
  try {
    dispatch(loginStart());
    await authService.loginWithGithub();
    goBack(history);
    dispatch(loginSuccess());
  } catch (error) {
    toastService.showError(error);
    dispatch(loginFailure(error.toString()));
  }
};

export const loginWithGoogle = (history: History): AppThunk => async dispatch => {
  try {
    dispatch(loginStart());
    await authService.loginWithGoogle();
    goBack(history);
    dispatch(loginSuccess());
  } catch (error) {
    toastService.showError(error);
    dispatch(loginFailure(error.toString()));
  }
};

export const loginWithMicrosoft = (history: History): AppThunk => async dispatch => {
  try {
    dispatch(loginStart());
    await authService.loginWithMicrosoft();
    goBack(history);
    dispatch(loginSuccess());
  } catch (error) {
    toastService.showError(error);
    dispatch(loginFailure(error.toString()));
  }
};

export const loginWithEmailAndPassword = (email: string, password: string, history: History): AppThunk => async dispatch => {
  try {
    dispatch(loginStart());
    await authService.loginWithEmailAndPassword(email, password);
    dispatch(loginSuccess());
    goBack(history);
  } catch (error) {
    toastService.showError(error);
    dispatch(loginFailure(error.toString()));
  }
};

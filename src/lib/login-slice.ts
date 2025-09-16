import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type AppThunk } from './store';
import { authService } from '@/shared/api';
import { notifications } from '@/features/notifications';
import { type NavigateFunction } from 'react-router';

export interface LoginState {
  isLoading: boolean;
  error: string | null;
}

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

const goBack = (navigate: NavigateFunction) => {
  let { pathname } = window?.location || {};
  if (pathname === '/login') {
    pathname = '/';
  }
  navigate(pathname);
};

export const loginWithGithub =
  (navigate: NavigateFunction): AppThunk =>
  async dispatch => {
    try {
      dispatch(loginStart());
      await authService.loginWithGithub();
      goBack(navigate);
      dispatch(loginSuccess());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      notifications.error(error);
      dispatch(loginFailure(error.toString()));
    }
  };

export const loginWithGoogle =
  (navigate: NavigateFunction): AppThunk =>
  async dispatch => {
    try {
      dispatch(loginStart());
      await authService.loginWithGoogle();
      goBack(navigate);
      dispatch(loginSuccess());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      notifications.error(error);
      dispatch(loginFailure(error.toString()));
    }
  };

export const loginWithMicrosoft =
  (navigate: NavigateFunction): AppThunk =>
  async dispatch => {
    try {
      dispatch(loginStart());
      await authService.loginWithMicrosoft();
      goBack(navigate);
      dispatch(loginSuccess());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      notifications.error(error);
      dispatch(loginFailure(error.toString()));
    }
  };

export const loginWithEmailAndPassword =
  (email: string, password: string, navigate: NavigateFunction): AppThunk =>
  async dispatch => {
    try {
      dispatch(loginStart());
      await authService.loginWithEmailAndPassword(email, password);
      dispatch(loginSuccess());
      goBack(navigate);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      notifications.error(error);
      dispatch(loginFailure(error.toString()));
    }
  };

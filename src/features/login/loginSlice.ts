/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { authService, toastService, routerService } from '../../services';

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

export const goBack = () => {
  let { pathname } = routerService.location;
  if (pathname === '/login') {
    pathname = '/';
  }
  routerService.push(pathname);
};

export const loginWithGithub = (): AppThunk => async dispatch => {
  try {
    dispatch(loginStart());
    await authService.loginWithGithub();
    goBack();
    dispatch(loginSuccess());
  } catch (error: any) {
    toastService.showError(error);
    dispatch(loginFailure(error.toString()));
  }
};

export const loginWithGoogle = (): AppThunk => async dispatch => {
  try {
    dispatch(loginStart());
    await authService.loginWithGoogle();
    goBack();
    dispatch(loginSuccess());
  } catch (error: any) {
    toastService.showError(error);
    dispatch(loginFailure(error.toString()));
  }
};

export const loginWithMicrosoft = (): AppThunk => async dispatch => {
  try {
    dispatch(loginStart());
    await authService.loginWithMicrosoft();
    goBack();
    dispatch(loginSuccess());
  } catch (error: any) {
    toastService.showError(error);
    dispatch(loginFailure(error.toString()));
  }
};

export const loginWithEmailAndPassword =
  (email: string, password: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(loginStart());
      await authService.loginWithEmailAndPassword(email, password);
      dispatch(loginSuccess());
      goBack();
    } catch (error: any) {
      toastService.showError(error);
      dispatch(loginFailure(error.toString()));
    }
  };

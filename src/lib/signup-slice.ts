import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AppThunk } from './store';
import { authService } from '@/shared/api';
import { notifications } from '@/features/notifications';
import { type NavigateFunction } from 'react-router';

export type SignupState = {
  isCreating: boolean;
  error: string | null;
};

const initialState: SignupState = {
  isCreating: false,
  error: null,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    signupStart(state: SignupState) {
      state.isCreating = true;
    },
    signupSuccess(state: SignupState) {
      state.isCreating = false;
      state.error = null;
    },
    signupFailure(state: SignupState, { payload }: PayloadAction<string>) {
      state.isCreating = false;
      state.error = payload;
    },
  },
});

const { signupStart, signupSuccess, signupFailure } = signupSlice.actions;

export default signupSlice.reducer;

export const signupUser =
  (email: string, password: string, navigate: NavigateFunction): AppThunk =>
  async dispatch => {
    try {
      dispatch(signupStart());
      await authService.signupUser(email, password);
      dispatch(signupSuccess());
      navigate('/home');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      notifications.error(error);
      dispatch(signupFailure(error.toString()));
    }
  };

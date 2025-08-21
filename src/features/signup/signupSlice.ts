import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AppThunk } from '../../app/store';
import { authService, toastService, routerService } from '../../services';

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
  (email: string, password: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(signupStart());
      await authService.signupUser(email, password);
      dispatch(signupSuccess());
      routerService.push('/home');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toastService.showError(error);
      dispatch(signupFailure(error.toString()));
    }
  };

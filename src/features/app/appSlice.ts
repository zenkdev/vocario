/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppState = {
  isLoading: boolean;
  isLoggedIn: boolean;
  simpleMode: boolean;
  darkTheme: boolean;
  fontSize: number;
};

const initialState: AppState = {
  isLoading: true,
  isLoggedIn: false,
  simpleMode: true,
  darkTheme: false,
  fontSize: 1,
};

type UpdateSettingsAction = PayloadAction<{ isLoggedIn: boolean; simpleMode: boolean; darkTheme: boolean; fontSize: number }>;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading(state: AppState, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    updateAppSettings(state: AppState, { payload }: UpdateSettingsAction) {
      state.isLoggedIn = payload.isLoggedIn;
      state.simpleMode = payload.simpleMode;
      state.darkTheme = payload.darkTheme;
      state.fontSize = payload.fontSize;
    },
  },
});

export const { setIsLoading, updateAppSettings } = appSlice.actions;

export default appSlice.reducer;

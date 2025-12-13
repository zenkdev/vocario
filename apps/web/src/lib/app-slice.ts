import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getProfileOptions, updateProfileOptions } from '@/shared/api/local-store-manager';
import { defaultTo } from 'src/shared/lib';

export type AppState = {
  isLoading: boolean;
  isLoggedIn: boolean;
  simpleMode: boolean;
  darkTheme: boolean;
  fontSize: number;
};

const { simpleMode, darkTheme, fontSize } = getProfileOptions();

const initialState: AppState = {
  isLoading: true,
  isLoggedIn: false,
  simpleMode: defaultTo(simpleMode, true),
  darkTheme: defaultTo(darkTheme, false),
  fontSize: defaultTo(fontSize, 1),
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
      updateProfileOptions({ simpleMode: payload.simpleMode, fontSize: payload.fontSize, darkTheme: payload.darkTheme });
    },
  },
});

export const { setIsLoading, updateAppSettings } = appSlice.actions;

export default appSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { createUserProfile, UserProfile } from '../../models';
import { profileService, statisticsService, toastService } from '../../services';
import { getProfileOptions } from '../../services/LocalStoreManager';

const { getProfile, updateEmail, updateDisplayName, updateDarkTheme, updateFontSize, updateSimpleMode } = profileService;
const { resetProgress } = statisticsService;

export type ProfileState = {
  isLoading: boolean;
  isSaving: boolean;
  profile: UserProfile;
  error: string | null;
};

const initialState: ProfileState = {
  isLoading: false,
  isSaving: false,
  profile: createUserProfile(null, getProfileOptions()),
  error: null,
};

function startLoading(state: ProfileState) {
  state.isLoading = true;
}

function loadingFailed(state: ProfileState, { payload }: PayloadAction<string>) {
  state.isLoading = false;
  state.error = payload;
}

function startSaving(state: ProfileState, { payload }: PayloadAction<Partial<UserProfile>>) {
  state.profile = { ...state.profile, ...payload };
  state.isSaving = true;
}

function savingSucceded(state: ProfileState) {
  state.isSaving = false;
  state.error = null;
}

function savingFailed(state: ProfileState, { payload }: PayloadAction<{ profile: Partial<UserProfile>; error: string }>) {
  state.profile = { ...state.profile, ...payload.profile };
  state.isSaving = false;
  state.error = payload.error;
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileStart: startLoading,
    getProfileSuccess(state: ProfileState, { payload }: PayloadAction<UserProfile>) {
      state.profile = payload;
      state.isLoading = false;
      state.error = null;
    },
    getProfileFailure: loadingFailed,
    saveProfileStart: startSaving,
    saveProfileSuccess: savingSucceded,
    saveProfileFailure: savingFailed,
  },
});

export const {
  getProfileStart,
  getProfileSuccess,
  getProfileFailure,
  saveProfileStart,
  saveProfileSuccess,
  saveProfileFailure,
} = profileSlice.actions;

export default profileSlice.reducer;

export const fetchProfile = (): AppThunk => async dispatch => {
  try {
    dispatch(getProfileStart());
    const profile = await getProfile();
    dispatch(getProfileSuccess(profile));
  } catch (error) {
    toastService.showError(error);
    dispatch(getProfileFailure(error.toString()));
  }
};

export const saveDisplayName = (newValue: string): AppThunk => async (dispatch, getState) => {
  const state = getState().profile;
  const {
    profile: { displayName: oldValue },
  } = state;

  try {
    dispatch(saveProfileStart({ displayName: newValue }));
    await updateDisplayName(newValue);
    dispatch(saveProfileSuccess());
  } catch (error) {
    toastService.showError(error);
    dispatch(saveProfileFailure({ profile: { displayName: oldValue }, error: error.toString() }));
  }
};

export const saveEmail = (newValue: string): AppThunk => async (dispatch, getState) => {
  const state = getState().profile;
  const {
    profile: { email: oldValue },
  } = state;

  try {
    dispatch(saveProfileStart({ email: newValue }));
    await updateEmail(newValue, '');
    dispatch(saveProfileSuccess());
  } catch (error) {
    toastService.showError(error);
    dispatch(saveProfileFailure({ profile: { email: oldValue }, error: error.toString() }));
  }
};

export const saveDarkTheme = (newValue: boolean): AppThunk => async (dispatch, getState) => {
  const state = getState().profile;
  const {
    profile: { darkTheme: oldValue },
  } = state;

  try {
    dispatch(saveProfileStart({ darkTheme: newValue }));
    await updateDarkTheme(newValue);
    dispatch(saveProfileSuccess());
  } catch (error) {
    toastService.showError(error);
    dispatch(saveProfileFailure({ profile: { darkTheme: oldValue }, error: error.toString() }));
  }
};

export const saveFontSize = (newValue: number): AppThunk => async (dispatch, getState) => {
  const state = getState().profile;
  const {
    profile: { fontSize: oldValue },
  } = state;

  try {
    dispatch(saveProfileStart({ fontSize: newValue }));
    await updateFontSize(newValue);
    dispatch(saveProfileSuccess());
  } catch (error) {
    toastService.showError(error);
    dispatch(saveProfileFailure({ profile: { fontSize: oldValue }, error: error.toString() }));
  }
};

export const saveSimpleMode = (newValue: boolean): AppThunk => async (dispatch, getState) => {
  const state = getState().profile;
  const {
    profile: { simpleMode: oldValue },
  } = state;

  try {
    dispatch(saveProfileStart({ simpleMode: newValue }));
    await updateSimpleMode(newValue);
    dispatch(saveProfileSuccess());
  } catch (error) {
    toastService.showError(error);
    dispatch(saveProfileFailure({ profile: { simpleMode: oldValue }, error: error.toString() }));
  }
};

export const doResetProgress = (): AppThunk => async dispatch => {
  try {
    await resetProgress();
  } catch (error) {
    toastService.showError(error);
    dispatch(getProfileFailure(error.toString()));
  }
};

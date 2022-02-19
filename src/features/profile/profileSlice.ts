/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../../app/store';
import { createUserProfile, UserProfile } from '../../models';
import { profileService, statisticsService, toastService } from '../../services';
import { getProfileOptions } from '../../services/LocalStoreManager';

const { getProfile, updateEmail, updateProfile, updateDarkTheme, updateFontSize, updateSimpleMode } = profileService;
const { resetProgress } = statisticsService;

export type ProfileState = {
  isLoading: boolean;
  isSaving: boolean;
  isDisplayNameEditing: boolean;
  isEmailEditing: boolean;
  profile: UserProfile;
  error: string | null;
};

const initialState: ProfileState = {
  isLoading: false,
  isSaving: false,
  isDisplayNameEditing: false,
  isEmailEditing: false,
  profile: createUserProfile(null, getProfileOptions()),
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileStart(state: ProfileState) {
      state.isLoading = true;
    },
    getProfileSuccess(state: ProfileState, { payload }: PayloadAction<UserProfile>) {
      state.profile = payload;
      state.isLoading = false;
      state.error = null;
    },
    getProfileFailure(state: ProfileState, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = payload;
    },
    displayNameEditingStart(state: ProfileState) {
      state.isDisplayNameEditing = true;
    },
    displayNameEditingEnd(state: ProfileState) {
      state.isDisplayNameEditing = false;
    },
    emailEditingStart(state: ProfileState) {
      state.isEmailEditing = true;
    },
    emailEditingEnd(state: ProfileState) {
      state.isEmailEditing = false;
    },
    updateProfileStart(state: ProfileState, { payload = {} }: PayloadAction<Partial<UserProfile> | undefined>) {
      state.profile = { ...state.profile, ...payload };
      state.isSaving = true;
    },
    updateProfileSuccess(state: ProfileState, { payload = {} }: PayloadAction<Partial<UserProfile> | undefined>) {
      state.profile = { ...state.profile, ...payload };
      state.isSaving = false;
      state.error = null;
    },
    updateProfileFailure(state: ProfileState, { payload }: PayloadAction<{ profile?: Partial<UserProfile>; error: string }>) {
      state.profile = { ...state.profile, ...(payload.profile || {}) };
      state.isSaving = false;
      state.error = payload.error;
    },
  },
});

const {
  getProfileStart,
  getProfileSuccess,
  getProfileFailure,
  displayNameEditingStart,
  displayNameEditingEnd,
  emailEditingStart,
  emailEditingEnd,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
} = profileSlice.actions;

export default profileSlice.reducer;

export { displayNameEditingStart, displayNameEditingEnd, emailEditingStart, emailEditingEnd };

export const fetchProfile = (): AppThunk => async dispatch => {
  try {
    dispatch(getProfileStart());
    const profile = await getProfile();
    dispatch(getProfileSuccess(profile));
  } catch (error: any) {
    toastService.showError(error);
    dispatch(getProfileFailure(error.toString()));
  }
};

export const saveProfile =
  (displayName: string, photoURL?: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(updateProfileStart());
      await updateProfile(displayName, photoURL);
      dispatch(displayNameEditingEnd());
      dispatch(updateProfileSuccess({ displayName, photoURL }));
    } catch (error: any) {
      toastService.showError(error);
      dispatch(updateProfileFailure({ error: error.toString() }));
    }
  };

export const saveEmail =
  (email: string, password: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(updateProfileStart());
      await updateEmail(email, password);
      dispatch(updateProfileSuccess({ email }));
    } catch (error: any) {
      toastService.showError(error);
      dispatch(updateProfileFailure({ error: error.toString() }));
    }
  };

export const saveDarkTheme =
  (newValue: boolean): AppThunk =>
  async (dispatch, getState) => {
    const state = getState().profile;
    const {
      profile: { darkTheme: oldValue },
    } = state;

    try {
      dispatch(updateProfileStart({ darkTheme: newValue }));
      await updateDarkTheme(newValue);
      dispatch(updateProfileSuccess());
    } catch (error: any) {
      toastService.showError(error);
      dispatch(updateProfileFailure({ profile: { darkTheme: oldValue }, error: error.toString() }));
    }
  };

export const saveFontSize =
  (newValue: number): AppThunk =>
  async (dispatch, getState) => {
    const state = getState().profile;
    const {
      profile: { fontSize: oldValue },
    } = state;

    try {
      dispatch(updateProfileStart({ fontSize: newValue }));
      await updateFontSize(newValue);
      dispatch(updateProfileSuccess());
    } catch (error: any) {
      toastService.showError(error);
      dispatch(updateProfileFailure({ profile: { fontSize: oldValue }, error: error.toString() }));
    }
  };

export const saveSimpleMode =
  (newValue: boolean): AppThunk =>
  async (dispatch, getState) => {
    const state = getState().profile;
    const {
      profile: { simpleMode: oldValue },
    } = state;

    try {
      dispatch(updateProfileStart({ simpleMode: newValue }));
      await updateSimpleMode(newValue);
      dispatch(updateProfileSuccess());
    } catch (error: any) {
      toastService.showError(error);
      dispatch(updateProfileFailure({ profile: { simpleMode: oldValue }, error: error.toString() }));
    }
  };

export const doResetProgress = (): AppThunk => async dispatch => {
  try {
    await resetProgress();
  } catch (error: any) {
    toastService.showError(error);
    dispatch(getProfileFailure(error.toString()));
  }
};

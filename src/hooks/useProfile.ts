/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useReducer, useState } from 'react';

import AppContext from '../AppContext';
import { createUserProfile, UserProfile } from '../models';
import { localStoreManager } from '../services';
import firebaseInstance from '../services/Firebase';
import { DARK_THEME_DATA_KEY, FONT_SIZE_DATA_KEY, SIMPLE_MODE_DATA_KEY } from '../services/ProfileService';
import { dataFetchReducer, timeout, TState, UseDatabaseOptions } from './useDatabase';

const getOptions = () => {
  const simpleMode = localStoreManager.getDataObject<boolean>(SIMPLE_MODE_DATA_KEY);
  const fontSize = localStoreManager.getDataObject<number>(FONT_SIZE_DATA_KEY);
  const darkTheme = localStoreManager.getDataObject<boolean>(DARK_THEME_DATA_KEY);
  return { simpleMode, fontSize, darkTheme };
};

const getProfile = async (uid: string | null): Promise<UserProfile> => {
  return firebaseInstance.withTrace('getProfile', async () => {
    const options = getOptions();
    if (!uid) {
      return new UserProfile(options);
    }
    const ref = firebaseInstance.db.ref(`/userProfile/${uid}`);
    const snapshot = await ref.once('value');
    return createUserProfile(snapshot, options);
  });
};

type UserProfileState = TState<UserProfile>;
type UseProfileOptions = UseDatabaseOptions<UserProfile>;

const useProfile = (options: UseProfileOptions = {}): [UserProfileState, () => void] => {
  const { onCompleted, onError } = options;
  const { currentUser } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: new UserProfile(getOptions()),
  } as UserProfileState);
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        await timeout(2000);
        const payload = await getProfile(currentUser && currentUser.id);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload });
          if (onCompleted) onCompleted(payload);
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
          if (onError) onError(error);
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [currentUser, onCompleted, onError, counter]);
  return [state as any, () => setCounter(counter + 1)];
};

export default useProfile;

import { useContext, useEffect, useReducer, useState } from 'react';

import AppContext from '../../AppContext';
import { createUserProfile, UserProfile } from '../../models';
import { localStoreManager } from '../../services';
import firebaseInstance from '../../services/Firebase';
import { DARK_THEME_DATA_KEY, FONT_SIZE_DATA_KEY, SIMPLE_MODE_DATA_KEY } from '../../services/LocalStoreManager';
import { dataFetchReducer, TReducer, TState, UseDatabaseOptions } from '../dataFetchReducer';

const getOptions = () => {
  const simpleMode = localStoreManager.getDataObject<boolean>(SIMPLE_MODE_DATA_KEY);
  const fontSize = localStoreManager.getDataObject<number>(FONT_SIZE_DATA_KEY);
  const darkTheme = localStoreManager.getDataObject<boolean>(DARK_THEME_DATA_KEY);
  return { simpleMode, fontSize, darkTheme };
};

type UserProfileState = TState<UserProfile>;
type UserProfileReducer = TReducer<UserProfile>;
type UseProfileOptions = UseDatabaseOptions<UserProfile>;

const useProfile = (options: UseProfileOptions = {}): [UserProfileState, () => void] => {
  const { onCompleted, onError } = options;
  const { uid } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer<UserProfileReducer>(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: new UserProfile(getOptions()),
  });
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const payload = await firebaseInstance.withTrace('useProfile', async () => {
          const opts = getOptions();
          if (!uid) {
            return new UserProfile(opts);
          }
          const ref = firebaseInstance.db.ref(`/userProfile/${uid}`);
          const snapshot = await ref.once('value');
          return createUserProfile(snapshot, opts);
        });
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
  }, [uid, onCompleted, onError, counter]);
  return [state, () => setCounter(counter + 1)];
};

export default useProfile;

import { useCallback, useContext, useEffect, useState } from 'react';

import AppContext from '../AppContext';
import firebaseInstance from '../services/Firebase';

type UseResetProgressOptions = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

const useResetProgress = (options: UseResetProgressOptions = {}): (() => void) => {
  const { onCompleted, onError } = options;
  const { uid } = useContext(AppContext);
  const [didCancel, setDidCancel] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      if (!uid) {
        throw new Error('User UID can not be null');
      }
      await firebaseInstance.withTrace('resetProgress', () => firebaseInstance.db.ref(`statistics/${uid}`).remove());
      if (!didCancel) {
        if (onCompleted) onCompleted();
      }
    } catch (error) {
      if (!didCancel) {
        if (onError) onError(error);
      }
    }
  }, [didCancel, onCompleted, onError, uid]);
  useEffect(() => {
    setDidCancel(false);
    return () => setDidCancel(true);
  }, []);
  return fetchData;
};

export default useResetProgress;

import { useCallback, useEffect, useState } from 'react';

import { localStoreManager } from '../../services';
import firebaseInstance from '../../services/Firebase';
import { SIMPLE_MODE_DATA_KEY } from '../../services/LocalStoreManager';

type UseSimpleModeOptions = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

const useSimpleMode = (initialValue: boolean, options: UseSimpleModeOptions = {}): [boolean, (newValue: boolean) => void] => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const [isRestoring, setRestoring] = useState(false);
  const [value, setValue] = useState(initialValue);
  const updateData = useCallback(
    async (newValue: boolean) => {
      // check if restore value from error
      if (isRestoring) return;

      const prevValue = value;
      setValue(newValue);

      try {
        const { currentUser } = firebaseInstance.auth;
        if (currentUser) {
          await firebaseInstance.db.ref(`/userProfile/${currentUser.uid}`).update({ simpleMode: newValue });
          localStoreManager.savePermanentData(SIMPLE_MODE_DATA_KEY, newValue);
          // await this.raiseCurrentUserChanged();
        }
        if (!didCancel) {
          if (onCompleted) onCompleted();
        }
      } catch (error) {
        setRestoring(true);
        setValue(prevValue);
        setRestoring(false);
        if (!didCancel) {
          if (onError) onError(error);
        }
      }
    },
    [value, didCancel, isRestoring, onCompleted, onError],
  );
  useEffect(() => {
    setDidCancel(false);
    return () => setDidCancel(true);
  }, []);
  return [value, updateData];
};

export default useSimpleMode;

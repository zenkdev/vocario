import { useCallback, useEffect, useState } from 'react';

import { localStoreManager } from '../../services';
import firebaseInstance from '../../services/Firebase';
import { FONT_SIZE_DATA_KEY } from '../../services/LocalStoreManager';

type UseFontSizeOptions = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

type UpdateProfileValues = {
  simpleMode?: boolean;
  fontSize?: number;
  darkTheme?: boolean;
};

const useFontSize = (initialValue: number, options: UseFontSizeOptions = {}): [number, (newValue: number) => void] => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const [isRestoring, setRestoring] = useState(false);
  const [value, setValue] = useState(initialValue);
  const updateData = useCallback(
    async (newValue: number) => {
      // check if restore value from error
      if (isRestoring) return;

      const prevValue = value;
      setValue(newValue);

      try {
        const { currentUser } = firebaseInstance.auth;
        if (currentUser) {
          await firebaseInstance.db.ref(`/userProfile/${currentUser.uid}`).update({ fontSize: newValue });
          localStoreManager.savePermanentData(FONT_SIZE_DATA_KEY, newValue);
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

export default useFontSize;

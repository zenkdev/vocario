import { useCallback, useEffect, useState } from 'react';

import { localStoreManager } from '../services';
import firebaseInstance from '../services/Firebase';
import { FONT_SIZE_DATA_KEY, SIMPLE_MODE_DATA_KEY } from '../services/LocalStoreManager';

type UseUpdateProfileOptions = {
  onCompleted?: (values: UpdateProfileValues) => void;
  onError?: (error: any) => void;
};

type UpdateProfileValues = {
  simpleMode?: boolean;
  fontSize?: number;
  darkTheme?: boolean;
};

const useUpdateProfile = (options: UseUpdateProfileOptions = {}): ((values: UpdateProfileValues) => void) => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const updateData = useCallback(
    async (values: UpdateProfileValues) => {
      try {
        // await timeout(3000);
        // const d = Date.now();
        // if (d > 0) throw new Error('test error');
        const { currentUser } = firebaseInstance.auth;
        if (currentUser) {
          await firebaseInstance.db.ref(`/userProfile/${currentUser.uid}`).update(values);
          if (values.simpleMode != null) localStoreManager.savePermanentData(SIMPLE_MODE_DATA_KEY, values.simpleMode);
          if (values.fontSize != null) localStoreManager.savePermanentData(FONT_SIZE_DATA_KEY, values.fontSize);
          // await this.raiseCurrentUserChanged();
        }
        if (!didCancel) {
          if (onCompleted) onCompleted(values);
        }
      } catch (error) {
        if (!didCancel) {
          if (onError) onError(error);
        }
      }
    },
    [didCancel, onCompleted, onError],
  );
  useEffect(() => {
    setDidCancel(false);
    return () => setDidCancel(true);
  }, []);
  return updateData;
};

export default useUpdateProfile;

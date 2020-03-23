import { useCallback, useEffect, useState } from 'react';

import firebaseInstance from '../../services/Firebase';

type UseUpdateNameOptions = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

const useUpdateName = (options: UseUpdateNameOptions = {}): ((displayName: string) => void) => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const updateData = useCallback(
    async (displayName: string) => {
      try {
        const { currentUser } = firebaseInstance.auth;
        if (currentUser) {
          await currentUser.updateProfile({ displayName });
          await firebaseInstance.db.ref(`/userProfile/${currentUser.uid}`).update({ displayName });
          // await this.raiseCurrentUserChanged();
        }
        if (!didCancel) {
          if (onCompleted) onCompleted();
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

export default useUpdateName;

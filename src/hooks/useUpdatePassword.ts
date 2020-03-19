import firebase from 'firebase/app';
import { useCallback, useEffect, useState } from 'react';

import firebaseInstance from '../services/Firebase';

type UseUpdatePasswordOptions = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

const useUpdatePassword = (options: UseUpdatePasswordOptions = {}): ((newPassword: string, oldPassword: string) => void) => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const updateData = useCallback(
    async (newPassword: string, oldPassword: string) => {
      try {
        const { currentUser } = firebaseInstance.auth;
        if (currentUser) {
          if (currentUser.email == null) {
            throw new Error('Email can not be null');
          }
          const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, oldPassword);
          await currentUser.reauthenticateWithCredential(credential);
          await currentUser.updatePassword(newPassword);
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

export default useUpdatePassword;

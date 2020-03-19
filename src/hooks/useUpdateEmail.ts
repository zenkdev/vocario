import firebase from 'firebase/app';
import { useCallback, useEffect, useState } from 'react';

import firebaseInstance from '../services/Firebase';

type UseUpdateEmailOptions = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

const useUpdateEmail = (options: UseUpdateEmailOptions = {}): ((newEmail: string, password: string) => void) => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const updateData = useCallback(
    async (newEmail: string, password: string) => {
      try {
        const { currentUser } = firebaseInstance.auth;
        if (currentUser) {
          if (currentUser.email == null) {
            throw new Error('Email can not be null');
          }
          const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, password);
          await currentUser.reauthenticateWithCredential(credential);
          await currentUser.updateEmail(newEmail);
          await firebaseInstance.db.ref(`/userProfile/${currentUser.uid}`).update({ email: newEmail });
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

export default useUpdateEmail;

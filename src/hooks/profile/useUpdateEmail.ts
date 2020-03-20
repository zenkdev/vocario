import { useCallback, useEffect, useState } from 'react';

import { profileService } from '../../services';

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
        await profileService.updateEmail(newEmail, password);
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

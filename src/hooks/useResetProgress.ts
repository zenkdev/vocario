import { useCallback, useEffect, useState } from 'react';

import { statisticsService } from '../services';
import { Func } from '../types';

type UseResetProgressOptions = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

const useResetProgress = (options: UseResetProgressOptions = {}): Func => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      await statisticsService.resetProgress();
      if (!didCancel) {
        if (onCompleted) onCompleted();
      }
    } catch (error) {
      if (!didCancel) {
        if (onError) onError(error);
      }
    }
  }, [didCancel, onCompleted, onError]);
  useEffect(() => {
    setDidCancel(false);
    return () => setDidCancel(true);
  }, []);
  return fetchData;
};

export default useResetProgress;

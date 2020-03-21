import { useCallback, useEffect, useState } from 'react';

import { Dictionary, Word } from '../models';
import { statisticsService } from '../services';

type UseUpdateStatisticsOptions = {
  onCompleted?: (dictionary: Dictionary, word: Word) => void;
  onError?: (error: any) => void;
};

const useUpdateStatistics = (options: UseUpdateStatisticsOptions = {}): ((dictionary: Dictionary, word: Word) => void) => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const updateData = useCallback(
    async (dictionary: Dictionary, word: Word) => {
      try {
        await statisticsService.updateStatistics(dictionary, word);
        if (!didCancel) {
          if (onCompleted) onCompleted(dictionary, word);
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

export default useUpdateStatistics;

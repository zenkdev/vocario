import { useCallback, useContext, useEffect, useState } from 'react';

import AppContext from '../AppContext';
import { createPlainJS, Dictionary, Statistic, Word } from '../models';
import firebaseInstance from '../services/Firebase';
import { omitUndefined } from '../utils';

type UseUpdateStatisticsOptions = {
  onCompleted?: (dictionary: Dictionary, word: Word) => void;
  onError?: (error: any) => void;
};

const useUpdateStatistics = (options: UseUpdateStatisticsOptions = {}): ((dictionary: Dictionary, word: Word) => void) => {
  const { onCompleted, onError } = options;
  const { uid } = useContext(AppContext);
  const [didCancel, setDidCancel] = useState(false);
  const updateData = useCallback(
    async (dictionary: Dictionary, word: Word) => {
      const { id: dictionaryId } = dictionary;
      try {
        if (!uid) {
          throw new Error('User UID can not be null');
        }
        await firebaseInstance.withTrace('useUpdateStatistics', () => {
          const { id, texts, ...rest } = word;
          const poco = createPlainJS(texts);
          const ref = firebaseInstance.db.ref(`statistics/${uid}`);
          const updates: Record<string, Partial<Statistic>> = {
            [id]: omitUndefined({ ...rest, ...poco, dictionaryId }),
          };
          return ref.update(updates);
        });
        if (!didCancel) {
          if (onCompleted) onCompleted(dictionary, word);
        }
      } catch (error) {
        if (!didCancel) {
          if (onError) onError(error);
        }
      }
    },
    [didCancel, onCompleted, onError, uid],
  );
  useEffect(() => {
    setDidCancel(false);
    return () => setDidCancel(true);
  }, []);
  return updateData;
};

export default useUpdateStatistics;

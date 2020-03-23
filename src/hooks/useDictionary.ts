import { useEffect, useReducer, useState } from 'react';

import { Dictionary } from '../models';
import { dictionaryService } from '../services';
import { dataFetchReducer, TReducer, TState, UseDatabaseOptions } from './dataFetchReducer';

type DictionaryState = TState<Dictionary | undefined>;
type DictionaryReducer = TReducer<Dictionary | undefined>;
type UseDictionaryOptions = UseDatabaseOptions<Dictionary>;

const useDictionary = (dictionaryId?: string, options: UseDictionaryOptions = {}): [DictionaryState, () => void] => {
  const { onCompleted, onError } = options;
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer<DictionaryReducer>(dataFetchReducer, {
    isLoading: false,
    isError: false,
  } as DictionaryState);
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const payload = await dictionaryService.getDictionary(dictionaryId as string);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload });
          if (onCompleted) onCompleted(payload);
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
          if (onError) onError(error);
        }
      }
    };
    if (dictionaryId) fetchData();
    return () => {
      didCancel = true;
    };
  }, [dictionaryId, onCompleted, onError, counter]);
  return [state, () => setCounter(counter + 1)];
};

export default useDictionary;

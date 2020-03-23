import { useEffect, useReducer, useState } from 'react';

import { Dictionary } from '../models';
import { dictionaryService } from '../services';
import { dataFetchReducer, TReducer, TState, UseDatabaseOptions } from './dataFetchReducer';

type DictionariesState = TState<Dictionary[]>;
type DictionariesReducer = TReducer<Dictionary[]>;
type UseDictionariesOptions = UseDatabaseOptions<Dictionary[]>;

const useDictionaries = (options: UseDictionariesOptions = {}): [DictionariesState, () => void] => {
  const { onCompleted, onError } = options;
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer<DictionariesReducer>(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: [],
  });
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const payload = await dictionaryService.getDictionaries();
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
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [onCompleted, onError, counter]);
  return [state, () => setCounter(counter + 1)];
};

export default useDictionaries;

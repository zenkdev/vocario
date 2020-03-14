/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useReducer, useState } from 'react';

import AppContext from '../AppContext';
import { createDictionary, Dictionary } from '../models';
import firebaseInstance from '../services/Firebase';
import { dataFetchReducer, timeout, TState, UseDatabaseOptions } from './useDatabase';

const getDictionaries = async (uid: string | null): Promise<Dictionary[]> => {
  return firebaseInstance.withTrace('getDictionaries', async () => {
    const snapshot = await firebaseInstance.db.ref('dictionary').once('value');
    const arr: Dictionary[] = [];
    snapshot.forEach(payload => {
      arr.push(createDictionary(payload, uid));
    });
    return arr;
  });
};

type DictionariesState = TState<Dictionary[]>;
type UseDictionariesOptions = UseDatabaseOptions<Dictionary[]>;

const useDictionaries = (options: UseDictionariesOptions = {}): [DictionariesState, () => void] => {
  const { onCompleted, onError } = options;
  const { currentUser } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: [],
  } as DictionariesState);
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        await timeout(2000);
        const payload = await getDictionaries(currentUser && currentUser.id);
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload });
          if (onCompleted) onCompleted(payload);
          // throw new Error('test error');
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
  }, [onCompleted, onError, currentUser, counter]);
  return [state as any, () => setCounter(counter + 1)];
};

export default useDictionaries;

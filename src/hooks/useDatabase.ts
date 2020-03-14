/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer, useState } from 'react';
import firebaseInstance from '../services/Firebase';

export type TState<TData = any> = {
  isLoading: boolean;
  isError: boolean;
  data: TData;
};

type ActionInit = { type: 'FETCH_INIT' };
type ActionSuccess<TData = any> = { type: 'FETCH_SUCCESS'; payload: TData };
type ActionFailure = { type: 'FETCH_FAILURE' };

export type FetchAction<TData = any> = ActionInit | ActionSuccess<TData> | ActionFailure;

export const dataFetchReducer = <TData = any>(state: TState<TData>, action: FetchAction<TData>): TState<TData> => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

// Create a promise that resolves in <ms> milliseconds
export const timeout = (ms: number) =>
  new Promise(resolve => {
    const id = setTimeout(() => {
      clearTimeout(id);
      resolve(`Timed out in ${ms}ms.`);
    }, ms);
  });

export type UseDatabaseOptions<TData = any> = {
  onCompleted?: (data: TData) => void;
  onError?: (error: any) => void;
};

const useDatabase = <TData = any>(
  path: string,
  initialData?: TData,
  options: UseDatabaseOptions<TData> = {},
): [TState<TData>, () => void] => {
  const { onCompleted, onError } = options;
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const snapshot = await firebaseInstance.db.ref(path).once('value');
        const payload = snapshot.toJSON() as TData;
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
  }, [path, onCompleted, onError, counter]);
  return [state as any, () => setCounter(counter + 1)];
};

export default useDatabase;

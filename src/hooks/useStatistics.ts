/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useReducer, useState } from 'react';

import AppContext from '../AppContext';
import { createStatistic, Statistic } from '../models';
import firebaseInstance from '../services/Firebase';
import { dataFetchReducer, timeout, TState, UseDatabaseOptions } from './useDatabase';

const getStatistics = async (uid: string | null): Promise<Statistic[]> => {
  return firebaseInstance.withTrace('getStatistics', async () => {
    const arr: Statistic[] = [];
    if (uid) {
      const snapshot = await firebaseInstance.db.ref(`statistics/${uid}`).once('value');
      snapshot.forEach(payload => {
        arr.push(createStatistic(payload));
      });
    }
    return arr;
  });
};

type StatisticsState = TState<Statistic[]>;
type UseStatisticsOptions = UseDatabaseOptions<Statistic[]>;

const useStatistics = (options: UseStatisticsOptions = {}): [StatisticsState, () => void] => {
  const { onCompleted, onError } = options;
  const { currentUser } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: [],
  } as StatisticsState);
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        await timeout(2000);
        const payload = await getStatistics(currentUser && currentUser.id);
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
  }, [onCompleted, onError, currentUser, counter]);
  return [state as any, () => setCounter(counter + 1)];
};

export default useStatistics;

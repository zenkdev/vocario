import { useContext, useEffect, useReducer, useState } from 'react';

import AppContext from '../app/AppContext';
import { Statistic } from '../models';
import { statisticsService } from '../services';
import { dataFetchReducer, TReducer, TState, UseDatabaseOptions } from './dataFetchReducer';
import { Func } from '../types';

type StatisticsState = TState<Statistic[]>;
type StatisticsReducer = TReducer<Statistic[]>;
type UseStatisticsOptions = UseDatabaseOptions<Statistic[]>;

const useStatistics = (options: UseStatisticsOptions = {}): [StatisticsState, Func] => {
  const { onCompleted, onError } = options;
  const { uid } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer<StatisticsReducer>(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: [],
  });
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const payload = await statisticsService.getStatistics();
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
  }, [uid, onCompleted, onError, counter]);
  return [state, () => setCounter(counter + 1)];
};

export default useStatistics;

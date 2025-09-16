import * as actions from '@/lib/learn-slice';
import * as selectors from '@/lib/learn-selectors';
import { percent } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback } from 'react';

const useLearnPage = (dct: string) => {
  const dispatch = useAppDispatch();
  const { simpleMode } = useAppSelector(state => state.app);
  const { isLoading } = useAppSelector(state => state.learn);
  const { completed, total, more } = useAppSelector(selectors.selectDailyStatistics);
  const title = useAppSelector(selectors.selectTitle);
  const word = useAppSelector(selectors.selectWord);
  const fetchData = useCallback(() => dispatch(actions.fetchDictionary(dct)), [dispatch, dct]);

  return {
    simpleMode,
    isLoading,
    title,
    word,
    progress: percent(completed, total),
    hasMore: more,
    fetchData,
  };
};

export default useLearnPage;

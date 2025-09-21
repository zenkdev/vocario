import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import { AppLoader, AppPage } from '@/shared/ui';
import { fetchDictionaries } from '@/lib/home-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback, useEffect } from 'react';

import DictionaryList from './dictionary-list';

function HomePage() {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useAppSelector(state => state.home);
  const fetchData = useCallback(() => dispatch(fetchDictionaries()), [dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppPage
      title="Welcome"
      right={
        <IconButton onClick={() => fetchData()} sx={{ ml: 'auto' }}>
          <RefreshIcon />
        </IconButton>
      }
      showFooter
    >
      <DictionaryList dictionaries={data} />
      <AppLoader loading={isLoading} />
    </AppPage>
  );
}

export default HomePage;

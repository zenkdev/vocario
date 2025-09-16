import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import Stack from '@mui/material/Stack';
import { AppLoader, AppPage, Filter } from '@/shared/ui';
import { fetchStatistics } from '@/lib/statistics-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback, useEffect } from 'react';

import StatisticsChart from './statistics-chart';
import StatisticsList from './statistics-list';
import { selectIsLoading } from './selectors';

function StatisticsPage() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const fetchData = useCallback(() => dispatch(fetchStatistics()), [dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppPage
      title="Statistics"
      right={
        <IconButton onClick={() => fetchData()} sx={{ ml: 'auto' }}>
          <RefreshIcon />
        </IconButton>
      }
      showBackButton
      showFooter
    >
      <Stack direction="column" gap={2} px={2}>
        <StatisticsChart />
        <Filter />
        <StatisticsList />
      </Stack>
      <AppLoader loading={isLoading} />
    </AppPage>
  );
}

export default StatisticsPage;

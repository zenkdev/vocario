import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@/shared/ui';
import { increaceNumberOfItems } from '@/lib/filters-slice';
import { selectShowMore } from '@/lib/filters-selectors';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback } from 'react';

import StatisticsListItem from './statistics-list-item';
import { selectVisible } from './selectors';

function StatisticsList() {
  const dispatch = useAppDispatch();
  const statistics = useAppSelector(selectVisible);
  const showMore = useAppSelector(selectShowMore) || true;
  const handleClick = useCallback(() => dispatch(increaceNumberOfItems()), [dispatch]);

  return (
    <Stack direction="column" gap={2} px={2}>
      {!statistics.length && (
        <Typography variant="h5" sx={{ alignSelf: 'center' }}>
          No Statistics
        </Typography>
      )}
      {statistics.map(item => (
        <StatisticsListItem key={item.id} item={item} />
      ))}
      {showMore && <Button onClick={handleClick}>Show more...</Button>}
    </Stack>
  );
}

export default StatisticsList;

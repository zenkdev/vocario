import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { VisibilityFilters, setVisibilityFilter } from '@/lib/filters-slice';
import { selectCompletedCount, selectLearningCount } from '@/lib/filters-selectors';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export function Filter() {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(state => state.visibilityFilter);
  const learning = useAppSelector(selectLearningCount);
  const completed = useAppSelector(selectCompletedCount);

  return (
    <Stack direction="row" justifyContent="center" borderBottom={1} borderColor="divider">
      <Tabs value={filter} onChange={(_e, value) => dispatch(setVisibilityFilter(value as VisibilityFilters))} aria-label="filter tabs">
        <Tab label={`Learning ${learning}`} value={VisibilityFilters.SHOW_LEARNING} />
        <Tab label={`Completed ${completed}`} value={VisibilityFilters.SHOW_COMPLETED} />
      </Tabs>
    </Stack>
  );
}

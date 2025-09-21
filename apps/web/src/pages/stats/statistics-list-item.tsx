import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Statistic } from '@/shared/model';
import { VisibilityFilters } from '@/lib/filters-slice';
import { format } from 'date-fns';
import { getLocale, wordUtils } from '@/shared/lib';
import { useAppSelector } from '@/lib/hooks';
import { useMemo } from 'react';

const { getTextWithLang, getTranscription, nextOccurString } = wordUtils;

interface StatisticsListItemProps {
  item: Statistic;
}

function StatisticsListItem({ item }: StatisticsListItemProps) {
  const { translation, category } = item;
  const { filter } = useAppSelector(state => state.visibilityFilter);
  const textWithLang = useMemo(() => getTextWithLang(item), [item]);
  const transcription = useMemo(() => getTranscription(item), [item]);
  const nextOccur = useMemo(() => nextOccurString(item), [item]);

  return (
    <Stack direction="column" paddingBottom={1} borderBottom={1} borderColor="divider">
      <Grid container>
        <Grid size={6}>
          <Typography variant="subtitle2">{textWithLang}</Typography>
          <Typography variant="caption">{transcription}</Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="subtitle1">{translation}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={12}>
          <Typography variant="subtitle1">{category}</Typography>
        </Grid>
      </Grid>
      {nextOccur && (
        <Grid container>
          <Grid size={12} sx={{ display: 'flex', flexDirection: 'row', gap: 0.5, alignItems: 'center' }}>
            <Typography variant="caption">Next occur: {nextOccur}</Typography>
            {filter !== VisibilityFilters.SHOW_COMPLETED && item.occurs?.length
              ? item.occurs.map(occur => <Chip key={occur} size="small" label={format(occur, 'PP', { locale: getLocale() })} />)
              : null}
          </Grid>
        </Grid>
      )}
    </Stack>
  );
}

export default StatisticsListItem;

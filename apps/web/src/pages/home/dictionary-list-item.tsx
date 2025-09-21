import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { Button } from '@/shared/ui';
import type { Dictionary } from '@/shared/model';
import { percent } from '@/shared/lib';
import { useNavigate } from 'react-router';

const formatter = new Intl.NumberFormat('ru');

const format = (value: number): string => formatter.format(value);

type DictionaryListItemProps = {
  item: Dictionary;
};

function DictionaryListItem({ item }: DictionaryListItemProps) {
  const navigate = useNavigate();

  return (
    <Stack direction="column" paddingBottom={1} borderBottom={1} borderColor="divider">
      <Button endIcon={<ChevronRightIcon />} onClick={() => navigate(`/learn/${item.id}`)} fullWidth>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={3} width="100%">
          {item.name}
          <Chip color="info" label={format(item.wordsCount)} />
        </Stack>
      </Button>
      <LinearProgress variant="determinate" value={percent(item.wordsCompleted, item.wordsCount) * 100} />
    </Stack>
  );
}

export default DictionaryListItem;

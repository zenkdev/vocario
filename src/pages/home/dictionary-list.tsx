import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { Dictionary } from '@/shared/model';

import DictionaryListItem from './dictionary-list-item';

type DictionaryListProps = {
  dictionaries: Dictionary[];
};

function DictionaryList({ dictionaries }: DictionaryListProps) {
  return (
    <Stack direction="column" gap={2} px={2}>
      {!dictionaries.length && (
        <Typography variant="h5" sx={{ alignSelf: 'center' }}>
          No Dictionaries Found
        </Typography>
      )}
      {dictionaries.map(item => (
        <DictionaryListItem key={item.id} item={item} />
      ))}
    </Stack>
  );
}

export default DictionaryList;

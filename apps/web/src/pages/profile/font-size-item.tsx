import FormControlLabel from '@mui/material/FormControlLabel';
import Skeleton from '@mui/material/Skeleton';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import { saveFontSize } from '@/lib/profile-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback } from 'react';

function FontSizeItem() {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    profile: { fontSize },
  } = useAppSelector(state => state.profile);
  const handleChange = useCallback(
    (_event: Event, value: number) => {
      dispatch(saveFontSize(value / 100));
    },
    [dispatch],
  );

  const control = (
    <Slider size="medium" value={fontSize * 100} min={80} max={150} step={10} aria-label="Font Size" onChange={handleChange} />
  );

  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <TextDecreaseIcon fontSize="large" color="primary" />
      <FormControlLabel
        label="Font Size"
        labelPlacement="start"
        control={isLoading ? <Skeleton sx={{ ml: 2 }}>{control}</Skeleton> : control}
        slotProps={{ typography: { whiteSpace: 'nowrap', mr: 3 } }}
        sx={{ flex: 1 }}
      />
      <TextIncreaseIcon fontSize="large" color="primary" />
    </Stack>
  );
}

export default FontSizeItem;

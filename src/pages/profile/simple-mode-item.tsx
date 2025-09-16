import RocketIcon from '@mui/icons-material/Rocket';
import Stack from '@mui/material/Stack';
import { useCallback, type ChangeEvent } from 'react';
import { saveSimpleMode } from '@/lib/profile-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import FormControlLabel from '@mui/material/FormControlLabel';
import Skeleton from '@mui/material/Skeleton';
import Switch from '@mui/material/Switch';

function SimpleModeItem() {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    profile: { simpleMode },
  } = useAppSelector(state => state.profile);
  const handleChange = useCallback(
    (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      dispatch(saveSimpleMode(checked));
    },
    [dispatch],
  );

  const control = <Switch checked={simpleMode} onChange={handleChange} />;

  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <RocketIcon fontSize="large" color="primary" />
      <FormControlLabel
        label="Simple Mode"
        labelPlacement="start"
        control={isLoading ? <Skeleton sx={{ ml: 2 }}>{control}</Skeleton> : control}
      />
    </Stack>
  );
}

export default SimpleModeItem;

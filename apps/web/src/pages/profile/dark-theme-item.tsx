import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import { useCallback, type ChangeEvent } from 'react';

import { saveDarkTheme } from '@/lib/profile-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Switch from '@mui/material/Switch';
import Skeleton from '@mui/material/Skeleton';

function DarkThemeItem() {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    profile: { darkTheme },
  } = useAppSelector(state => state.profile);
  const handleChange = useCallback(
    (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      dispatch(saveDarkTheme(checked));
    },
    [dispatch],
  );

  const control = <Switch checked={darkTheme} onChange={handleChange} />;

  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <DarkModeIcon fontSize="large" color="primary" />
      <FormControlLabel
        label="Dark Theme"
        labelPlacement="start"
        control={isLoading ? <Skeleton sx={{ ml: 2 }}>{control}</Skeleton> : control}
      />
    </Stack>
  );
}

export default DarkThemeItem;

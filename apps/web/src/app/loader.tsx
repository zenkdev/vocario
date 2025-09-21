import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type ReactNode, useEffect } from 'react';
import { defaultTo } from '@/shared/lib';
import { profileService } from '@/shared/api';
import { setIsLoading, updateAppSettings } from '@/lib/app-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function Loader({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.app);

  useEffect(() => {
    const unsubscribeUser = profileService.onCurrentUserChanged(user => {
      dispatch(
        updateAppSettings({
          isLoggedIn: !!user,
          simpleMode: defaultTo(user && user.simpleMode, true),
          darkTheme: defaultTo(user && user.darkTheme, false),
          fontSize: defaultTo(user && user.fontSize, 1),
        }),
      );
      dispatch(setIsLoading(false));
    });

    return () => {
      unsubscribeUser.unsubscribe();
    };
  }, [dispatch]);

  if (isLoading) {
    return (
      <Stack direction="column" alignItems="center" justifyContent="center" sx={{ position: 'fixed', inset: '0' }}>
        <Stack direction="column" gap={1}>
          <Typography>Please wait while app is loading</Typography>
          <LinearProgress color="info" />
        </Stack>
      </Stack>
    );
  }

  return children;
}

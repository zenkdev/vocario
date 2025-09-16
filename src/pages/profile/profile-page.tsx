import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import RefreshIcon from '@mui/icons-material/Refresh';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AppLoader, AppPage } from '@/shared/ui';
import { authService } from '@/shared/api';
import { fetchProfile } from '@/lib/profile-slice';
import { notifications } from '@/features/notifications';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import DarkThemeItem from './dark-theme-item';
import DisplayNameItem from './display-name-item';
import EmailItem from './email-item';
import FontSizeItem from './font-size-item';
import ResetProgress from './reset-progress';
import SimpleModeItem from './simple-mode-item';

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, isSaving } = useAppSelector(state => state.profile);
  const fetchData = useCallback(() => dispatch(fetchProfile()), [dispatch]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const handleLogout = useCallback(async () => {
    try {
      await authService.logout();
      navigate('/login');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      notifications.error(error);
    }
  }, [navigate]);

  return (
    <AppPage
      title="Profile"
      right={
        <IconButton onClick={handleLogout} sx={{ ml: 'auto' }}>
          <LogoutIcon />
        </IconButton>
      }
      showBackButton
      showFooter
    >
      <Stack direction="column" gap={2} px={2}>
        <Stack direction="row">
          <Typography variant="h6">Personal Information</Typography>
          <IconButton onClick={() => fetchData()} sx={{ ml: 'auto' }}>
            <RefreshIcon />
          </IconButton>
        </Stack>
        <DisplayNameItem />
        <EmailItem />
        <Divider />
        <SimpleModeItem />
        <DarkThemeItem />
        <FontSizeItem />
        <ResetProgress />
        <Typography variant="button" style={{ textTransform: 'capitalize' }}>
          {__APP_NAME__} version: {__APP_VERSION__}
        </Typography>
      </Stack>
      <AppLoader loading={isLoading || isSaving} />
    </AppPage>
  );
}

export default ProfilePage;

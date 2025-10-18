import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AppLoader, AppPage, Button } from '@/shared/ui';
import { authService } from '@/shared/api';
import { notifications } from '@/features/notifications';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const resetPassword = useCallback(async () => {
    if (!email) {
      notifications.error('Form is not valid yet!');
      return;
    }

    setShowLoading(true);
    try {
      await authService.resetPassword(email);
      setShowLoading(false);
      notifications.info('Check your email for a password reset link');
      navigate(-1);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setShowLoading(false);
      notifications.error(error);
    }
  }, [email, navigate]);

  return (
    <AppPage title="Reset password" variant="form" showBackButton>
      <Stack direction="column" gap={2} px={2}>
        <TextField
          label="Email"
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={event => setEmail(event.target.value || '')}
          slotProps={{ inputLabel: { shrink: true } }}
          autoComplete="email"
          autoFocus
          fullWidth
        />
        <Button color="primary" variant="contained" disabled={!email} onClick={resetPassword}>
          Reset your Password
        </Button>
      </Stack>
      <AppLoader loading={showLoading} />
    </AppPage>
  );
}

export default ResetPasswordPage;

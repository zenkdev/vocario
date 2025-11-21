import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Link from '@mui/material/Link';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AppLoader, AppPage, Button } from '@/shared/ui';
import { Link as RouterLink } from 'react-router';
import { useFormik } from 'formik';

import LoginDivider from './login-divider';
import useLoginPage from './use-login-page';

function LoginPage() {
  const { isLoading, loginWithGithub, loginWithGoogle, loginWithMicrosoft, loginWithEmailAndPassword, gotoSignup } = useLoginPage();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: ({ email, password }) => {
      const errors: Record<string, string> = {};

      if (!email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
      }

      if (!password) {
        errors.password = 'Password is required';
      }

      return errors;
    },
    validateOnMount: true,
    onSubmit: loginWithEmailAndPassword,
  });

  const { handleChange, submitForm, values, isValid } = formik;

  return (
    <AppPage title="Login" variant="form">
      <form onSubmit={submitForm}>
        <Stack direction="column" gap={2} px={2}>
          <TextField
            label="Email"
            type="email"
            name="email"
            placeholder="Your email address"
            value={values.email}
            onChange={handleChange}
            slotProps={{ inputLabel: { shrink: true } }}
            autoComplete="email"
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="Your email password"
            value={values.password}
            onChange={handleChange}
            slotProps={{ inputLabel: { shrink: true } }}
            autoComplete="current-password"
            fullWidth
          />
          <Button size="large" color="primary" variant="contained" disabled={!isValid} type="submit">
            Log in
          </Button>
          <Stack direction="row" justifyContent="center">
            <Link component={RouterLink} to="/reset-password">
              I forgot my password :(
            </Link>
          </Stack>
          <LoginDivider />
          <Button startIcon={<GitHubIcon />} color="info" variant="contained" onClick={loginWithGithub}>
            Log in with Github
          </Button>
          <Button startIcon={<GoogleIcon />} color="info" variant="contained" onClick={loginWithGoogle}>
            Log in with Google
          </Button>
          <Button startIcon={<MicrosoftIcon />} color="info" variant="contained" onClick={loginWithMicrosoft}>
            Log in with Microsoft
          </Button>
          <Button color="success" variant="contained" onClick={gotoSignup}>
            Create a new account
          </Button>
        </Stack>
      </form>
      <AppLoader loading={isLoading} />
    </AppPage>
  );
}

export default LoginPage;

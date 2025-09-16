import * as signupSlice from '@/lib/signup-slice';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AppLoader, AppPage, Button } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';

function SignupPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(state => state.signup.isCreating);
  const signupUser = useCallback(
    ({ email, password }: { email: string; password: string }) => dispatch(signupSlice.signupUser(email, password, navigate)),
    [dispatch, navigate],
  );
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: ({ email, password, confirmPassword }) => {
      const errors: Record<string, string> = {};

      if (!email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
      }

      if (!password) {
        errors.password = 'Password is required';
      }

      if (password !== confirmPassword) {
        errors.password = 'Password and confirmation are not match';
      }

      return errors;
    },
    validateOnMount: true,
    onSubmit: signupUser,
  });

  const { handleChange, submitForm, values, isValid } = formik;

  return (
    <AppPage title="Signup" variant="form" showBackButton>
      <Stack direction="column" gap={2} px={2}>
        <TextField label="Email" type="email" name="email" value={values.email} onChange={handleChange} fullWidth />
        <TextField label="Password" type="password" name="password" value={values.password} onChange={handleChange} fullWidth />
        <TextField
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          fullWidth
        />
        <Button color="primary" variant="contained" disabled={!isValid} onClick={submitForm}>
          Create an Account
        </Button>
      </Stack>
      <AppLoader loading={isCreating} />
    </AppPage>
  );
}

export default SignupPage;

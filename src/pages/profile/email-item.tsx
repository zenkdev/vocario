import * as profileSlice from '@/lib/profile-slice';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@/shared/ui';
import { Formik } from 'formik';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback } from 'react';

const useEmailItem = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isEmailEditing, isSaving, profile } = useAppSelector(state => state.profile);

  return {
    isLoading,
    isEditing: isEmailEditing,
    isSaving,
    profile,
    ...bindActionCreators(
      {
        startEdit: profileSlice.emailEditingStart,
        cancelEdit: profileSlice.emailEditingEnd,
        saveEmail: profileSlice.saveEmail,
      },
      dispatch,
    ),
  };
};

function EmailItem() {
  const { isLoading, isEditing, isSaving, profile, startEdit, cancelEdit, saveEmail } = useEmailItem();
  const handleValidate = useCallback(({ email, password }: { email: string; password: string }) => {
    const errors: Record<string, string> = {};
    if (!email) {
      errors.displayName = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password) {
      errors.displayName = 'Password is required';
    }
    return errors;
  }, []);
  const handleSubmit = useCallback(
    ({ email, password }: { email: string; password: string }) => {
      saveEmail(email, password);
    },
    [saveEmail],
  );

  const control = (
    <TextField
      label="Email"
      type="email"
      variant="standard"
      value={profile.email}
      slotProps={{ htmlInput: { readOnly: true } }}
      fullWidth
    />
  );

  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <EmailIcon fontSize="large" color="primary" />
      {isLoading ? <Skeleton>{control}</Skeleton> : control}
      <IconButton title="Edit" aria-label="Edit" onClick={() => startEdit()}>
        <ChevronRightIcon />
      </IconButton>
      <Dialog open={isEditing} onClose={() => cancelEdit()} maxWidth="sm" fullWidth>
        <Formik initialValues={{ ...profile, password: '' }} validate={handleValidate} onSubmit={handleSubmit} validateOnMount>
          {({ values, dirty, isValid, handleChange, submitForm }) => (
            <>
              <DialogTitle>Edit Email</DialogTitle>
              <DialogContent>
                <Stack padding={2} gap={3}>
                  <TextField label="Email" type="email" name="email" value={values.email} onChange={handleChange} fullWidth />
                  <TextField label="Password" type="password" name="password" value={values.password} onChange={handleChange} fullWidth />
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" disabled={isSaving} onClick={() => cancelEdit()}>
                  Cancel
                </Button>
                <Button color="primary" disabled={!dirty || !isValid} loading={isSaving} onClick={submitForm}>
                  Save
                </Button>
              </DialogActions>
            </>
          )}
        </Formik>
      </Dialog>
    </Stack>
  );
}

export default EmailItem;

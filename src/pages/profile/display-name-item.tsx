import * as profileSlice from '@/lib/profile-slice';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import MuiButton from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@/shared/ui';
import { Formik } from 'formik';
import type { UserProfile } from '@/shared/model';
import { bindActionCreators } from '@reduxjs/toolkit';
import { fileToDataUrl } from '@/shared/lib';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback } from 'react';

import Avatar from './user-avatar';

const useDisplayNameItem = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isDisplayNameEditing, isSaving, profile } = useAppSelector(state => state.profile);

  return {
    isLoading,
    isEditing: isDisplayNameEditing,
    isSaving,
    profile,
    ...bindActionCreators(
      {
        startEdit: profileSlice.displayNameEditingStart,
        cancelEdit: profileSlice.displayNameEditingEnd,
        saveProfile: profileSlice.saveProfile,
      },
      dispatch,
    ),
  };
};

function DisplayNameItem() {
  const { isLoading, isEditing, isSaving, profile, startEdit, cancelEdit, saveProfile } = useDisplayNameItem();
  const handleValidate = useCallback(({ displayName }: UserProfile) => {
    const errors: Record<string, string> = {};
    if (!displayName) {
      errors.displayName = 'Name is required';
    }
    return errors;
  }, []);
  const handleSubmit = useCallback(
    ({ displayName, photoURL }: UserProfile) => {
      saveProfile(displayName, photoURL);
    },
    [saveProfile],
  );

  const control = (
    <TextField
      label="Name"
      type="text"
      variant="standard"
      value={profile.displayName}
      slotProps={{ htmlInput: { readOnly: true } }}
      fullWidth
    />
  );

  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <Avatar photoURL={profile.photoURL} />
      {isLoading ? <Skeleton>{control}</Skeleton> : control}
      <IconButton title="Edit" aria-label="Edit" onClick={() => startEdit()}>
        <ChevronRightIcon />
      </IconButton>
      <Dialog open={isEditing} onClose={() => cancelEdit()} maxWidth="sm" fullWidth>
        <Formik initialValues={profile} validate={handleValidate} onSubmit={handleSubmit} validateOnMount>
          {({ values, dirty, isValid, handleChange, setFieldValue, submitForm }) => (
            <>
              <DialogTitle>Edit Name</DialogTitle>
              <DialogContent>
                <Stack padding={2} gap={3}>
                  <TextField label="Name" type="text" name="email" value={values.displayName} onChange={handleChange} fullWidth />
                  <Stack direction="row" gap={3}>
                    <Avatar photoURL={values.photoURL} />
                    <MuiButton component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                      Upload Photo
                      <VisuallyHiddenInput
                        type="file"
                        name="photoURL"
                        accept="image/x-png,image/jpeg,image/gif"
                        onChange={event => {
                          if (event.currentTarget.files) {
                            fileToDataUrl(event.currentTarget.files[0], value => setFieldValue('photoURL', value));
                          }
                        }}
                      />
                    </MuiButton>
                  </Stack>
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

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default DisplayNameItem;

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Formik } from 'formik';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { chevronForwardOutline } from 'ionicons/icons';
import { useCallback } from 'react';

import * as profileSlice from './profileSlice';
import Avatar from './Avatar';
import { If } from '../../components';
import type { UserProfile } from '../../models';
import { fileToDataUrl } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';

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

const DisplayNameItem = () => {
  const { isLoading, isEditing, isSaving, profile, startEdit, cancelEdit, saveProfile } = useDisplayNameItem();
  const handleValidate = useCallback(({ displayName }: UserProfile) => {
    const errors: any = {};
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

  return (
    <IonItem>
      <Avatar photoURL={profile.photoURL} />
      <IonLabel position="stacked">Name</IonLabel>
      <If condition={!isLoading} then={<IonInput type="text" value={profile.displayName} readonly />} else={<IonSkeletonText animated />} />
      <IonButton slot="end" fill="clear" onClick={() => startEdit()}>
        <IonIcon icon={chevronForwardOutline} />
      </IonButton>
      <IonModal isOpen={isEditing}>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle>Edit Name</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => cancelEdit()} disabled={isSaving}>
                Cancel
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <Formik initialValues={profile} validate={handleValidate} onSubmit={handleSubmit} validateOnMount>
            {({ values, dirty, isValid, handleChange, setFieldValue, submitForm }) => (
              <>
                <IonList>
                  <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput type="text" name="displayName" value={values.displayName} onIonChange={handleChange as any} />
                  </IonItem>
                  <IonItem>
                    <Avatar photoURL={values.photoURL} />
                    <IonLabel>Avatar</IonLabel>
                    <input
                      type="file"
                      name="photoURL"
                      accept="image/x-png,image/jpeg,image/gif"
                      onChange={evt => {
                        if (evt.currentTarget.files) {
                          fileToDataUrl(evt.currentTarget.files[0], value => setFieldValue('photoURL', value));
                        }
                      }}
                    />
                  </IonItem>
                </IonList>
                <div className="ion-padding">
                  <IonButton expand="block" disabled={!dirty || !isValid || isSaving} onClick={submitForm}>
                    {isSaving ? 'Saving...' : 'Save'}
                  </IonButton>
                </div>
              </>
            )}
          </Formik>
        </IonContent>
      </IonModal>
    </IonItem>
  );
};

export default DisplayNameItem;

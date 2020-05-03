import { Formik } from 'formik';
import { chevronForwardOutline } from 'ionicons/icons';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

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
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import If from '../../components/If';
import fileToDataUrl from '../../utils/fileToDataUrl';
import Avatar from './Avatar';
import * as profileSlice from './profileSlice';

const mapStateToProps = (state: RootState) => {
  const { isLoading, isDisplayNameEditing, isSaving, profile } = state.profile;
  return {
    isLoading,
    isEditing: isDisplayNameEditing,
    isSaving,
    profile,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      startEdit: profileSlice.displayNameEditingStart,
      cancelEdit: profileSlice.displayNameEditingEnd,
      saveProfile: profileSlice.saveProfile,
    },
    dispatch,
  );

type DisplayNameItemProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const DisplayNameItem: React.FC<DisplayNameItemProps> = ({
  isLoading,
  isEditing,
  isSaving,
  profile,
  startEdit,
  cancelEdit,
  saveProfile,
}) => {
  const handleValidate = useCallback(({ displayName }) => {
    const errors: any = {};
    if (!displayName) {
      errors.displayName = 'Name is required';
    }
    return errors;
  }, []);
  const handleSubmit = useCallback(
    ({ displayName, photoURL }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayNameItem);

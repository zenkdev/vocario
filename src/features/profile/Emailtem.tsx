import { Formik } from 'formik';
import { chevronForwardOutline, mail } from 'ionicons/icons';
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
import { If } from '../../components';
import * as profileSlice from './profileSlice';

const mapStateToProps = (state: RootState) => {
  const { isLoading, isEmailEditing, isSaving, profile } = state.profile;
  return {
    isLoading,
    isEditing: isEmailEditing,
    isSaving,
    profile,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      startEdit: profileSlice.emailEditingStart,
      cancelEdit: profileSlice.emailEditingEnd,
      saveEmail: profileSlice.saveEmail,
    },
    dispatch,
  );

type EmailItemProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const EmailItem: React.FC<EmailItemProps> = ({ isLoading, isEditing, isSaving, profile, startEdit, cancelEdit, saveEmail }) => {
  const handleValidate = useCallback(({ email, password }: { email: string; password: string }) => {
    const errors: any = {};
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

  return (
    <IonItem>
      <IonIcon slot="start" icon={mail} />
      <IonLabel position="stacked">Email</IonLabel>
      <If condition={!isLoading} then={<IonInput type="email" value={profile.email} readonly />} else={<IonSkeletonText animated />} />
      <IonButton slot="end" fill="clear" onClick={() => startEdit()}>
        <IonIcon icon={chevronForwardOutline} />
      </IonButton>
      <IonModal isOpen={isEditing}>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle>Edit Email</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => cancelEdit()} disabled={isSaving}>
                Cancel
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <Formik initialValues={{ ...profile, password: '' }} validate={handleValidate} onSubmit={handleSubmit} validateOnMount>
            {({ values, dirty, isValid, handleChange, submitForm }) => (
              <>
                <IonList>
                  <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput type="email" name="email" value={values.email} onIonChange={handleChange as any} />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput type="password" name="password" value={values.password} onIonChange={handleChange as any} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EmailItem);

import { useFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Dispatch } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import * as signupSlice from './signupSlice';

const mapStateToProps = (state: RootState) => {
  const { isCreating } = state.signup;
  return {
    isCreating,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signupUser: ({ email, password }: { email: string; password: string }) => dispatch(signupSlice.signupUser(email, password) as any),
});

type SignupPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const SignupPage: React.FC<SignupPageProps> = ({ isCreating, signupUser }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: ({ email, password, confirmPassword }) => {
      const errors: any = {};

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
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" value={values.email} onIonChange={handleChange as any} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" value={values.password} onIonChange={handleChange as any} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Confirm password</IonLabel>
            <IonInput type="password" value={values.confirmPassword} onIonChange={handleChange as any} />
          </IonItem>
        </IonList>
        <div className="ion-padding">
          <IonButton expand="block" disabled={!isValid} onClick={submitForm}>
            Create an Account
          </IonButton>
        </div>
        <IonLoading isOpen={isCreating} message="Creating..." />
      </IonContent>
    </IonPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);

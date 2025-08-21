/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useCallback } from 'react';
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
import { useFormik } from 'formik';

import * as signupSlice from './signupSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(state => state.signup.isCreating);
  const signupUser = useCallback(
    ({ email, password }: { email: string; password: string }) => dispatch(signupSlice.signupUser(email, password)),
    [dispatch],
  );
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
    onSubmit: signupUser as any,
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
            <IonInput type="email" name="email" value={values.email} onIonChange={handleChange as any} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" name="password" value={values.password} onIonChange={handleChange as any} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Confirm password</IonLabel>
            <IonInput type="password" name="confirmPassword" value={values.confirmPassword} onIonChange={handleChange as any} />
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

export default SignupPage;

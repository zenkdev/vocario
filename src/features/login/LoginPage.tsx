import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
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
import { logoGithub, logoGoogle, logoSkype } from 'ionicons/icons';
import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import * as loginSlice from './loginSlice';

const useLoginPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.login);

  const loginWithEmailAndPassword = useCallback(
    ({ email, password }: { email: string; password: string }) => dispatch(loginSlice.loginWithEmailAndPassword(email, password)),
    [dispatch],
  );
  const loginWithGithub = useCallback(() => dispatch(loginSlice.loginWithGithub()), [dispatch]);
  const loginWithGoogle = useCallback(() => dispatch(loginSlice.loginWithGoogle()), [dispatch]);
  const loginWithMicrosoft = useCallback(() => dispatch(loginSlice.loginWithMicrosoft()), [dispatch]);

  return {
    isLoading,
    loginWithEmailAndPassword,
    loginWithGithub,
    loginWithGoogle,
    loginWithMicrosoft,
  };
};

const LoginPage = () => {
  const { isLoading, loginWithGithub, loginWithGoogle, loginWithMicrosoft, loginWithEmailAndPassword } = useLoginPage();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: ({ email, password }) => {
      const errors: any = {};

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
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" name="email" placeholder="Your email address" value={values.email} onIonChange={handleChange as any} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              type="password"
              name="password"
              placeholder="Your email password"
              value={values.password}
              onIonChange={handleChange as any}
            />
          </IonItem>
        </IonList>
        <div className="ion-padding">
          <IonButton expand="block" disabled={!isValid} onClick={() => submitForm()}>
            Log in
          </IonButton>
          <IonButton expand="block" fill="clear" href="/reset-password">
            I forgot my password :(
          </IonButton>
        </div>
        <IonLoading isOpen={isLoading} message="Logging in..." />
        <div className="login-divider">
          <div className="bar bar-top" />
          <span className="login-or">OR</span>
          <div className="bar bar-bottom" />
        </div>
        <IonList lines="full" class="ion-padding">
          <IonButton expand="block" color="medium" onClick={loginWithGithub}>
            <IonIcon slot="start" icon={logoGithub} />
            Log in with Github
          </IonButton>
          <IonButton expand="block" color="medium" onClick={loginWithGoogle}>
            <IonIcon slot="start" icon={logoGoogle} />
            Log in with Google
          </IonButton>
          <IonButton expand="block" color="medium" onClick={loginWithMicrosoft}>
            <IonIcon slot="start" icon={logoSkype} />
            Log in with Microsoft
          </IonButton>
        </IonList>
        <div className="ion-padding">
          <IonButton expand="block" color="dark" href="/signup">
            Create a new account
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;

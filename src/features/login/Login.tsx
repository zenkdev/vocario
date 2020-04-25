import { useFormik } from 'formik';
import { logoGithub, logoGoogle, logoSkype } from 'ionicons/icons';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

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
import { Dispatch } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import * as loginSlice from './loginSlice';

type LoginOwnProps = RouteComponentProps;

const mapStateToProps = (state: RootState) => {
  const { isLoading } = state.login;
  return {
    isLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, { history }: LoginOwnProps) => ({
  loginWithEmailAndPassword: ({ email, password }: { email: string; password: string }) =>
    dispatch(loginSlice.loginWithEmailAndPassword(email, password, history) as any),
  loginWithGithub: () => dispatch(loginSlice.loginWithGithub(history) as any),
  loginWithGoogle: () => dispatch(loginSlice.loginWithGoogle(history) as any),
  loginWithMicrosoft: () => dispatch(loginSlice.loginWithMicrosoft(history) as any),
});

type LoginProps = LoginOwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Login: React.FC<LoginProps> = ({ isLoading, loginWithGithub, loginWithGoogle, loginWithMicrosoft, loginWithEmailAndPassword }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
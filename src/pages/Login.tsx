import { logoGoogle, logoGithub, logoSkype } from 'ionicons/icons';
import React, { useCallback, useState } from 'react';
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

import { authService, toastService } from '../services';
import { IonInputEvent } from '../types';

const Login: React.FC<RouteComponentProps> = ({ history, location }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showLoading, setShowLoading] = useState(false);
  const handleChangeEmail = (evt: IonInputEvent) => setEmail(evt.detail.value || '');
  const handleChangePassword = (evt: IonInputEvent) => setPassword(evt.detail.value || '');
  const goBack = useCallback(() => {
    let { pathname } = location;
    if (pathname === '/login') {
      pathname = '/';
    }
    history.push(pathname);
  }, [history, location]);
  const loginWithEmailAndPassword = useCallback(async () => {
    if (!email || !password) {
      toastService.showError('Form is not valid yet!');
      return;
    }

    setShowLoading(true);
    try {
      await authService.loginWithEmailAndPassword(email, password);
      setShowLoading(false);
      goBack();
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  }, [goBack, email, password]);
  const loginWithGithub = useCallback(async () => {
    setShowLoading(true);
    try {
      await authService.loginWithGithub();
      setShowLoading(false);
      goBack();
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  }, [goBack]);
  const loginWithGoogle = useCallback(async () => {
    setShowLoading(true);
    try {
      await authService.loginWithGoogle();
      setShowLoading(false);
      goBack();
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  }, [goBack]);
  const loginWithMicrosoft = useCallback(async () => {
    setShowLoading(true);
    try {
      await authService.loginWithMicrosoft();
      setShowLoading(false);
      goBack();
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  }, [goBack]);

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
            <IonInput type="email" placeholder="Your email address" onIonChange={handleChangeEmail} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" placeholder="Your email password" onIonChange={handleChangePassword} />
          </IonItem>
        </IonList>
        <div className="ion-padding">
          <IonButton expand="block" disabled={!email || !password} onClick={loginWithEmailAndPassword}>
            Log in
          </IonButton>
          <IonButton expand="block" fill="clear" href="/reset-password">
            I forgot my password :(
          </IonButton>
        </div>
        <IonLoading isOpen={showLoading} message="Logging in..." />
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

export default Login;

import { logoGoogle } from 'ionicons/icons';
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
import { IonEvent } from '../types';

const Login: React.FC<RouteComponentProps> = ({ history, location }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showLoading, setShowLoading] = useState(false);
  const handleChangeEmail = (evt: IonEvent) => setEmail(evt.detail.value || '');
  const handleChangePassword = (evt: IonEvent) => setPassword(evt.detail.value || '');
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
        </div>
        <IonList lines="full" class="ion-no-margin ion-padding">
          <IonButton expand="block" fill="outline" onClick={loginWithGoogle}>
            <IonIcon slot="start" icon={logoGoogle} />
            Log in with Google
          </IonButton>
          <IonButton expand="block" fill="outline" href="/signup">
            Create a new account
          </IonButton>
          <IonButton expand="block" fill="clear" href="/reset-password">
            I forgot my password :(
          </IonButton>
        </IonList>
        <IonLoading isOpen={showLoading} message="Logging in..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;

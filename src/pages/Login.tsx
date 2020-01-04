import { logoGoogle } from 'ionicons/icons';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

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

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showLoading, setShowLoading] = useState(false);
  const handleChangeEmail = (evt: IonEvent) => setEmail(evt.detail.value || '');
  const handleChangePassword = (evt: IonEvent) => setPassword(evt.detail.value || '');
  const loginWithEmailAndPassword = useCallback(async () => {
    if (!email || !password) {
      toastService.showError('Form is not valid yet!');
      return;
    }

    setShowLoading(true);
    try {
      await authService.loginWithEmailAndPassword(email, password);
      setShowLoading(false);
      history.replace('/home');
      // this.router.navigate([this.returnUrl]);
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  }, [history, email, password]);
  const loginWithGoogle = useCallback(async () => {
    setShowLoading(true);
    try {
      await authService.loginWithGoogle();
      setShowLoading(false);
      history.replace('/home');
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  }, [history]);

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

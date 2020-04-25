import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';

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

import { authService, toastService } from '../../services';
import { IonInputEvent } from '../../types';

const Signup: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const signupUser = useCallback(async () => {
    if (!email || !password || password !== confirmPassword) {
      toastService.showError('Form is not valid yet!');
      return;
    }

    setShowLoading(true);
    try {
      await authService.signupUser(email, password);
      setShowLoading(false);
      history.push('/home');
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  }, [history, email, password, confirmPassword]);

  const handleEmailChange = (evt: IonInputEvent) => setEmail(evt.detail.value || '');
  const handlePasswordChange = (evt: IonInputEvent) => setPassword(evt.detail.value || '');
  const handleConfirmPasswordChange = (evt: IonInputEvent) => setConfirmPassword(evt.detail.value || '');

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
            <IonInput type="email" value={email} onIonChange={handleEmailChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" value={password} onIonChange={handlePasswordChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Confirm password</IonLabel>
            <IonInput type="password" value={confirmPassword} onIonChange={handleConfirmPasswordChange} />
          </IonItem>
        </IonList>
        <div className="ion-padding">
          <IonButton expand="block" disabled={!email || !password || password !== confirmPassword} onClick={signupUser}>
            Create an Account
          </IonButton>
        </div>
        <IonLoading isOpen={showLoading} message="Creating..." />
      </IonContent>
    </IonPage>
  );
};

export default Signup;

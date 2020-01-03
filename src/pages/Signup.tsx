import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

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
  IonToast,
  IonToolbar,
} from '@ionic/react';

import { authService } from '../services';

const Signup: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState<string>();
  const signupUser = useCallback(async () => {
    if (!email || !password || password !== confirmPassword) {
      console.log(`Form is not valid yet`);
      return;
    }

    setShowLoading(true);
    try {
      await authService.signupUser(email, password);
      setShowLoading(false);
      history.push('/home');
    } catch (error) {
      setShowLoading(false);
      setError(error.message);
    }
  }, [history, email, password, confirmPassword]);

  const handleEmailChange = (evt: CustomEvent<any>) => setEmail(evt.detail.value || '');
  const handlePasswordChange = (evt: CustomEvent<any>) => setPassword(evt.detail.value || '');
  const handleConfirmPasswordChange = (evt: CustomEvent<any>) => setConfirmPassword(evt.detail.value || '');

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
        <IonToast isOpen={Boolean(error)} message={error} onDidDismiss={() => setError(undefined)} color="danger" showCloseButton />
      </IonContent>
    </IonPage>
  );
};

export default Signup;

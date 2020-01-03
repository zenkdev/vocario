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
import { IonEvent } from '../types';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string>();
  const resetPassword = useCallback(async () => {
    if (!email) {
      // eslint-disable-next-line no-console
      console.log('Form is not valid yet');
      return;
    }

    setShowLoading(true);
    try {
      await authService.resetPassword(email);
      // buttons: [{ text: 'Ok', role: 'cancel', handler: () => history.goBack() }]
      setShowLoading(false);
      setShowSuccess(true);
    } catch (err) {
      setShowLoading(false);
      setError(err.message);
    }
  }, [email]);
  const handleSuccessDismiss = useCallback(() => {
    setShowSuccess(false);
    history.goBack();
  }, [history]);

  const handleEmailChange = (evt: IonEvent) => setEmail(evt.detail.value || '');

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Reset password</IonTitle>
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
        </IonList>
        <div className="ion-padding">
          <IonButton expand="block" disabled={!email} onClick={resetPassword}>
            Reset your Password
          </IonButton>
        </div>
        <IonLoading isOpen={showLoading} message="Resetting..." />
        <IonToast
          isOpen={showSuccess}
          message="Check your email for a password reset link"
          onDidDismiss={handleSuccessDismiss}
          color="success"
          closeButtonText="Ok"
          showCloseButton
        />
        <IonToast isOpen={Boolean(error)} message={error} onDidDismiss={() => setError(undefined)} color="danger" showCloseButton />
      </IonContent>
    </IonPage>
  );
};

export default ResetPassword;

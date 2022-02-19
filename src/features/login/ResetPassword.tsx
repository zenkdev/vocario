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

const ResetPassword: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const resetPassword = useCallback(async () => {
    if (!email) {
      toastService.showError('Form is not valid yet!');
      return;
    }

    setShowLoading(true);
    try {
      await authService.resetPassword(email);
      setShowLoading(false);
      toastService.showToast({
        message: 'Check your email for a password reset link',
        buttons: [{ text: 'Ok', role: 'cancel', handler: () => history.goBack() }],
        color: 'success',
      });
    } catch (error: any) {
      setShowLoading(false);
      toastService.showInfo(error);
    }
  }, [history, email]);

  const handleEmailChange = (evt: IonInputEvent) => setEmail(evt.detail.value || '');

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
      </IonContent>
    </IonPage>
  );
};

export default ResetPassword;

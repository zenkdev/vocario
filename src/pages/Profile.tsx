import { logOut } from 'ionicons/icons';
import React, { useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router';

import {
  IonAlert,
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { FirebaseContext } from '../components';
import { authService, profileService, statisticService, toastService } from '../services';
import { IonEvent } from '../types';

const Login: React.FC = () => {
  const history = useHistory();
  const { currentUser } = useContext(FirebaseContext);
  const [photoURL] = useState((currentUser && currentUser.photoURL) || undefined);
  const [displayName, setPhoneNumber] = useState(currentUser && currentUser.displayName);
  const [email, setEmail] = useState(currentUser && currentUser.email);
  const [showAlert, setShowAlert] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const handleLogout = useCallback(async () => {
    try {
      await authService.logout();
      history.push('/login');
    } catch (error) {
      toastService.showError(error);
    }
  }, [history]);

  const handleDisplayNameChange = (evt: IonEvent) => setPhoneNumber(evt.detail.value || '');

  const handleDisplayNameBlur = async () => {
    if (displayName == null || displayName === currentUser?.displayName) {
      return;
    }

    setShowLoading(true);
    try {
      await profileService.updateName(displayName);
      setShowLoading(false);
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  };

  const handleEmailChange = (evt: IonEvent) => setEmail(evt.detail.value || '');

  const handleEmailBlur = async () => {
    if (email == null || email === currentUser?.email) {
      return;
    }

    setShowLoading(true);
    try {
      await profileService.updateEmail(email, '');
      setShowLoading(false);
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  };

  const resetProgress = useCallback(async () => {
    setShowAlert(false);
    try {
      await statisticService.resetProgress();
      toastService.showToast({
        message: 'All progress successfully reset.',
        header: 'Reset the progress',
        duration: 3000,
        color: 'success',
        showCloseButton: true,
      });
    } catch (error) {
      toastService.showError(error);
    }
  }, []);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={handleLogout}>
              <IonIcon icon={logOut} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          <IonListHeader color="light">
            <IonLabel>Personal Information</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonAvatar slot="start">
              <img src={photoURL} alt="avatar" />
            </IonAvatar>
            <IonLabel position="fixed">Name</IonLabel>
            <IonInput type="text" value={displayName} onIonChange={handleDisplayNameChange} onIonBlur={handleDisplayNameBlur} />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={handleEmailChange} onIonBlur={handleEmailBlur} />
          </IonItem>
        </IonList>
        <div className="ion-padding">
          <IonButton expand="block" color="primary" onClick={() => setShowAlert(true)}>
            Reset the progress
          </IonButton>
        </div>
        <IonAlert
          isOpen={showAlert}
          header="Reset the progress!"
          message="Are you sure you want to completely reset all your progress? This operation is irreversible!"
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => setShowAlert(false),
            },
            {
              text: 'Reset',
              handler: resetProgress,
            },
          ]}
        />
        <IonLoading isOpen={showLoading} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;

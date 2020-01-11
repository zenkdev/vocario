import { logOut } from 'ionicons/icons';
import React, { useCallback, useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import {
  IonAvatar,
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
  IonToggle,
  IonToolbar,
} from '@ionic/react';

import { ResetProgress } from '../components';
import { authService, profileService, toastService } from '../services';
import { IonInputEvent, IonToggleEvent } from '../types';
import AppContext from '../AppContext';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { currentUser } = useContext(AppContext);
  const [photoURL] = useState(currentUser.photoURL);
  const [displayName, setPhoneNumber] = useState(currentUser.displayName);
  const [email, setEmail] = useState(currentUser.email);
  const [simpleMode, setSimpleMode] = useState(currentUser.simpleMode);
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

  const handleDisplayNameChange = (evt: IonInputEvent) => setPhoneNumber(evt.detail.value || '');

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

  const handleEmailChange = (evt: IonInputEvent) => setEmail(evt.detail.value || '');

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

  const handleSimpleModeChange = async (evt: IonToggleEvent) => {
    const newMode = evt.detail.checked;
    const oldMode = simpleMode;

    setSimpleMode(newMode);
    setShowLoading(true);
    try {
      await profileService.updateSimpleMode(newMode);
      setShowLoading(false);
    } catch (error) {
      setSimpleMode(oldMode); // restore if error occur
      setShowLoading(false);
      toastService.showError(error);
    }
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
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
            {photoURL && (
              <IonAvatar slot="start">
                <img src={photoURL} alt="avatar" />
              </IonAvatar>
            )}
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput type="text" value={displayName} onIonChange={handleDisplayNameChange} onIonBlur={handleDisplayNameBlur} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={handleEmailChange} onIonBlur={handleEmailBlur} />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Simple mode</IonLabel>
            <IonToggle checked={simpleMode} onIonChange={handleSimpleModeChange} />
          </IonItem>
        </IonList>
        <div className="ion-padding">
          <IonButton expand="block" color="primary" onClick={() => setShowAlert(true)}>
            Reset the progress
          </IonButton>
        </div>
        <ResetProgress showAlert={showAlert} onClose={() => setShowAlert(false)} />
        <IonLoading isOpen={showLoading} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;

import { logOut } from 'ionicons/icons';
import React, { useCallback, useState } from 'react';
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
  useIonViewWillEnter,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/react';

import { ResetProgress } from '../components';
import { authService, profileService, toastService } from '../services';
import { IonInputEvent, IonToggleEvent } from '../types';
import { UserProfile } from '../models';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [profile, setProfile] = useState<UserProfile>(new UserProfile());
  const [photoURL, setPhotoURL] = useState<string>();
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [simpleMode, setSimpleMode] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [showSaving, setShowSaving] = useState(false);
  const handleLogout = useCallback(async () => {
    try {
      await authService.logout();
      history.push('/login');
    } catch (error) {
      toastService.showError(error);
    }
  }, [history]);

  const handleDisplayNameChange = (evt: IonInputEvent) => setDisplayName(evt.detail.value || '');

  const handleDisplayNameBlur = async () => {
    if (displayName == null || displayName === profile.displayName) {
      return;
    }

    setShowSaving(true);
    try {
      await profileService.updateName(displayName);
      setShowSaving(false);
    } catch (error) {
      setShowSaving(false);
      toastService.showError(error);
    }
  };

  const handleEmailChange = (evt: IonInputEvent) => setEmail(evt.detail.value || '');

  const handleEmailBlur = async () => {
    if (email == null || email === profile.email) {
      return;
    }

    setShowSaving(true);
    try {
      await profileService.updateEmail(email, '');
      setShowSaving(false);
    } catch (error) {
      setShowSaving(false);
      toastService.showError(error);
    }
  };

  const handleSimpleModeChange = async (evt: IonToggleEvent) => {
    const newMode = evt.detail.checked;
    const oldMode = simpleMode;

    setSimpleMode(newMode);
    setShowSaving(true);
    try {
      await profileService.updateSimpleMode(newMode);
      setShowSaving(false);
    } catch (error) {
      setSimpleMode(oldMode); // restore if error occur
      setShowSaving(false);
      toastService.showError(error);
    }
  };

  const doRefresh = useCallback(({ target: refresher }) => {
    setShowLoading(true);
    profileService
      .getProfile()
      .then(data => {
        setShowLoading(false);
        refresher.complete();
        setProfile(data);
        setPhotoURL(data.photoURL);
        setDisplayName(data.displayName);
        setEmail(data.email);
        setSimpleMode(data.simpleMode);
      })
      .catch(error => {
        setShowLoading(false);
        refresher.complete();
        toastService.showError(error);
      });
  }, []);

  useIonViewWillEnter(() => {
    profileService
      .getProfile()
      .then(data => {
        setShowLoading(false);
        setProfile(data);
        setPhotoURL(data.photoURL);
        setDisplayName(data.displayName);
        setEmail(data.email);
        setSimpleMode(data.simpleMode);
      })
      .catch(error => {
        setShowLoading(false);
        toastService.showError(error);
      });
  });

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
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
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
        <IonLoading isOpen={showLoading} message="Loading..." />
        <IonLoading isOpen={showSaving} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;

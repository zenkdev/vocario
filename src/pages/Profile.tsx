/* eslint-disable react/jsx-one-expression-per-line */
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
  IonRange,
  IonRefresher,
  IonRefresherContent,
  IonSkeletonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';

import { If, ResetProgress, Button } from '../components';
import { UserProfile } from '../models';
import { authService, profileService, toastService } from '../services';
import { IonInputEvent, IonRangeEvent, IonToggleEvent } from '../types';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [profile, setProfile] = useState<UserProfile>(new UserProfile({}));
  const [photoURL, setPhotoURL] = useState<string>();
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [simpleMode, setSimpleMode] = useState(true);
  const [fontSize, setFontSize] = useState(100);
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
    try {
      await profileService.updateSimpleMode(newMode);
    } catch (error) {
      setSimpleMode(oldMode); // restore if error occur
      toastService.showError(error);
    }
  };

  const handleFontSizeChange = async (evt: IonRangeEvent) => {
    const newSize = evt.detail.value as number;
    const oldSize = fontSize;

    setFontSize(newSize);
    try {
      await profileService.updateFontSize(newSize / 100);
    } catch (error) {
      setFontSize(oldSize); // restore if error occur
      toastService.showError(error);
    }
  };

  const loadData = useCallback(async () => {
    try {
      const data = await profileService.getProfile();
      setShowLoading(false);
      setProfile(data);
      setPhotoURL(data.photoURL);
      setDisplayName(data.displayName);
      setEmail(data.email);
      setSimpleMode(data.simpleMode);
      setFontSize(data.fontSize * 100);
    } catch (error) {
      setShowLoading(false);
      toastService.showError(error);
    }
  }, []);

  const doRefresh = useCallback(
    ({ target: refresher }) => {
      setShowLoading(true);
      loadData().finally(() => refresher.complete());
    },
    [loadData],
  );

  useIonViewWillEnter(() => loadData(), [loadData]);

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
            <If
              condition={!showLoading}
              then={<IonInput type="text" value={displayName} onIonChange={handleDisplayNameChange} onIonBlur={handleDisplayNameBlur} />}
              else={<IonSkeletonText animated />}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <If
              condition={!showLoading}
              then={<IonInput type="email" value={email} onIonChange={handleEmailChange} onIonBlur={handleEmailBlur} />}
              else={<IonSkeletonText animated />}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Simple mode</IonLabel>
            <If
              condition={!showLoading}
              then={<IonToggle checked={simpleMode} onIonChange={handleSimpleModeChange} />}
              else={<IonSkeletonText animated />}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Font size</IonLabel>
            <If
              condition={!showLoading}
              then={<IonRange min={80} max={150} value={fontSize} step={10} ticks snaps onIonChange={handleFontSizeChange} />}
              else={<IonSkeletonText animated />}
            />
          </IonItem>
        </IonList>
        <div className="ion-padding">
          <Button expand="block" color="primary" onClick={() => setShowAlert(true)}>
            Reset the progress
          </Button>
        </div>
        <div className="ion-padding">
          <span className="small-text" style={{ textTransform: 'capitalize' }}>
            {process.env.REACT_APP_NAME} version: {process.env.REACT_APP_VERSION}
          </span>
        </div>
        <ResetProgress showAlert={showAlert} onClose={() => setShowAlert(false)} />
        <IonLoading isOpen={showLoading} message="Loading..." />
        <IonLoading isOpen={showSaving} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;

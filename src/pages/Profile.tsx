import { logOut } from 'ionicons/icons';
import React, { useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router';

import {
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
import { authService, profileService } from '../services';

const Login: React.FC = () => {
  const history = useHistory();
  const { currentUser } = useContext(FirebaseContext);
  const [photoURL] = useState((currentUser && currentUser.photoURL) || undefined);
  const [displayName, setPhoneNumber] = useState(currentUser && currentUser.displayName);
  const [email, setEmail] = useState(currentUser && currentUser.email);
  const [showLoading, setShowLoading] = useState(false);
  const handleLogout = useCallback(async () => {
    await authService.logout();
    history.push('/login');
  }, [history]);

  const handleDisplayNameChange = (evt: CustomEvent<any>) => setPhoneNumber(evt.detail.value || '');

  const handleDisplayNameBlur = async () => {
    if (displayName == null || displayName === currentUser?.displayName) {
      return;
    }

    setShowLoading(true);
    await profileService.updateName(displayName);
    setShowLoading(false);
  };

  const handleEmailChange = (evt: CustomEvent<any>) => setEmail(evt.detail || '');

  const handleEmailBlur = async () => {
    if (email == null || email === currentUser?.email) {
      return;
    }

    setShowLoading(true);
    await profileService.updateEmail(email, '');
    setShowLoading(false);
  };

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
        <IonList>
          <IonListHeader>
            <IonLabel>Personal Information</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonAvatar slot="start">
              <img src={photoURL} alt="avatar" />
            </IonAvatar>
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput type="text" value={displayName} onIonChange={handleDisplayNameChange} onIonBlur={handleDisplayNameBlur} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={handleEmailChange} onIonBlur={handleEmailBlur} />
          </IonItem>
        </IonList>
        <IonLoading isOpen={showLoading} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;

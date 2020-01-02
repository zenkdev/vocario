import React, { useCallback, useState, useContext } from 'react';

import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLoading,
  IonButtons,
  IonBackButton,
  IonListHeader,
  IonAvatar,
} from '@ionic/react';
import { logOut } from 'ionicons/icons';
import { authService, profileService } from '../services';
import { useHistory } from 'react-router';
import { FirebaseContext } from '../components';

const Login: React.FC = () => {
  const history = useHistory();
  const { currentUser } = useContext(FirebaseContext);
  const [displayName, setPhoneNumber] = useState(currentUser && currentUser.displayName);
  const [showLoading, setShowLoading] = useState(false);
  const handleLogout = useCallback(() => {
    authService.logout().subscribe(
      () => history.push('/login'),
      err => console.error(err),
    );
  }, [history]);

  const photoURL = currentUser && currentUser.photoURL ? currentUser.photoURL : undefined;
  const email = currentUser && currentUser.email ? currentUser.email : undefined;

  const handleDisplayNameChange = (evt: CustomEvent<{ value: string | null | undefined }>) => {
    setPhoneNumber(evt.detail.value || null);
  };

  const handleDisplayNameBlur = (evt: CustomEvent<void>) => {
    if (displayName == null || displayName === currentUser?.displayName) {
      return;
    }

    setShowLoading(true);
    profileService.updateName(displayName).subscribe(() => setShowLoading(false));
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
            <IonInput type="email" value={email} />
          </IonItem>
        </IonList>
        <IonLoading isOpen={showLoading} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;

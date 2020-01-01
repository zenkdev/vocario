import React, { useCallback, useState } from 'react';

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
} from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';
import { authService } from '../services';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showLoading, setShowLoading] = useState(false);
  const handleChangeEmail = useCallback((evt: CustomEvent<{ value: string | null | undefined }>) => {
    setEmail(evt.detail.value || '');
  }, []);
  const handleChangePassword = useCallback((evt: CustomEvent<{ value: string | null | undefined }>) => {
    setPassword(evt.detail.value || '');
  }, []);
  const loginWithEmailAndPassword = useCallback(() => {
    if (!email || !password) {
      console.log(`Form is not valid yet`);
    } else {
      setShowLoading(true);
      authService.loginWithEmailAndPassword(email, password).subscribe(
        () => history.push('/home'),
        err => console.error(err),
        () => setShowLoading(false),
      );
      // await this.loading.dismiss();
      // this.router.navigate(['/']);
      // // this.router.navigate([this.returnUrl]);
      // const alert = await this.alertCtrl.create({
      //   message: error.message,
      //   buttons: [{ text: 'Ok', role: 'cancel' }],
      // });
      // await alert.present();
    }
  }, [history, email, password]);
  const loginWithGoogle = useCallback(() => {
    setShowLoading(true);
    authService.loginWithGoogle().subscribe(
      () => history.push('/home'),
      err => console.error(err),
      () => setShowLoading(false),
    );
  }, [history]);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form noValidate>
          <IonList lines="full" class="ion-no-margin ion-no-padding">
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput type="email" placeholder="Your email address" onIonChange={handleChangeEmail} />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput type="password" placeholder="Your email password" onIonChange={handleChangePassword} />
            </IonItem>
          </IonList>
          <div className="ion-padding">
            <IonButton expand="block" disabled={!email || !password} onClick={loginWithEmailAndPassword}>
              Log in
            </IonButton>
          </div>
        </form>
        <IonList lines="full" class="ion-no-margin ion-padding">
          <IonButton expand="block" fill="outline" onClick={loginWithGoogle}>
            <IonIcon slot="start" icon={logoGoogle} />
            Log in with Google
          </IonButton>
          <IonButton expand="block" fill="outline" href="/signup">
            Create a new account
          </IonButton>
          <IonButton expand="block" fill="clear" href="/reset-password">
            I forgot my password :(
          </IonButton>
        </IonList>
        <IonLoading isOpen={showLoading} message="Logging in..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;

import React from 'react';

import { IonContent, IonLabel, IonList, IonListHeader, IonPage, IonProgressBar } from '@ionic/react';

const Splash: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IonList lines="none" class="ion-no-margin ion-no-padding">
            <IonListHeader>
              <IonLabel>Please wait while app is loading</IonLabel>
            </IonListHeader>
            <IonProgressBar type="indeterminate" />
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;

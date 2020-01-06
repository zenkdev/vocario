import React from 'react';
import { useHistory } from 'react-router';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

const Congratulations: React.FC = () => {
  const history = useHistory();
  return (
    <IonCard color="success">
      <IonCardHeader>
        <IonCardTitle>Congratulations!</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>You have learned all the words in this dictionary.</p>
        <div className="ion-padding">
          <IonButton onClick={() => history.goBack()}>Back to home</IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Congratulations;

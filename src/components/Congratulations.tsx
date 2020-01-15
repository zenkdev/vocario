import React from 'react';
import { useHistory } from 'react-router';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

interface CongratulationsProps {
  more?: boolean;
}

const Congratulations: React.FC<CongratulationsProps> = ({ more }) => {
  const history = useHistory();
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Congratulations!</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          You have learned all the words in this dictionary.
          {more && <span> Come back tomorrow for more tasks.</span>}
        </p>
        <div className="ion-padding-top">
          <IonButton onClick={() => history.goBack()}>Back to home</IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Congratulations;

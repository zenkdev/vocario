import React from 'react';
import { useHistory } from 'react-router';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import Button from '../app/Button';

interface CongratulationsProps {
  more?: boolean;
}

const Congratulations: React.FC<CongratulationsProps> = ({ more }) => {
  const history = useHistory();
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>Congratulations!</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p className="normal-text">
          You have learned all the words in this dictionary.
          {more && <span> Come back tomorrow for more tasks.</span>}
        </p>
        <div className="ion-padding-top">
          <Button onClick={() => history.goBack()}>Back to home</Button>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Congratulations;

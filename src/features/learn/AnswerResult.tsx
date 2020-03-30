import { stop, volumeHigh } from 'ionicons/icons';
import React, { useContext, useEffect } from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonText } from '@ionic/react';

import { LearnContext } from '../../pages/Learn';
import Button from '../../components/Button';

export type AnswerResultProps = {
  text: string;
  smallText?: string;
  valid: boolean;
  onNextClick: () => void;
};

const AnswerResult: React.FC<AnswerResultProps> = ({ text, smallText, valid, onNextClick }) => {
  const color = valid ? 'success' : 'danger';
  const title = valid ? 'Correct' : 'Correct answer';
  const { playing, toggle } = useContext(LearnContext);

  useEffect(() => toggle(), [toggle]);

  return (
    <IonCard>
      <IonCardHeader color={color}>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonIcon slot="start" icon={playing ? stop : volumeHigh} onClick={() => toggle()} />
        <IonText color={color} className="ion-padding-start normal-text">
          {text}
        </IonText>
        {smallText && <div className="ion-padding-top small-text">{smallText}</div>}
        <div className="ion-padding-top ion-text-center">
          <Button onClick={onNextClick}>Next</Button>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default AnswerResult;

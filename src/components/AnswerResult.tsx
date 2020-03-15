import { volumeHigh, stop } from 'ionicons/icons';
import React, { useCallback, useEffect, useMemo } from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonText } from '@ionic/react';

import useAudio from '../hooks/useAudio';
import Button from './Button';

interface AnswerResultProps {
  text: string;
  smallText?: string;
  valid: boolean;
  onNext: (valid: boolean) => void;
  audioUrl?: string;
}

const AnswerResult: React.FC<AnswerResultProps> = ({ text, smallText, valid, onNext, audioUrl = '' }) => {
  const color = useMemo(() => (valid ? 'success' : 'danger'), [valid]);
  const title = useMemo(() => (valid ? 'Correct' : 'Correct answer'), [valid]);
  const handleNext = useCallback(() => onNext(valid), [onNext, valid]);
  const [playing, toggle] = useAudio(audioUrl);

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
          <Button onClick={handleNext}>Next</Button>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default AnswerResult;

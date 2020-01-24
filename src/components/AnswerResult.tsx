import React, { useCallback, useMemo } from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText } from '@ionic/react';

import Button from './Button';

interface AnswerResultProps {
  text: string;
  smallText?: string;
  valid: boolean;
  onNext: (valid: boolean) => void;
}

const AnswerResult: React.FC<AnswerResultProps> = ({ text, smallText, valid, onNext }) => {
  const color = useMemo(() => (valid ? 'success' : 'danger'), [valid]);
  const title = useMemo(() => (valid ? 'Correct' : 'Correct answer'), [valid]);
  const handleNext = useCallback(() => onNext(valid), [onNext, valid]);

  return (
    <IonCard>
      <IonCardHeader color={color}>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText color={color} className="normal-text">
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

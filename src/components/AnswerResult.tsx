/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from '@ionic/react';

interface AnswerResultProps {
  text: string;
  smallText?: string;
  valid: boolean;
  onNext: (valid: boolean) => void;
}

const AnswerResult: React.FC<AnswerResultProps> = ({ text, smallText, valid, onNext }) => {
  const handleNext = useCallback(() => onNext(valid), [onNext, valid]);

  return (
    <>
      <IonCard color={valid ? 'success' : 'danger'}>
        <IonCardHeader>
          <IonCardSubtitle>{valid ? 'Correct' : 'Correct answer'}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          {text}
          {smallText && (
            <div className="ion-padding-top">
              <small>{smallText}</small>
            </div>
          )}
        </IonCardContent>
      </IonCard>
      <div className="ion-padding-start">
        <IonButton onClick={handleNext}>Next</IonButton>
      </div>
    </>
  );
};

export default AnswerResult;

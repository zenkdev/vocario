import React, { useCallback, useEffect, useState } from 'react';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

import { Word } from '../models';
import { IonInputEvent } from '../types';

interface WordCardProps {
  value: Word | undefined;
  validate: (valid: boolean) => void;
}

const WordCard: React.FC<WordCardProps> = ({ value, validate }) => {
  const [header, setHeader] = useState('New word');
  const [translation, setTranslation] = useState<string>();
  const [placeholder, setPlaceholder] = useState<string>();

  const handleHelpRequested = useCallback(() => {
    if (!value) {
      return;
    }
    if (!placeholder) {
      setPlaceholder(value.translation);
      validate(false);
    }
  }, [value, validate, placeholder]);

  const handleSubmit = useCallback(() => {
    if (!value) {
      return;
    }

    const valid =
      value.translation && translation && value.translation.trim().toLocaleLowerCase() === translation.trim().toLocaleLowerCase();

    if (!valid) {
      setPlaceholder(value.translation);
      setTranslation(undefined);
    }
    validate(valid as boolean);
  }, [value, validate, translation]);

  const handleChange = (evt: IonInputEvent) => setTranslation(evt.detail.value || '');

  useEffect(() => {
    if (value && value.count != null) {
      setHeader('Repeating');
    } else {
      setHeader('New word');
    }
    setTranslation(undefined);
    setPlaceholder(undefined);
  }, [value]);

  return (
    <IonCard>
      <IonCardHeader>{header}</IonCardHeader>
      <IonCardContent>
        <h3>{value?.text}</h3>
        <small>{value?.transcription}</small>
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          <IonItem>
            <IonLabel position="stacked">Translate please</IonLabel>
            <IonInput name="translation" placeholder={placeholder} type="text" value={translation} onIonChange={handleChange} />
          </IonItem>
        </IonList>

        <div className="ion-padding">
          {!translation && (
            <IonButton onClick={handleHelpRequested} type="button" fill="outline">
              Show me
            </IonButton>
          )}
          {translation && (
            <IonButton onClick={handleSubmit} type="button">
              Validate
            </IonButton>
          )}
        </div>
        <p style={{ fontSize: '60%' }}>{`${value?.partOfSpeech} : ${value?.category}`}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default WordCard;

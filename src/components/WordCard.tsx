import React, { useState, useEffect, useCallback } from 'react';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

import { Word } from '../models';

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

  const handleChange = useCallback((evt: CustomEvent<{ value: string | null | undefined }>) => {
    setTranslation(evt.detail.value || '');
  }, []);

  useEffect(() => {
    if (value && value.count > 0) {
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
        <h1>{value?.text}</h1>
        <p>{value?.transcription}</p>
        <form noValidate>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Translate please</IonLabel>
              <IonInput name="translation" placeholder={placeholder} type="text" value={translation} onIonChange={handleChange} />
            </IonItem>
          </IonList>

          <div>
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
        </form>
        <h3>
          {value?.partOfSpeech}: {value?.category}
        </h3>
      </IonCardContent>
    </IonCard>
  );
};

export default WordCard;

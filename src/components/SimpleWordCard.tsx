/* eslint-disable react/jsx-no-bind */
import React, { useCallback, useEffect, useState } from 'react';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { Word } from '../models';
import { compareStringsIgnoreCase } from '../utils';

enum Answer {
  notAnswered = 0,
  valid = 1,
  invalid = 2,
}

interface SimpleWordCardProps {
  word: Word;
  options: string[];
  onNext: (valid: boolean) => void;
}

const SimpleWordCard: React.FC<SimpleWordCardProps> = ({ word, options, onNext }) => {
  const { text: title, transcription, translation, partOfSpeech, category } = word;
  const [answer, setAnswer] = useState<Answer>(Answer.notAnswered);

  const handleClick = useCallback(
    option => {
      setAnswer(compareStringsIgnoreCase(translation, option) ? Answer.valid : Answer.invalid);
    },
    [translation],
  );
  const handleNext = useCallback(() => onNext(answer === Answer.valid), [onNext, answer]);

  useEffect(() => setAnswer(Answer.notAnswered), [word]);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{word.count != null ? 'Repeat' : 'New word'}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="ion-padding">
          <small>{transcription}</small>
        </div>
        {answer === Answer.notAnswered && (
          <div className="ion-padding">
            <h2>Choose translation</h2>
          </div>
        )}
        {answer === Answer.invalid && (
          <IonCard color="danger">
            <IonCardHeader>
              <IonCardSubtitle>Correct answer</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{translation}</IonCardContent>
          </IonCard>
        )}
        {answer === Answer.valid && (
          <IonCard color="success">
            <IonCardHeader>
              <IonCardTitle>Correct</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{translation}</IonCardContent>
          </IonCard>
        )}
        <div className="ion-padding">
          {answer === Answer.notAnswered ? (
            options.map(option => (
              <IonButton expand="block" size="small" fill="outline" key={option} onClick={handleClick.bind(null, option)}>
                {option}
              </IonButton>
            ))
          ) : (
            <IonButton onClick={handleNext}>Next</IonButton>
          )}
        </div>
        <p style={{ fontSize: '60%' }}>{`${partOfSpeech} : ${category}`}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default SimpleWordCard;

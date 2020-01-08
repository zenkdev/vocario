import React, { useCallback, useEffect, useState } from 'react';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { Word } from '../models';
import { compareStringsIgnoreCase } from '../utils';

enum Answer {
  notAnswered = 0,
  valid = 1,
  invalid = 2,
}

interface AnswerCardProps {
  translation: string;
  success: boolean;
  onNext: () => void;
}

const AnswerCard: React.FC<AnswerCardProps> = ({ translation, success, onNext }) => {
  return (
    <>
      <IonCard color={success ? 'success' : 'danger'} className="ion-no-margin ion-margin-top">
        <IonCardHeader>
          <IonCardSubtitle>{success ? 'Correct' : 'Correct answer'}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>{translation}</IonCardContent>
      </IonCard>
      <div className="ion-padding-top">
        <IonButton size="small" onClick={onNext}>
          Next
        </IonButton>
      </div>
    </>
  );
};

interface OptionButtonProps {
  option: string;
  onClick: (option: string) => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ option, onClick }) => {
  const handleClick = useCallback(() => onClick(option), [option, onClick]);
  return (
    <IonButton expand="block" size="small" fill="outline" onClick={handleClick}>
      {option}
    </IonButton>
  );
};

interface SimpleWordCardProps {
  word: Word;
  options: string[];
  onNext: (valid: boolean) => void;
}

const SimpleWordCard: React.FC<SimpleWordCardProps> = ({ word, options, onNext }) => {
  const { text: title, transcription, translation, partOfSpeech, category } = word;
  const [answer, setAnswer] = useState<Answer>(Answer.notAnswered);

  const handleClick = useCallback(option => setAnswer(compareStringsIgnoreCase(translation, option) ? Answer.valid : Answer.invalid), [
    translation,
  ]);
  const handleNext = useCallback(() => onNext(answer === Answer.valid), [onNext, answer]);

  useEffect(() => setAnswer(Answer.notAnswered), [word]);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{word.count != null ? 'Repeat' : 'New word'}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="no-padding">
          <small>{transcription}</small>
        </div>
        {answer === Answer.notAnswered ? (
          <>
            <div className="ion-padding-top">
              <h2>Choose translation</h2>
            </div>
            <div className="ion-padding-top">
              {options.map(option => (
                <OptionButton key={option} option={option} onClick={handleClick} />
              ))}
            </div>
          </>
        ) : (
          <AnswerCard translation={translation} success={answer === Answer.valid} onNext={handleNext} />
        )}
        <p className="ion-padding-top" style={{ fontSize: '60%' }}>{`${partOfSpeech} : ${category}`}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default SimpleWordCard;

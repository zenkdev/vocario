import React, { useCallback, useEffect, useState } from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import { Word } from '../models';
import { Answer } from '../types';
import { isValidAnswer } from '../utils';
import { AnswerResult, OptionButton } from '.';

function renderQuestion(options: string[], handleClick: (option: string) => void) {
  return [
    <div key="header" className="ion-padding-top">
      <h2>Choose translation</h2>
    </div>,
    <div key="options" className="ion-padding-top">
      {options.map(option => (
        <OptionButton key={option} option={option} onClick={handleClick} />
      ))}
    </div>,
  ];
}

interface WordCardSimpleProps {
  word: Word;
  options: string[];
  onNext: (valid: boolean) => void;
}

const WordCardSimple: React.FC<WordCardSimpleProps> = ({ word, options, onNext }) => {
  const { text: title, transcription, translation, partOfSpeech, category } = word;
  const [answer, setAnswer] = useState<Answer>(Answer.empty);
  useEffect(() => setAnswer(Answer.empty), [word]);

  const handleClick = useCallback(option => setAnswer(isValidAnswer(translation, option)), [translation]);
  const handleNext = useCallback(() => onNext(answer === Answer.valid), [onNext, answer]);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="ion-no-padding small-text">{transcription}</div>
        {answer === Answer.empty ? (
          renderQuestion(options, handleClick)
        ) : (
          <AnswerResult text={translation} valid={answer === Answer.valid} onNext={handleNext} />
        )}
        <div className="ion-padding-top x-small-text">{`${partOfSpeech} : ${category}`}</div>
      </IonCardContent>
    </IonCard>
  );
};

export default WordCardSimple;

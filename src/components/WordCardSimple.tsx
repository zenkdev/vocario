import React, { useCallback, useEffect, useState } from 'react';

import { Word } from '../models';
import { Answer } from '../types';
import { isValidAnswer } from '../utils';
import { AnswerResult, OptionButton, If } from '.';

function renderQuestion(options: string[], handleClick: (option: string) => void) {
  return (
    <>
      <div className="ion-padding-start large-text">Choose translation</div>
      <div className="ion-padding">
        {options.map(option => (
          <OptionButton key={option} option={option} onClick={handleClick} />
        ))}
      </div>
    </>
  );
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
    <section>
      <div className="ion-padding-start ion-padding-end">
        <h1>{title}</h1>
      </div>
      <div>
        <div className="ion-padding small-text">{transcription}</div>
        <If
          condition={answer === Answer.empty}
          then={renderQuestion(options, handleClick)}
          else={<AnswerResult text={translation} valid={answer === Answer.valid} onNext={handleNext} />}
        />
        <div className="ion-padding small-text">{`${partOfSpeech} : ${category}`}</div>
      </div>
    </section>
  );
};

export default WordCardSimple;

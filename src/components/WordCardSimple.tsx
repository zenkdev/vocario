import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { modelHelper, Word } from '../models';
import { Answer } from '../types';
import { isValidAnswer } from '../utils';
import AnswerResult from './AnswerResult';
import If from './If';
import OptionButton from './OptionButton';

interface QuestionSimpleProps {
  options: string[];
  onClick: (value: string) => void;
}

const QuestionSimple: React.FC<QuestionSimpleProps> = ({ options, onClick }) => (
  <div className="ion-padding">
    {options.map(option => (
      <OptionButton key={option} option={option} onClick={onClick} />
    ))}
  </div>
);

interface WordCardSimpleProps {
  word: Word;
  options: string[];
  onNext: (valid: boolean) => void;
}

const WordCardSimple: React.FC<WordCardSimpleProps> = ({ word, options, onNext }) => {
  const { translation, category } = word;
  const title = useMemo(() => modelHelper.getText(word), [word]);
  const transcription = useMemo(() => modelHelper.getTranscription(word), [word]);
  const [answer, setAnswer] = useState<Answer>(Answer.empty);
  useEffect(() => setAnswer(Answer.empty), [word]);
  const handleClick = useCallback(option => setAnswer(isValidAnswer(translation, option)), [translation]);
  const handleNext = useCallback(() => onNext(answer === Answer.valid), [onNext, answer]);

  return (
    <section>
      <div className="ion-text-center">
        <h1 className="large-text">{title}</h1>
      </div>
      <div>
        <div className="ion-padding small-text ion-text-center">{transcription}</div>
        <If
          condition={answer === Answer.empty}
          then={<QuestionSimple key="question" options={options} onClick={handleClick} />}
          else={<AnswerResult key="answer" text={translation} valid={answer === Answer.valid} onNext={handleNext} />}
        />
        <div className="ion-padding small-text">{category}</div>
      </div>
    </section>
  );
};

export default WordCardSimple;

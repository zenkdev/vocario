import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { modelHelper, Word } from '../../models';
import { Answer } from '../../types';
import { isValidAnswer } from '../../utils';
import AnswerResult from '../AnswerResult';
import If from '../If';
import SimpleQuestion from './SimpleQuestion';

interface SimpleCardProps {
  word: Word;
  options: string[];
  onNext: (valid: boolean) => Promise<void>;
  audioUrl?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ word, options, onNext, audioUrl }) => {
  const { translation, category } = word;
  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState<Answer>(Answer.empty);
  const title = useMemo(() => modelHelper.getText(word), [word]);
  const transcription = useMemo(() => modelHelper.getTranscription(word), [word]);
  const handleClick = useCallback(option => setAnswer(isValidAnswer(translation, option)), [translation]);
  const handleNext = useCallback(() => onNext(answer === Answer.valid).then(() => setCounter(c => c + 1)), [onNext, answer]);

  const valid = answer === Answer.valid;

  useEffect(() => setAnswer(Answer.empty), [word, counter]);

  return (
    <section>
      <div className="ion-text-center">
        <h1 className="large-text">{title}</h1>
      </div>
      <div>
        <div className="ion-padding small-text ion-text-center">{transcription}</div>
        <If
          condition={answer === Answer.empty}
          then={<SimpleQuestion options={options} onClick={handleClick} />}
          else={<AnswerResult audioUrl={audioUrl} text={translation} valid={valid} onNext={handleNext} />}
        />
        <div className="ion-padding small-text">{category}</div>
      </div>
    </section>
  );
};

export default SimpleCard;

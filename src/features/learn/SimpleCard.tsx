import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AnswerResult from '../../components/AnswerResult';
import If from '../../components/If';
import { modelHelper, Word } from '../../models';
import { Answer } from '../../types';
import { isValidAnswer } from '../../utils';
import { updateWord } from './learnSlice';
import { selectOptions } from './selectors';
import SimpleQuestion from './SimpleQuestion';

type SimpleCardProps = {
  word: Word;
};

const SimpleCard: React.FC<SimpleCardProps> = ({ word }) => {
  const { translation, category } = word;
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState<Answer>(Answer.empty);
  const title = useMemo(() => modelHelper.getText(word), [word]);
  const transcription = useMemo(() => modelHelper.getTranscription(word), [word]);
  const handleClick = useCallback(option => setAnswer(isValidAnswer(translation, option)), [translation]);
  const handleNext = useCallback(() => dispatch(updateWord(answer === Answer.valid)), [dispatch, answer]);
  const options = useSelector(selectOptions);

  const valid = answer === Answer.valid;

  useEffect(() => setAnswer(Answer.empty), [word]);

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
          else={<AnswerResult text={translation} valid={valid} onNextClick={handleNext} />}
        />
        <div className="ion-padding small-text">{category}</div>
      </div>
    </section>
  );
};

export default SimpleCard;

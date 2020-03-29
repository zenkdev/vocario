import 'react-simple-keyboard/build/css/index.css';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import Keyboard from 'react-simple-keyboard';

import AnswerResult from '../../components/AnswerResult';
import If from '../../components/If';
import { modelHelper, Word } from '../../models';
import { Answer } from '../../types';
import { getFullInput, isValidAnswer } from '../../utils';
import { updateWord } from './learnSlice';
import NormalQuestion from './NormalQuestion';
import StyledInput from './StyledInput';

type NormalCardProps = {
  word: Word;
};

const NormalCard: React.FC<NormalCardProps> = ({ word }) => {
  const { translation: title, category } = word;
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [keyboardRef, setKeyboardRef] = useState<Keyboard>();
  const [answer, setAnswer] = useState<Answer>(Answer.empty);
  const text = useMemo(() => modelHelper.getText(word), [word]);
  const textWithLang = useMemo(() => modelHelper.getTextWithLang(word), [word]);
  const transcription = useMemo(() => modelHelper.getTranscription(word), [word]);
  const handleValidate = useCallback(() => setAnswer(isValidAnswer(text, getFullInput(input, text))), [input, text]);
  const handleNext = useCallback(() => dispatch(updateWord(answer === Answer.valid)), [dispatch, answer]);
  const valid = answer === Answer.valid;

  useEffect(() => {
    setInput('');
    setAnswer(Answer.empty);
    if (keyboardRef) {
      keyboardRef.clearInput();
    }
  }, [word, keyboardRef]);

  return (
    <section>
      <div className="ion-text-center">
        <h1 className="large-text">{title}</h1>
      </div>
      <div>
        <div className="no-padding">
          <StyledInput input={input} text={text} />
        </div>
        <If
          condition={answer === Answer.empty}
          then={<NormalQuestion text={text} input={input} keyboardRef={setKeyboardRef} onChange={setInput} onValidate={handleValidate} />}
          else={<AnswerResult text={textWithLang} smallText={transcription} valid={valid} onNextClick={handleNext} />}
        />
        <div className="ion-padding small-text">{category}</div>
      </div>
    </section>
  );
};

export default NormalCard;

import 'react-simple-keyboard/build/css/index.css';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { modelHelper, Word } from '../../models';
import { Answer } from '../../types';
import { getFullInput, isValidAnswer } from '../../utils';
import AnswerResult from '../AnswerResult';
import If from '../If';
import StyledInput from './StyledInput';
import NormalQuestion from './NormalQuestion';

interface NormalCardProps {
  word: Word;
  onNext: (valid: boolean) => Promise<void>;
}

const NormalCard: React.FC<NormalCardProps> = ({ word, onNext }) => {
  const { translation: title, category } = word;
  const [input, setInput] = useState('');
  const [counter, setCounter] = useState(0);
  const [keyboardRef, setKeyboardRef] = useState<Keyboard>();
  const [answer, setAnswer] = useState<Answer>(Answer.empty);
  const text = useMemo(() => modelHelper.getText(word), [word]);
  const textWithLang = useMemo(() => modelHelper.getTextWithLang(word), [word]);
  const transcription = useMemo(() => modelHelper.getTranscription(word), [word]);
  const handleValidate = useCallback(() => setAnswer(isValidAnswer(text, getFullInput(input, text))), [input, text]);
  const handleNext = useCallback(() => onNext(answer === Answer.valid).then(() => setCounter(counter + 1)), [onNext, answer, counter]);

  useEffect(() => {
    setInput('');
    setAnswer(Answer.empty);
    if (keyboardRef) {
      keyboardRef.clearInput();
    }
  }, [word, counter, keyboardRef]);

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
          else={<AnswerResult text={textWithLang} smallText={transcription} valid={answer === Answer.valid} onNext={handleNext} />}
        />
        <div className="ion-padding small-text">{category}</div>
      </div>
    </section>
  );
};

export default NormalCard;

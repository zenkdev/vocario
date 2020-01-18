import 'react-simple-keyboard/build/css/index.css';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { Word } from '../models';
import { Answer } from '../types';
import { getFullInput, getText, getTranscription, isValidAnswer, getTextWithLang } from '../utils';
import AnswerResult from './AnswerResult';
import If from './If';
import QuestionNormal from './QuestionNormal';
import WordInput from './WordInput';

interface WordCardNormalProps {
  word: Word;
  onNext: (valid: boolean) => void;
}

const WordCardNormal: React.FC<WordCardNormalProps> = ({ word, onNext }) => {
  const { translation: title, category } = word;
  const text = useMemo(() => getText(word), [word]);
  const textWithLang = useMemo(() => getTextWithLang(word), [word]);
  const transcription = useMemo(() => getTranscription(word), [word]);
  const [keyboardRef, setKeyboardRef] = useState<Keyboard>();
  const [input, setInput] = useState<string>('');
  const [answer, setAnswer] = useState<Answer>(Answer.empty);

  useEffect(() => {
    setInput('');
    setAnswer(Answer.empty);
    if (keyboardRef) {
      keyboardRef.clearInput();
    }
  }, [word, keyboardRef]);

  const handleValidate = useCallback(() => setAnswer(isValidAnswer(text, getFullInput(input, text))), [input, text]);
  const handleNext = useCallback(() => onNext(answer === Answer.valid), [onNext, answer]);

  return (
    <section>
      <div className="ion-text-center">
        <h1>{title}</h1>
      </div>
      <div>
        <div className="no-padding">
          <WordInput input={input} text={text} />
        </div>
        <If
          condition={answer === Answer.empty}
          then={<QuestionNormal text={text} input={input} keyboardRef={setKeyboardRef} onChange={setInput} onValidate={handleValidate} />}
          else={<AnswerResult text={textWithLang} smallText={transcription} valid={answer === Answer.valid} onNext={handleNext} />}
        />
        <div className="ion-padding small-text">{category}</div>
      </div>
    </section>
  );
};

export default WordCardNormal;

import React, { useCallback, useEffect, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { AnswerResult, If, QuestionNormal, WordInput } from '.';

import { Word } from '../models';
import { Answer } from '../types';
import { getFullInput, isValidAnswer } from '../utils';

interface WordCardNormalProps {
  word: Word;
  onNext: (valid: boolean) => void;
}

const WordCardNormal: React.FC<WordCardNormalProps> = ({ word, onNext }) => {
  const { text, transcription, translation: title, partOfSpeech, category } = word;
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
          else={<AnswerResult text={text} smallText={transcription} valid={answer === Answer.valid} onNext={handleNext} />}
        />
        <div className="ion-padding small-text">{`${partOfSpeech} : ${category}`}</div>
      </div>
    </section>
  );
};

export default WordCardNormal;

/* eslint-disable react/no-array-index-key */
import 'react-simple-keyboard/build/css/index.css';

import { helpCircle } from 'ionicons/icons';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react';

import { Word } from '../models';
import { Answer } from '../types';
import { isLetter, isValidAnswer, isWhiteSpace, toCharArray } from '../utils';
import { AnswerResult, If, MobileKeyboard } from '.';

function fullInput(input: string, text: string) {
  let str = '';
  let iInd = 0;
  let tInd = 0;

  // prepend text
  while (tInd < text.length) {
    if (isLetter(text.charAt(tInd))) {
      break;
    }
    str += text.charAt(tInd);
    tInd += 1;
  }

  // copy input
  while (iInd < input.length) {
    str += input.charAt(iInd);
    iInd += 1;
    tInd += 1;

    // append text
    while (tInd < text.length) {
      if (isLetter(text.charAt(tInd))) {
        break;
      }
      str += text.charAt(tInd);
      tInd += 1;
    }
  }

  return str;
}

function unusedChars(input: string, text: string) {
  const chars = toCharArray(text.toLocaleLowerCase())
    .filter(isLetter)
    .reduce((acc, ch) => {
      acc[ch] = (acc[ch] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const usedChars = toCharArray(input.toLocaleLowerCase()).filter(isLetter);
  usedChars.forEach(ch => {
    chars[ch] = (chars[ch] || 0) - 1;
  });

  return Object.entries(chars)
    .filter(([, value]) => value > 0)
    .map(([key]) => key);
}

function displayChar(ch: string, index: number, input: string) {
  if (isLetter(ch)) {
    return input[index] || '?';
  }
  return isWhiteSpace(ch) ? null : ch;
}

function renderQuestion(
  text: string,
  input: string,
  highlight: string | undefined,
  handleRef: (r: Keyboard) => void,
  handleChange: (input: string) => void,
  handleHelpRequested: () => void,
  handleValidate: () => void,
) {
  const letters = toCharArray(text).filter(isLetter);
  const inputPattern = new RegExp(`^[${letters.join('')}]{0,${letters.length}}$`, 'gis');
  const buttons = ['{backspace}', ...unusedChars(input, text)];

  return (
    <>
      <div className="ion-text-center">
        <IonIcon icon={helpCircle} color="success" size="large" onClick={handleHelpRequested} />
      </div>
      <div className="keyboard-wrapper">
        <MobileKeyboard
          keyboardRef={handleRef}
          buttons={buttons}
          highlight={highlight}
          inputPattern={inputPattern}
          onChange={handleChange}
        />
      </div>
      <div className="ion-padding ion-text-center">
        <IonButton onClick={handleValidate} disabled={text.length > input.length}>
          Validate
        </IonButton>
      </div>
    </>
  );
}

interface WordCardNormalProps {
  word: Word;
  onNext: (valid: boolean) => void;
}

const WordCardNormal: React.FC<WordCardNormalProps> = ({ word, onNext }) => {
  const { text, transcription, translation: title, partOfSpeech, category } = word;
  const [keyboardRef, setKeyboardRef] = useState<Keyboard>();
  const [input, setInput] = useState<string>('');
  const [highlight, setHighlight] = useState<string>();
  const [answer, setAnswer] = useState<Answer>(Answer.empty);
  useEffect(() => {
    setInput('');
    setAnswer(Answer.empty);
    if (keyboardRef) {
      keyboardRef.clearInput();
    }
  }, [word, keyboardRef]);
  const fInput = useMemo(() => fullInput(input, text), [text, input]);

  const handleInput = useCallback((value: string) => {
    setInput(value);
    setHighlight(undefined);
  }, []);
  const handleHelpRequested = useCallback(() => {
    let i = fInput.length;
    while (i < text.length) {
      const char = text.charAt(i);
      if (isLetter(char)) {
        setHighlight(char);
        break;
      }
      i += 1;
    }
  }, [fInput, text]);
  const handleValidate = useCallback(() => setAnswer(isValidAnswer(text, fInput)), [text, fInput]);
  const handleNext = useCallback(() => onNext(answer === Answer.valid), [onNext, answer]);

  return (
    <section>
      <div className="ion-text-center">
        <h1>{title}</h1>
      </div>
      <div>
        <div className="no-padding">
          <IonGrid>
            <IonRow class="ion-justify-content-center">
              {toCharArray(text).map((ch, index) => (
                <IonCol key={`ch${index}`} className={`char-input${isLetter(ch) ? ' char-input-letter' : ''}`}>
                  <div>{displayChar(ch, index, fInput)}</div>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
        <If
          condition={answer === Answer.empty}
          then={renderQuestion(text, fInput, highlight, setKeyboardRef, handleInput, handleHelpRequested, handleValidate)}
          else={<AnswerResult text={text} smallText={transcription} valid={answer === Answer.valid} onNext={handleNext} />}
        />
        <div className="ion-padding small-text">{`${partOfSpeech} : ${category}`}</div>
      </div>
    </section>
  );
};

export default WordCardNormal;

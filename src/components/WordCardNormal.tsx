/* eslint-disable react/no-array-index-key */
import 'react-simple-keyboard/build/css/index.css';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/react';

import { Word } from '../models';
import { Answer } from '../types';
import { isValidAnswer, toCharArray, isLetter, isWhiteSpace } from '../utils';
import { AnswerResult, MobileKeyboard, If } from '.';

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
  handleRef: (r: Keyboard) => void,
  handleChange: (input: string) => void,
  handleValidate: () => void,
) {
  const maxLength = toCharArray(text).filter(isLetter).length;
  const buttons = unusedChars(input, text).join(' ');
  const buttonTheme = buttons
    ? [
        {
          class: 'hg-red',
          buttons,
        },
      ]
    : undefined;
  return (
    <>
      {/* <div key="header" className="ion-padding-top">
        <h2>Type word</h2>
      </div> */}
      <div className="ion-padding-top">
        <MobileKeyboard keyboardRef={handleRef} buttonTheme={buttonTheme} maxLength={maxLength} onChange={handleChange} />
      </div>
      <div className="ion-padding">
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
  const [answer, setAnswer] = useState<Answer>(Answer.empty);
  useEffect(() => {
    setInput('');
    setAnswer(Answer.empty);
    if (keyboardRef) {
      keyboardRef.clearInput();
    }
  }, [word, keyboardRef]);
  const fInput = useMemo(() => fullInput(input, text), [text, input]);

  // const handleHelpRequested = useCallback(() => {
  //   if (!value) {
  //     return;
  //   }
  //   if (!placeholder) {
  //     setPlaceholder(value.translation);
  //     onNext(false);
  //   }
  // }, [value, onNext, placeholder]);

  const handleValidate = useCallback(() => setAnswer(isValidAnswer(text, fInput)), [text, fInput]);
  const handleNext = useCallback(() => onNext(answer === Answer.valid), [onNext, answer]);

  return (
    <section>
      <div className="ion-padding-start ion-padding-end">
        <h1>{title}</h1>
      </div>
      <div>
        {/* <div className="ion-padding">
          {!translation && (
            <IonButton onClick={handleHelpRequested} type="button" fill="outline">
              Show me
            </IonButton>
          )}
        </div> */}
        <div className="no-padding">
          <IonGrid>
            <IonRow class="ion-justify-content-start">
              {toCharArray(text).map((ch, index) => (
                <IonCol key={`ch${index}`} className={`no-flex-grow char-input${isLetter(ch) ? ' char-input-letter' : ''}`}>
                  <div>{displayChar(ch, index, input)}</div>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
        <If
          condition={answer === Answer.empty}
          then={renderQuestion(text, fInput, setKeyboardRef, setInput, handleValidate)}
          else={<AnswerResult text={text} smallText={transcription} valid={answer === Answer.valid} onNext={handleNext} />}
        />
        <div className="ion-padding small-text">{`${partOfSpeech} : ${category}`}</div>
      </div>
    </section>
  );
};

export default WordCardNormal;

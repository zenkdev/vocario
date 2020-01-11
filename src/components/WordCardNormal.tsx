/* eslint-disable react/jsx-props-no-spreading */
import 'react-simple-keyboard/build/css/index.css';

import React, { useCallback, useEffect, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';

import { Word } from '../models';
import { Answer } from '../types';
import { compareStringsIgnoreCase } from '../utils';

const keyboardConfig = {
  layout: {
    default: ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m {backspace}'],
  },
  display: { '{backspace}': '⌫' },
};

const isLetter = (ch: string): boolean => /[A-Za-z]/.test(ch);

const offset = (index: number, arr: string[]): string => {
  let result = 0;
  let pointer = index - 1;
  while (pointer >= 0) {
    if (isLetter(arr[pointer])) {
      break;
    }
    result += 1;
    pointer -= 1;
  }
  return String(result);
};

function renderChar(ch: string, index: number, arr: string[], input: string) {
  if (isLetter(ch)) {
    return (
      <IonCol key={index} size="1" offset={offset(index, arr)}>
        <div style={{ backgroundColor: '#f7f7f7', border: 'solid 1px #ddd', textAlign: 'center', textTransform: 'lowercase' }}>
          {input[index] || '?'}
        </div>
      </IonCol>
    );
  }
  return null;
}

function renderQuestion(
  text: string,
  input: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleRef: (r: any) => void,
  handleChange: (input: string) => void,
  handleValidate: () => void,
) {
  return [
    // <div key="header" className="ion-padding-top">
    //   <h2>Type word</h2>
    // </div>,
    <div key="options" className="no-padding">
      <IonGrid>
        <IonRow class="ion-justify-content-start">
          {Array.prototype.map.call(text, (ch, index, arr) => renderChar(ch, index, arr, input))}
        </IonRow>
      </IonGrid>
    </div>,
    <div key="keyboard" className="ion-padding-top">
      <Keyboard keyboardRef={handleRef} {...keyboardConfig} onChange={handleChange} />
    </div>,
    <div key="buttons" className="ion-padding-top">
      <IonButton size="small" onClick={handleValidate}>
        Validate
      </IonButton>
    </div>,
  ];
}

function renderAnswer(answer: Answer, text: string, transcription: string, handleNext: () => void) {
  const success = answer === Answer.valid;
  return [
    <IonCard key="card" color={success ? 'success' : 'danger'} className="ion-no-margin ion-margin-top">
      <IonCardHeader>
        <IonCardSubtitle>{success ? 'Correct' : 'Correct answer'}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        {text}
        <div className="ion-padding-top">
          <small>{transcription}</small>
        </div>
      </IonCardContent>
    </IonCard>,
    <div key="buttons" className="ion-padding-top">
      <IonButton size="small" onClick={handleNext}>
        Next
      </IonButton>
    </div>,
  ];
}

interface WordCardNormalProps {
  word: Word;
  onNext: (valid: boolean) => void;
}

const WordCardNormal: React.FC<WordCardNormalProps> = ({ word, onNext }) => {
  const { text, transcription, translation: title, partOfSpeech, category } = word;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, setKeyboardRef] = useState<any>();
  const [input, setInput] = useState<string>('');
  const [answer, setAnswer] = useState<Answer>(Answer.empty);
  useEffect(() => {
    setInput('');
    setAnswer(Answer.empty);
  }, [word]);

  // const handleHelpRequested = useCallback(() => {
  //   if (!value) {
  //     return;
  //   }
  //   if (!placeholder) {
  //     setPlaceholder(value.translation);
  //     onNext(false);
  //   }
  // }, [value, onNext, placeholder]);

  const handleChange = (inp: string) => {
    setInput(inp);
  };
  const handleValidate = useCallback(() => setAnswer(compareStringsIgnoreCase(text, input) ? Answer.valid : Answer.invalid), [text, input]);
  const handleNext = useCallback(() => onNext(answer === Answer.valid), [onNext, answer]);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{word.count != null ? 'Repeat' : 'New word'}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {/* <div className="ion-padding">
          {!translation && (
            <IonButton onClick={handleHelpRequested} type="button" fill="outline">
              Show me
            </IonButton>
          )}
        </div> */}
        {answer === Answer.empty
          ? renderQuestion(text, input, r => setKeyboardRef(r), handleChange, handleValidate)
          : renderAnswer(answer, text, transcription, handleNext)}
        <p className="ion-padding-top" style={{ fontSize: '60%' }}>{`${partOfSpeech} : ${category}`}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default WordCardNormal;

import { IonButton, IonIcon } from '@ionic/react';

import { helpCircle } from 'ionicons/icons';
import React, { useCallback, useMemo, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { MobileKeyboard } from '.';
import { isLetter, toCharArray, getFullInput } from '../utils';

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

interface QuestionNormalProps {
  text: string;
  input: string;
  keyboardRef: (r: Keyboard) => void;
  onChange: (value: string) => void;
  onValidate: () => void;
}

const QuestionNormal: React.FC<QuestionNormalProps> = ({ text, input, keyboardRef, onChange, onValidate }) => {
  const [highlight, setHighlight] = useState<string>();
  const fullInput = useMemo(() => getFullInput(input, text), [input, text]);
  const inputPattern = useMemo(() => {
    const letters = toCharArray(text).filter(isLetter);
    return new RegExp(`^[${letters.join('')}]{0,${letters.length}}$`, 'iu');
  }, [text]);
  const buttons = useMemo(() => ['{backspace}', ...unusedChars(input, text)], [input, text]);

  const handleInput = useCallback(
    (value: string) => {
      onChange(value);
      setHighlight(undefined);
    },
    [onChange],
  );
  const handleHelpRequested = useCallback(() => {
    let i = fullInput.length;
    while (i < text.length) {
      const char = text.charAt(i);
      if (isLetter(char)) {
        setHighlight(char);
        break;
      }
      i += 1;
    }
  }, [text, fullInput]);

  return (
    <>
      <div className="ion-text-center">
        <IonIcon icon={helpCircle} color="success" size="large" onClick={handleHelpRequested} />
      </div>
      <div className="keyboard-wrapper">
        <MobileKeyboard
          keyboardRef={keyboardRef}
          buttons={buttons}
          highlight={highlight}
          inputPattern={inputPattern}
          onChange={handleInput}
        />
      </div>
      <div className="ion-padding ion-text-center">
        <IonButton onClick={onValidate} disabled={text.length > fullInput.length}>
          Validate
        </IonButton>
      </div>
    </>
  );
};

export default QuestionNormal;

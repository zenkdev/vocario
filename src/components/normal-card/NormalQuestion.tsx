import React, { useCallback, useMemo, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

import { getFullInput, isLetter, unusedChars } from '../../utils';
import Button from '../Button';
import MobileKeyboard from './MobileKeyboard';

interface NormalQuestionProps {
  text: string;
  input: string;
  keyboardRef: (r: Keyboard) => void;
  onChange: (value: string) => void;
  onValidate: () => void;
}

const NormalQuestion: React.FC<NormalQuestionProps> = ({ text, input, keyboardRef, onChange, onValidate }) => {
  const [highlight, setHighlight] = useState<string>();
  const fullInput = useMemo(() => getFullInput(input, text), [input, text]);
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
        <Button color="success" shape="round" onClick={handleHelpRequested}>
          ?
        </Button>
      </div>
      <div className="keyboard-wrapper">
        <MobileKeyboard keyboardRef={keyboardRef} buttons={buttons} highlight={highlight} onChange={handleInput} />
      </div>
      <div className="ion-padding ion-text-center">
        <Button onClick={onValidate} disabled={text.length > fullInput.length}>
          Validate
        </Button>
      </div>
    </>
  );
};

export default NormalQuestion;

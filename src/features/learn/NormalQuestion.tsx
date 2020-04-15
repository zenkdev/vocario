import React, { useCallback, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import Keyboard from 'react-simple-keyboard';

import { Dispatch } from '@reduxjs/toolkit';

import Button from '../../components/Button';
import { getFullInput, isLetter, isValidAnswer, unusedChars } from '../../utils';
import * as actions from './learnSlice';
import MobileKeyboard from './MobileKeyboard';

type NormalQuestionOwnProps = {
  text: string;
  input: string;
  keyboardRef: (r: Keyboard) => void;
  onChange: (value: string) => void;
};

const mapDispatchToProps = (dispatch: Dispatch, { text, input }: NormalQuestionOwnProps) => {
  return {
    handleClick: () => dispatch(actions.setAnswer(isValidAnswer(text, getFullInput(input, text))) as any),
  };
};

type NormalQuestionProps = NormalQuestionOwnProps & ReturnType<typeof mapDispatchToProps>;

const NormalQuestion: React.FC<NormalQuestionProps> = ({ text, input, keyboardRef, onChange, handleClick }) => {
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
  const handleKeyPress = useCallback(
    (button: string) => {
      if (button === '{help}') {
        let i = fullInput.length;
        while (i < text.length) {
          const char = text.charAt(i);
          if (isLetter(char)) {
            setHighlight(char);
            break;
          }
          i += 1;
        }
      }
    },
    [text, fullInput],
  );

  return (
    <>
      <div className="keyboard-wrapper">
        <MobileKeyboard
          keyboardRef={keyboardRef}
          buttons={buttons}
          highlight={highlight}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="ion-padding ion-text-center">
        <Button onClick={handleClick} disabled={text.length > fullInput.length}>
          Validate
        </Button>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(NormalQuestion);

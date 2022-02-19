import React, { useCallback, useMemo, useState } from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from '../../app/store';
import { Button } from '../../components';
import { isValidAnswer, stringUtils } from '../../utils';
import * as actions from './learnSlice';
import MobileKeyboard from './MobileKeyboard';

const { getFullInput, isLetter, unusedChars } = stringUtils;

type NormalQuestionOwnProps = {
  text: string;
  input: string;
  keyboardRef: (ref: any) => void;
  onChange: (value: string) => void;
};

const mapDispatchToProps = (dispatch: AppDispatch, { text, input }: NormalQuestionOwnProps) => ({
  handleClick: () => {
    const isValid = isValidAnswer(text, getFullInput(input, text));
    dispatch(actions.updateWord(isValid));
  },
});

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

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import 'react-simple-keyboard/build/css/index.css';

import React from 'react';
import Keyboard from 'react-simple-keyboard';

const keyboardConfig = {
  layout: {
    default: ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m {backspace}'],
  },
  display: {
    '{backspace}': '⌫',
  },
};
interface KeyboardButtonAttributes {
  attribute: string;
  value: string;
  buttons: string;
}

interface KeyboardButtonTheme {
  class: string;
  buttons: string;
}

interface MobileKeyboardProps {
  keyboardRef: (r: Keyboard) => void;
  buttonAttributes?: KeyboardButtonAttributes[];
  buttonTheme?: KeyboardButtonTheme[];
  maxLength?: any;
  onChange?: (input: string) => any;
}

const MobileKeyboard: React.FC<MobileKeyboardProps> = ({ keyboardRef, buttonAttributes, buttonTheme, maxLength, onChange }) => {
  return (
    <Keyboard
      {...keyboardConfig}
      keyboardRef={keyboardRef}
      buttonAttributes={buttonAttributes}
      buttonTheme={buttonTheme}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

export default MobileKeyboard;

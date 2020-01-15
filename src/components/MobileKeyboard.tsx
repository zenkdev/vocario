/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import 'react-simple-keyboard/build/css/index.css';

import React, { useMemo } from 'react';
import Keyboard from 'react-simple-keyboard';

const keyboardConfig = {
  layout: {
    default: ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m {backspace}'],
  },
  display: {
    '{backspace}': '⌫',
  },
};

interface MobileKeyboardProps {
  keyboardRef: (r: Keyboard) => void;
  buttons?: string[];
  inputPattern?: any;
  onChange?: (input: string) => any;
}

const MobileKeyboard: React.FC<MobileKeyboardProps> = ({ keyboardRef, buttons, inputPattern, onChange }) => {
  const buttonTheme = useMemo(() => (buttons && buttons.length ? [{ class: 'hg-enabled', buttons: buttons.join(' ') }] : undefined), [
    buttons,
  ]);

  return (
    <Keyboard
      {...keyboardConfig}
      disableButtonHold
      keyboardRef={keyboardRef}
      buttonTheme={buttonTheme}
      inputPattern={inputPattern}
      onChange={onChange}
    />
  );
};

export default MobileKeyboard;

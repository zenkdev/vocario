import 'react-simple-keyboard/build/css/index.css';

import Keyboard from 'react-simple-keyboard';
import React, { useMemo } from 'react';

const keyboardConfig = {
  layout: {
    default: ['q w e r t y u i o p', 'a s d f g h j k l', '{help} z x c v b n m {backspace}'],
  },
  display: {
    '{help}': '?',
    '{backspace}': '⌫',
  },
};

interface KeyboardButtonTheme {
  class: string;
  buttons: string;
}

interface MobileKeyboardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  keyboardRef: (ref: any) => void;
  buttons?: string[];
  highlight?: string;
  inputPattern?: RegExp;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  maxLength?: any;
  onChange?: (input: string) => void;
  onKeyPress?: (button: string) => void;
}

const MobileKeyboard: React.FC<MobileKeyboardProps> = ({ keyboardRef, buttons, highlight, ...rest }) => {
  const buttonTheme = useMemo(() => {
    const arr: KeyboardButtonTheme[] = [{ class: 'hg-help', buttons: '{help}' }];
    if (buttons && buttons.length) {
      arr.push({ class: 'hg-enabled', buttons: buttons.join(' ') });
    }
    if (highlight) {
      arr.push({ class: 'hg-highlight', buttons: highlight });
    }
    return arr;
  }, [buttons, highlight]);

  return <Keyboard {...keyboardConfig} disableButtonHold keyboardRef={keyboardRef} buttonTheme={buttonTheme} {...rest} />;
};

export default MobileKeyboard;

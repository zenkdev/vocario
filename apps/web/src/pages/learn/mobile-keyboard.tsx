import 'react-simple-keyboard/build/css/index.css';

import Keyboard from 'react-simple-keyboard';
import Paper from '@mui/material/Paper';
import React, { useMemo } from 'react';
import { styled } from '@mui/material/styles';

const keyboardConfig = {
  layout: {
    default: ['q w e r t y u i o p', 'a s d f g h j k l', '{help} z x c v b n m {backspace}'],
  },
  display: {
    '{help}': '?',
    '{backspace}': '⌫',
  },
};

const KeyboardWrapper = styled(Paper)({
  '.hg-layout-default': {
    '.hg-button': {
      '&.hg-enabled': {
        backgroundColor: 'var(--mui-palette-primary-main)',
        color: 'var(--mui-palette-primary-contrastText)',
        boxShadow: `var(--mui-shadows-2, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))`,
        cursor: 'pointer',
        pointerEvents: 'unset',
        '&:hover': {
          backgroundColor: 'var(--mui-palette-primary-dark)',
          boxShadow: `var(--mui-shadows-4, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))`,
        },
        '&:active': {
          boxShadow:
            'var(--mui-shadows-8, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))',
        },
      },
      '&.hg-help': {
        backgroundColor: 'var(--mui-palette-success-main)',
        color: 'var(--mui-palette-success-contrastText)',
        cursor: 'pointer',
        pointerEvents: 'unset',
        '&:hover': {
          backgroundColor: 'var(--mui-palette-success-dark)',
        },
      },
      '&.hg-highlight': {
        boxShadow: '0px 0px 40px 5px var(--mui-palette-warning-main)',
        zIndex: '1',
      },
    },
  },
  '.hg-theme-default': {
    fontFamily: 'monospace',
    backgroundColor: 'var(--mui-palette-background-default)',
    '.hg-button': {
      background: 'unset',
      boxShadow: 'none',
      // boxShadow:
      //   'var(--mui-shadows-2, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))',
      border: '0 none',
      // border: '1px solid currentColor',
      borderRadius: 'var(--mui-shape-borderRadius)',
      cursor: 'unset',
      height: '2.5rem',
      pointerEvents: 'none',
      transition:
        'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&.hg-activeButton': {
        background: 'unset',
      },
    },
  },
});

interface KeyboardButtonTheme {
  class: string;
  buttons: string;
}

interface MobileKeyboardProps {
  buttons?: string[];
  highlight?: string;
  inputPattern?: RegExp;
  onChange?: (input: string) => void;
  onKeyPress?: (button: string) => void;
}

function MobileKeyboard({ buttons, highlight, ...rest }: MobileKeyboardProps) {
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

  return (
    <KeyboardWrapper elevation={2}>
      <Keyboard {...keyboardConfig} disableButtonHold buttonTheme={buttonTheme} {...rest} />
    </KeyboardWrapper>
  );
}

export default MobileKeyboard;

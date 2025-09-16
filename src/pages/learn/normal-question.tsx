import * as actions from '@/lib/learn-slice';
import Stack from '@mui/material/Stack';
import { Button } from '@/shared/ui';
import { isValidAnswer, stringUtils } from '@/shared/lib';
import { useAppDispatch } from '@/lib/hooks';
import { useCallback, useMemo, useState } from 'react';

import MobileKeyboard from './mobile-keyboard';

const { getFullInput, isLetter, unusedChars } = stringUtils;

interface NormalQuestionProps {
  text: string;
  input: string;
  onChange: (value: string) => void;
}

const NormalQuestion = ({ text, input, onChange }: NormalQuestionProps) => {
  const dispatch = useAppDispatch();
  const [highlight, setHighlight] = useState<string>();
  const fullInput = useMemo(() => getFullInput(input, text), [input, text]);
  const buttons = useMemo(() => ['{backspace}', ...unusedChars(input, text)], [input, text]);
  const handleClick = useCallback(() => {
    const isValid = isValidAnswer(text, getFullInput(input, text));
    dispatch(actions.updateWord(isValid));
  }, [dispatch, input, text]);

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
    <Stack py={1} gap={2}>
      <MobileKeyboard buttons={buttons} highlight={highlight} onChange={handleInput} onKeyPress={handleKeyPress} />
      <Stack alignItems="center">
        <Button variant="outlined" onClick={handleClick} disabled={text.length > fullInput.length}>
          Validate
        </Button>
      </Stack>
    </Stack>
  );
};

export default NormalQuestion;

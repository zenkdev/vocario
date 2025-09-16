import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { stringUtils } from '@/shared/lib';

const { isLetter, isWhiteSpace, toCharArray, getFullInput } = stringUtils;

const sx = {
  box: {
    '&::after': {
      content: '""',
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      marginTop: 1,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: 'var(--mui-palette-grey-500)',
      borderRadius: 0.5,
    },
  },
  typography: {
    backgroundColor: 'var(--mui-palette-grey-500)',
    borderRadius: 1,
    padding: 0.5,
  },
};

interface StyledInputProps {
  input: string;
  text: string;
}

function StyledInput({ input, text }: StyledInputProps) {
  const fullInput = useMemo(() => getFullInput(input, text), [input, text]);

  return (
    <Stack direction="row" gap={1} flexWrap="nowrap">
      {toCharArray(text).map((ch, index) => (
        <Box key={`ch${index}`} flexGrow="unset" sx={isLetter(ch) ? sx.box : undefined}>
          <Typography variant="monospace" sx={isLetter(ch) ? sx.typography : undefined}>
            {displayChar(ch, index, fullInput)}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

function displayChar(ch: string, index: number, fullInput: string) {
  if (isLetter(ch)) {
    return fullInput[index] || '?';
  }
  return isWhiteSpace(ch) ? null : ch;
}

export default StyledInput;

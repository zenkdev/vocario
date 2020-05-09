import React, { useMemo } from 'react';

/* eslint-disable react/no-array-index-key */
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import { stringUtils } from '../../utils';

const { isLetter, isWhiteSpace, toCharArray, getFullInput } = stringUtils;

function displayChar(ch: string, index: number, fullInput: string) {
  if (isLetter(ch)) {
    return fullInput[index] || '?';
  }
  return isWhiteSpace(ch) ? null : ch;
}

interface StyledInputProps {
  input: string;
  text: string;
}

const StyledInput: React.FC<StyledInputProps> = ({ input, text }) => {
  const fullInput = useMemo(() => getFullInput(input, text), [input, text]);

  return (
    <IonGrid>
      <IonRow class="ion-justify-content-center">
        {toCharArray(text).map((ch, index) => (
          <IonCol key={`ch${index}`} className={`char-input${isLetter(ch) ? ' char-input-letter' : ''}`}>
            <div>{displayChar(ch, index, fullInput)}</div>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default StyledInput;

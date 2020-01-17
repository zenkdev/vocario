/* eslint-disable react/no-array-index-key */
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { useMemo } from 'react';

import { isLetter, isWhiteSpace, toCharArray, getFullInput } from '../utils';

function displayChar(ch: string, index: number, fullInput: string) {
  if (isLetter(ch)) {
    return fullInput[index] || '?';
  }
  return isWhiteSpace(ch) ? null : ch;
}

interface WordCardNormalProps {
  input: string;
  text: string;
}

const WordInput: React.FC<WordCardNormalProps> = ({ input, text }) => {
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

export default WordInput;

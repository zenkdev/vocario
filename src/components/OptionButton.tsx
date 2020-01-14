import React, { useCallback } from 'react';

import { IonButton } from '@ionic/react';

interface OptionButtonProps {
  option: string;
  onClick: (option: string) => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ option, onClick }) => {
  const handleClick = useCallback(() => onClick(option), [option, onClick]);
  return (
    <IonButton expand="block" fill="outline" onClick={handleClick}>
      {option}
    </IonButton>
  );
};

export default OptionButton;

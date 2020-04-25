/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';

import { IonButton } from '@ionic/react';

import { RootState } from '../app/rootReducer';

function size(fontSize: number) {
  if (fontSize < 0.9) return 'small';
  if (fontSize > 1.1) return 'large';
  return undefined;
}

interface ButtonProps {
  expand?: 'full' | 'block';
  color?: string;
  fill?: 'clear' | 'outline' | 'solid' | 'default';
  disabled?: boolean;
  shape?: 'round';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { fontSize } = useSelector((state: RootState) => state.app);

  return (
    <IonButton size={size(fontSize)} {...props}>
      {children}
    </IonButton>
  );
};

export default Button;

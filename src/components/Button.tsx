/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';

import { IonButton } from '@ionic/react';

import { RootState } from '../app/rootReducer';

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
  // eslint-disable-next-line no-nested-ternary
  const size = fontSize < 0.9 ? 'small' : fontSize > 1.1 ? 'large' : undefined;

  return (
    <IonButton size={size} {...props}>
      {children}
    </IonButton>
  );
};

export default Button;

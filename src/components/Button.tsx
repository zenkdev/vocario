/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren } from 'react';

import { IonButton } from '@ionic/react';

import { useAppSelector } from '../hooks';

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

const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  const { fontSize } = useAppSelector(state => state.app);

  return (
    <IonButton size={size(fontSize)} {...props}>
      {children}
    </IonButton>
  );
};

export default Button;

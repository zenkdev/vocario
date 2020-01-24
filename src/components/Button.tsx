/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useMemo } from 'react';

import { IonButton } from '@ionic/react';
import AppContext from '../AppContext';

interface ButtonProps {
  expand?: 'full' | 'block';
  color?: string;
  fill?: 'clear' | 'outline' | 'solid' | 'default';
  disabled?: boolean;
  shape?: 'round';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { currentUser } = useContext(AppContext);
  const size = useMemo(
    // eslint-disable-next-line no-nested-ternary
    () => (currentUser && currentUser.fontSize < 0.9 ? 'small' : currentUser && currentUser.fontSize > 1.1 ? 'large' : undefined),
    [currentUser],
  );
  return (
    <IonButton size={size} {...props}>
      {children}
    </IonButton>
  );
};

export default Button;

import React, { useCallback } from 'react';
import Button from '../../components/Button';

interface OptionButtonProps {
  option: string;
  onClick: (option: string) => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ option, onClick }) => {
  const handleClick = useCallback(() => onClick(option), [option, onClick]);
  return (
    <Button expand="block" fill="outline" onClick={handleClick}>
      {option}
    </Button>
  );
};

export default OptionButton;

import React from 'react';

import { OptionButton } from '.';

interface QuestionSimpleProps {
  options: string[];
  onClick: (value: string) => void;
}
const QuestionSimple: React.FC<QuestionSimpleProps> = ({ options, onClick }) => (
  <div className="ion-padding">
    {options.map(option => (
      <OptionButton key={option} option={option} onClick={onClick} />
    ))}
  </div>
);

export default QuestionSimple;

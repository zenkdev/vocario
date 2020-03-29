import React from 'react';
import OptionButton from './OptionButton';

interface SimpleQuestionProps {
  options: string[];
  onClick: (value: string) => void;
}

const SimpleQuestion: React.FC<SimpleQuestionProps> = ({ options, onClick }) => (
  <div className="ion-padding">
    {options.map(option => (
      <OptionButton key={option} option={option} onClick={onClick} />
    ))}
  </div>
);

export default SimpleQuestion;

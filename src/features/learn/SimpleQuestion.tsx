import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components';
import { isValidAnswer } from '../../utils';
import * as actions from './learnSlice';
import * as selectors from './selectors';

type OptionButtonProps = {
  option: string;
  onClick: (option: string) => void;
};

const OptionButton: React.FC<OptionButtonProps> = ({ option, onClick }) => {
  const handleClick = useCallback(() => onClick(option), [option, onClick]);
  return (
    <Button expand="block" fill="outline" onClick={handleClick}>
      {option}
    </Button>
  );
};

interface SimpleQuestionProps {
  text: string;
}

const SimpleQuestion: React.FC<SimpleQuestionProps> = ({ text }) => {
  const options = useSelector(selectors.selectOptions);
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (option: string) => {
      const isValid = isValidAnswer(text, option);
      dispatch(actions.updateWord(isValid));
    },
    [dispatch, text],
  );

  return (
    <div className="ion-padding">
      {options.map(option => (
        <OptionButton key={option} option={option} onClick={handleClick} />
      ))}
    </div>
  );
};

export default SimpleQuestion;

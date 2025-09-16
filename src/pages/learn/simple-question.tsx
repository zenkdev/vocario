import * as actions from '@/lib/learn-slice';
import * as selectors from '@/lib/learn-selectors';
import { Button } from '@/shared/ui';
import { isValidAnswer } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback } from 'react';

type OptionButtonProps = {
  option: string;
  onClick: (option: string) => void;
};

function OptionButton({ option, onClick }: OptionButtonProps) {
  const handleClick = useCallback(() => onClick(option), [option, onClick]);
  return <Button onClick={handleClick}>{option}</Button>;
}

interface SimpleQuestionProps {
  text: string;
}

function SimpleQuestion({ text }: SimpleQuestionProps) {
  const dispatch = useAppDispatch();
  const options = useAppSelector(selectors.selectOptions);
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
}

export default SimpleQuestion;

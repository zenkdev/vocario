import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { Dispatch } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import Button from '../../components/Button';
import { isValidAnswer } from '../../utils/stringUtils';
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

type SimpleQuestionOwnProps = {
  text: string;
};

const mapStateToProps = (state: RootState) => ({
  options: selectors.selectOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch, { text }: SimpleQuestionOwnProps) => ({
  handleClick: (option: string) => dispatch(actions.setAnswer(isValidAnswer(text, option)) as any),
});

type SimpleQuestionProps = SimpleQuestionOwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const SimpleQuestion: React.FC<SimpleQuestionProps> = ({ options, handleClick }) => (
  <div className="ion-padding">
    {options.map(option => (
      <OptionButton key={option} option={option} onClick={handleClick} />
    ))}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(SimpleQuestion);

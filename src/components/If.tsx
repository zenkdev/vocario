import React from 'react';

interface IfProps {
  condition?: boolean;
  then?: JSX.Element | null;
  else?: JSX.Element | null;
}

const If: React.FC<IfProps> = props => {
  const condition = props.condition || false;
  const positive = props.then || null;
  const negative = props.else || null;

  return condition ? positive : negative;
};

export default If;

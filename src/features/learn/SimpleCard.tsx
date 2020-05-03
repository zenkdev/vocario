import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import If from '../../components/If';
import { modelHelper, Word } from '../../models';
import AnswerResult from './AnswerResult';
import SimpleQuestion from './SimpleQuestion';

type SimpleCardProps = {
  word: Word;
};

const SimpleCard: React.FC<SimpleCardProps> = ({ word }) => {
  const { translation, category } = word;
  const answer = useSelector((state: RootState) => state.learn.answer);
  const title = useMemo(() => modelHelper.getText(word), [word]);
  const transcription = useMemo(() => modelHelper.getTranscription(word), [word]);

  return (
    <section className="ion-text-center">
      <h1 className="large-text">{title}</h1>
      <div className="small-text">{transcription}</div>
      {category && <div className="ion-padding small-text">{category}</div>}
      <If condition={!answer} then={<SimpleQuestion text={translation} />} else={<AnswerResult text={translation} />} />
    </section>
  );
};

export default SimpleCard;

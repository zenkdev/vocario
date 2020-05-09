import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import { If } from '../../components';
import { Word } from '../../models';
import { wordUtils } from '../../utils';
import AnswerResult from './AnswerResult';
import SimpleQuestion from './SimpleQuestion';

const { getText, getTranscription } = wordUtils;

type SimpleCardProps = {
  word: Word;
};

const SimpleCard: React.FC<SimpleCardProps> = ({ word }) => {
  const { translation, category } = word;
  const answer = useSelector((state: RootState) => state.learn.answer);
  const title = useMemo(() => getText(word), [word]);
  const transcription = useMemo(() => getTranscription(word), [word]);

  return (
    <section>
      <h1 className="large-text ion-text-center">{title}</h1>
      <div className="small-text ion-text-center">{transcription}</div>
      {category && <div className="ion-padding small-text ion-text-center">{category}</div>}
      <If condition={!answer} then={<SimpleQuestion text={translation} />} else={<AnswerResult text={translation} />} />
    </section>
  );
};

export default SimpleCard;

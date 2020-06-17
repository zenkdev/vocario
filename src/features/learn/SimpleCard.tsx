import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import { If } from '../../components';
import { Word } from '../../models';
import { wordUtils, isEmpty } from '../../utils';
import AnswerResult from './AnswerResult';
import SimpleQuestion from './SimpleQuestion';
import Title from './Title';

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
      <Title text={title} isNew={isEmpty(word.occurs)} />
      <div className="small-text ion-text-center">{transcription}</div>
      {category && <div className="ion-padding small-text ion-text-center">{category}</div>}
      <If condition={!answer} then={<SimpleQuestion text={translation} />} else={<AnswerResult text={translation} />} />
    </section>
  );
};

export default SimpleCard;

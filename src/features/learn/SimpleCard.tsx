import React, { useMemo } from 'react';

import { If } from '../../components';
import { useAppSelector } from '../../hooks';
import { Word } from '../../models';
import { isEmpty, wordUtils } from '../../utils';
import AnswerResult from './AnswerResult';
import SimpleQuestion from './SimpleQuestion';
import Title from './Title';

const { getText, getTranscription } = wordUtils;

interface SimpleCardProps {
  word: Word;
}

const SimpleCard = ({ word }: SimpleCardProps) => {
  const { translation, category } = word;
  const answer = useAppSelector(state => state.learn.answer);
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

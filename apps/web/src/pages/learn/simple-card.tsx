import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import type { Word } from '@/shared/model';
import { isEmpty, wordUtils } from '@/shared/lib';
import { useAppSelector } from '@/lib/hooks';
import { useMemo } from 'react';

import AnswerResult from './answer-result';
import SimpleQuestion from './simple-question';
import Title from './styled-title';

const { getText, getTranscription } = wordUtils;

interface SimpleCardProps {
  word: Word;
}

function SimpleCard({ word }: SimpleCardProps) {
  const { translation, category } = word;
  const answer = useAppSelector(state => state.learn.answer);
  const title = useMemo(() => getText(word), [word]);
  const transcription = useMemo(() => getTranscription(word), [word]);

  return (
    <Card component="section">
      <CardHeader title={<Title text={title} isNew={isEmpty(word.occurs)} />} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle1">{transcription}</Typography>
        {category && <Typography variant="subtitle1">{category}</Typography>}
        {answer ? <AnswerResult text={translation} /> : <SimpleQuestion text={translation} />}
      </CardContent>
    </Card>
  );
}

export default SimpleCard;

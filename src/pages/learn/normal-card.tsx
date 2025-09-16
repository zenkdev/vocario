import 'react-simple-keyboard/build/css/index.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import type { Word } from '@/shared/model';
import { isEmpty, wordUtils } from '@/shared/lib';
import { useAppSelector } from '@/lib/hooks';
import { useMemo, useState } from 'react';

import AnswerResult from './answer-result';
import NormalQuestion from './normal-question';
import StyledInput from './styled-input';
import Title from './styled-title';

const { getText, getTextWithLang, getTranscription } = wordUtils;

interface NormalCardProps {
  word: Word;
}

function NormalCard({ word }: NormalCardProps) {
  const { translation: title, category } = word;
  const [input, setInput] = useState('');
  const answer = useAppSelector(state => state.learn.answer);
  const text = useMemo(() => getText(word), [word]);
  const textWithLang = useMemo(() => getTextWithLang(word), [word]);
  const transcription = useMemo(() => getTranscription(word), [word]);

  return (
    <Card component="section">
      <CardHeader title={<Title text={title} isNew={isEmpty(word.occurs)} />} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {category && <Typography variant="subtitle1">{category}</Typography>}
        <StyledInput input={input} text={text} />
        {answer ? (
          <AnswerResult text={textWithLang} smallText={transcription} />
        ) : (
          <NormalQuestion text={text} input={input} onChange={setInput} />
        )}
      </CardContent>
    </Card>
  );
}

export default NormalCard;

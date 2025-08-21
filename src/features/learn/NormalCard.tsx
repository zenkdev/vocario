import 'react-simple-keyboard/build/css/index.css';

import { useEffect, useMemo, useState } from 'react';

import AnswerResult from './AnswerResult';
import NormalQuestion from './NormalQuestion';
import StyledInput from './StyledInput';
import Title from './Title';
import { If } from '../../components';
import type { Word } from '../../models';
import { isEmpty, wordUtils } from '../../utils';
import { useAppSelector } from '../../hooks';

const { getText, getTextWithLang, getTranscription } = wordUtils;

interface NormalCardProps {
  word: Word;
}

const NormalCard = ({ word }: NormalCardProps) => {
  const { translation: title, category } = word;
  const [input, setInput] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [keyboardRef, setKeyboardRef] = useState<any>();
  const answer = useAppSelector(state => state.learn.answer);
  const text = useMemo(() => getText(word), [word]);
  const textWithLang = useMemo(() => getTextWithLang(word), [word]);
  const transcription = useMemo(() => getTranscription(word), [word]);

  useEffect(() => {
    if (answer === null) {
      setInput('');
      if (keyboardRef) {
        keyboardRef.clearInput();
      }
    }
  }, [answer, keyboardRef]);

  return (
    <section>
      <Title text={title} isNew={isEmpty(word.occurs)} />
      {category && <div className="ion-padding small-text ion-text-center">{category}</div>}
      <StyledInput input={input} text={text} />
      <If
        condition={!answer}
        then={<NormalQuestion text={text} input={input} keyboardRef={setKeyboardRef} onChange={setInput} />}
        else={<AnswerResult text={textWithLang} smallText={transcription} />}
      />
    </section>
  );
};

export default NormalCard;

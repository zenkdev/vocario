import 'react-simple-keyboard/build/css/index.css';

import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Keyboard from 'react-simple-keyboard';

import { RootState } from '../../app/rootReducer';
import If from '../../components/If';
import { modelHelper, Word } from '../../models';
import AnswerResult from './AnswerResult';
import NormalQuestion from './NormalQuestion';
import StyledInput from './StyledInput';

type NormalCardProps = {
  word: Word;
};

const NormalCard: React.FC<NormalCardProps> = ({ word }) => {
  const { translation: title, category } = word;
  const [input, setInput] = useState('');
  const [keyboardRef, setKeyboardRef] = useState<Keyboard>();
  const answer = useSelector((state: RootState) => state.learn.answer);
  const text = useMemo(() => modelHelper.getText(word), [word]);
  const textWithLang = useMemo(() => modelHelper.getTextWithLang(word), [word]);
  const transcription = useMemo(() => modelHelper.getTranscription(word), [word]);

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
      <h1 className="large-text ion-text-center">{title}</h1>
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

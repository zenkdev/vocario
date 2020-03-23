import formatISO from 'date-fns/formatISO';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

import AppContext from '../AppContext';
import { Congratulations, NormalCard, SimpleCard } from '../components';
import { useDictionary, useUpdateStatistics } from '../hooks';
import useAudio from '../hooks/useAudio';
import { Dictionary, modelHelper, Word } from '../models';
import { localStoreManager, toastService } from '../services';
import { NEXT_WORD_DATA_KEY_PREFIX } from '../services/LocalStoreManager';
import { percent, randomNumber } from '../utils';

const getWordIndex = (id: string) => localStoreManager.getDataObject<number>(NEXT_WORD_DATA_KEY_PREFIX + id);
const setWordIndex = (id: string, value: number) => localStoreManager.savePermanentData(NEXT_WORD_DATA_KEY_PREFIX + id, value);
const delWordIndex = (id: string) => localStoreManager.deleteData(NEXT_WORD_DATA_KEY_PREFIX + id);

type LearnLocationState = {
  id: string;
  title: string;
};

export const LearnContext = React.createContext({
  playing: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

const Learn: React.FC<RouteComponentProps<LearnLocationState>> = ({ location: { state } }) => {
  const [title, setTitle] = useState('Learn');
  const [word, setWord] = useState<Word>();
  const { toggle, playing, setUrl } = useAudio();

  const nextWord = useCallback(
    (dct: Dictionary) => {
      const words = modelHelper.wordsToLearn(dct);
      if (words.length) {
        let index = getWordIndex(dct.id);
        if (!index || !words[index]) {
          index = randomNumber(0, words.length - 1);
          setWordIndex(dct.id, index);
        }
        const newWord = words[index];
        setUrl(modelHelper.audioUrl(newWord));
        setWord(newWord);
      } else {
        delWordIndex(dct.id);
        setWord(undefined);
      }
    },
    [setUrl],
  );

  const { simpleMode } = useContext(AppContext);
  const [{ isLoading, data }] = useDictionary(state && state.id, { onCompleted: nextWord, onError: toastService.showError });
  const { completed, total, more } = modelHelper.dailyStatistics(data);

  const options = useMemo(() => {
    if (!data || !word) {
      return [];
    }
    const arr: string[] = [word.translation];
    const numOptions = Math.min(3, data.words.length || 0);
    while (arr.length < numOptions) {
      const rnd = randomNumber(0, data.words.length - 1);
      const opt = data.words[rnd];
      if (opt && !arr.includes(opt.translation)) {
        arr.push(opt.translation);
      }
    }
    return arr.sort();
  }, [data, word]);

  const [counter, setCounter] = useState(0);
  const onCompleted = useCallback(
    (dct: Dictionary) => {
      delWordIndex(dct.id);
      nextWord(dct);
      setCounter(value => value + 1);
    },
    [nextWord],
  );
  const updateStatistics = useUpdateStatistics({ onCompleted, onError: toastService.showError });
  const handleNext = useCallback(
    (valid: boolean) => {
      if (!data || !word) {
        return;
      }
      const dateStr = formatISO(Date.now());
      if (!word.occurs) {
        word.occurs = [];
      }
      if (!word.occurs.length) {
        word.occurs.push(dateStr);
      }
      if (valid) {
        word.occurs.push(dateStr);
      }
      if (modelHelper.isCompleted(word)) {
        data.wordsCompleted = Math.min(data.wordsCompleted + 1, data.wordsCount);
      }
      updateStatistics(data, word);
    },
    [data, word, updateStatistics],
  );

  useEffect(() => {
    if (state && state.title) {
      setTitle(state.title);
    }
  }, [state]);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {data && <IonProgressBar value={percent(completed, total)} />}
        <LearnContext.Provider value={{ playing, toggle }}>
          {word && !simpleMode && <NormalCard onNext={handleNext} word={word} counter={counter} />}
          {word && simpleMode && <SimpleCard onNext={handleNext} word={word} counter={counter} options={options} />}
        </LearnContext.Provider>
        {!isLoading && !word && <Congratulations more={more} />}
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Learn;

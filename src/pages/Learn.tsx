import formatISO from 'date-fns/formatISO';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

import AppContext from '../AppContext';
import { Congratulations, NormalCard, SimpleCard } from '../components';
import { useDictionary } from '../hooks';
import { Dictionary, modelHelper, Word } from '../models';
import { localStoreManager, statisticService, toastService } from '../services';
import { NEXT_WORD_DATA_KEY_PREFIX } from '../services/LocalStoreManager';
import { percent, randomNumber } from '../utils';

const audioUrl = (word?: Word): string | undefined => word && `https://us-central1-vocabionic.cloudfunctions.net/synthesize/${word.id}`;
const getWordIndex = (id: string) => localStoreManager.getDataObject<number>(NEXT_WORD_DATA_KEY_PREFIX + id);
const setWordIndex = (id: string, value: number) => localStoreManager.savePermanentData(NEXT_WORD_DATA_KEY_PREFIX + id, value);
const delWordIndex = (id: string) => localStoreManager.deleteData(NEXT_WORD_DATA_KEY_PREFIX + id);

type LearnLocationState = {
  id: string;
  title: string;
};

const Learn: React.FC<RouteComponentProps<LearnLocationState>> = ({ location: { state } }) => {
  const [title, setTitle] = useState('Learn');
  const [word, setWord] = useState<Word>();
  const url = audioUrl(word);

  const nextWord = useCallback((dct: Dictionary) => {
    const words = modelHelper.wordsToLearn(dct);
    if (words.length) {
      const prev = getWordIndex(dct.id);
      if (prev && words[prev]) {
        setWord(words[prev]);
      } else {
        const rnd = randomNumber(0, words.length - 1);
        setWord(words[rnd]);
        setWordIndex(dct.id, rnd);
      }
    } else {
      setWord(undefined);
      delWordIndex(dct.id);
    }
  }, []);

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

  const handleNext = useCallback(
    async (valid: boolean) => {
      if (!data || !word) {
        return;
      }

      try {
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

        await statisticService.updateFromWord(data, word);
        localStoreManager.deleteData(NEXT_WORD_DATA_KEY_PREFIX + data.id);
        nextWord(data);
      } catch (error) {
        toastService.showError(error);
      }
    },
    [data, word],
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
        {word && !simpleMode && <NormalCard onNext={handleNext} word={word} audioUrl={url} />}
        {word && simpleMode && <SimpleCard onNext={handleNext} word={word} audioUrl={url} options={options} />}
        {!isLoading && !word && <Congratulations more={more} />}
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Learn;

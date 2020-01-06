import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

import { Congratulations, SimpleWordCard } from '../components';
import { Dictionary, Word } from '../models';
import { dictionaryService, statisticService, toastService } from '../services';
import { percent, randomNumber, isToday as isTodayDate } from '../utils';

const isNew = (value: Word) => value.count == null;
const isCompleted = (value: Word) => value.count != null && value.count >= 3;
const isToday = (value: Word) => value.firstOccur && isTodayDate(new Date(Date.parse(value.firstOccur)));

interface LearnLocationState {
  id: string;
  title: string;
}

const Learn: React.FC<RouteComponentProps<LearnLocationState>> = ({ location }) => {
  const [title, setTitle] = useState('Learn');
  const [showLoading, setShowLoading] = useState(true);
  const [dictionary, setDictionary] = useState<Dictionary>();
  const [word, setWord] = useState<Word>();

  function nextWord(dct: Dictionary | undefined) {
    if (dct) {
      const wordsToday = dct.words.reduce((acc, cur) => acc + (isToday(cur) ? 1 : 0), 0);
      const words = dct.words.filter(cur => (wordsToday < 20 && isNew(cur)) || (!isNew(cur) && !isCompleted(cur)));
      if (words.length) {
        const rnd = randomNumber(0, words.length - 1);
        const next = words[rnd];
        // eslint-disable-next-line no-console
        console.log({ wordsToday, wordsCount: words.length, next, isNewWord: isNew(next) });
        setWord(next);
        return;
      }
    }

    setWord(undefined);
  }

  const getOptions = useCallback(() => {
    if (!dictionary || !word) {
      return [];
    }
    const options: string[] = [word.translation];
    const numOptions = Math.min(3, dictionary.words.length || 0);
    while (options.length < numOptions) {
      const rnd = randomNumber(0, dictionary.totalWords - 1);
      const opt = dictionary.words[rnd];
      if (opt && !options.includes(opt.translation)) {
        options.push(opt.translation);
      }
    }
    return options.sort();
  }, [dictionary, word]);

  const handleNext = useCallback(
    async (valid: boolean) => {
      if (!dictionary || !word) {
        return;
      }

      try {
        if (isNew(word)) {
          word.firstOccur = new Date().toISOString();
          dictionary.wordsLearned += 1;
        }
        word.count = (word.count || 0) + (valid ? 1 : 0);
        await statisticService.updateFromWord(dictionary, word);
        nextWord(dictionary);
      } catch (error) {
        toastService.showError(error);
      }
    },
    [dictionary, word],
  );

  useEffect(() => {
    if (location.state && location.state.title) {
      setTitle(location.state.title);
    }
    if (location.state && location.state.id) {
      dictionaryService
        .getDictionary(location.state.id)
        .then(data => {
          setShowLoading(false);
          setDictionary(data);
          nextWord(data);
        })
        .catch(error => {
          setShowLoading(false);
          toastService.showError(error);
        });
    }
  }, [location.state]);

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
        {dictionary && <IonProgressBar value={percent(dictionary.wordsLearned, dictionary.totalWords)} />}
        {/* <WordCard validate={handleValidate} value={word} /> */}
        {word && <SimpleWordCard onNext={handleNext} word={word} options={getOptions()} />}
        {!showLoading && !word && <Congratulations />}
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Learn;

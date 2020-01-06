import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

import { SimpleWordCard } from '../components';
import { Dictionary, Word } from '../models';
import { dictionaryService, statisticService, toastService } from '../services';
import { percent, randomNumber } from '../utils';

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
    if (dct && dct.totalWords) {
      let next: Word | undefined;
      while (!next) {
        const rnd = randomNumber(0, dct.totalWords - 1);
        next = dct.words[rnd];
      }
      setWord(next);
    } else {
      setWord(undefined);
    }
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
        // new word
        if (word.count == null) {
          word.count = 0;
          dictionary.wordsLearned += 1;
        }
        const justLearned = valid && word.count === 0;
        if (valid) {
          word.count += 1;
        }
        await statisticService.updateFromWord(dictionary, word);
        if (justLearned) {
          toastService.showInfo(`Words learned ${dictionary.wordsLearned} of ${dictionary.totalWords}.`, 1000);
        }
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
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Learn;

import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { WordCard } from '../components';
import { Dictionary, Word } from '../models';
import { dictionaryService, toastService } from '../services';

/**
 * generate a random integer between min and max
 * @param {Number} min
 * @param {Number} max
 * @return {Number} random generated integer
 */
function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface LearnLocationState {
  id: string;
  title: string;
}

const Learn: React.FC = () => {
  const history = useHistory<LearnLocationState>();
  const [title, setTitle] = useState('Learn');
  const [showLoading, setShowLoading] = useState(true);
  const [dictionary, setDictionary] = useState<Dictionary>();
  const [word, setWord] = useState<Word>();

  function newWord(dct: Dictionary | undefined) {
    if (dct && dct.words && dct.totalWords) {
      const rnd = dct.totalWords > 1 ? randomNumber(0, dct.totalWords - 1) : 0;
      setWord(dct.words[rnd]);
    } else {
      setWord(undefined);
    }
  }

  const handleValidate = useCallback(
    async (valid: boolean) => {
      if (!dictionary || !word) {
        return;
      }

      try {
        await dictionaryService.updateDictionaryFromWord(dictionary, word, valid);
        const justLearned = valid && word.count === word.errors;
        dictionary.wordsLearned += justLearned ? 1 : 0;
        if (dictionary.wordsLearned > dictionary.totalWords) {
          dictionary.wordsLearned = dictionary.totalWords;
        }
        word.count += 1;
        word.errors += valid ? 0 : 1;
        if (valid) {
          newWord(dictionary);
          if (justLearned) {
            toastService.showInfo(`Words learned ${dictionary.wordsLearned} of ${dictionary.totalWords}.`, 1000);
          }
        }
      } catch (error) {
        toastService.showError(error);
      }
    },
    [dictionary, word],
  );

  useEffect(() => {
    if (history.location.state && history.location.state.title) {
      setTitle(history.location.state.title);
    }
    if (history.location.state && history.location.state.id) {
      dictionaryService
        .getDictionary(history.location.state.id)
        .then(data => {
          setShowLoading(false);
          setDictionary(data);
          newWord(data);
        })
        .catch(error => {
          setShowLoading(false);
          toastService.showError(error);
        });
    }
  }, [history.location.state]);

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
        <WordCard validate={handleValidate} value={word} />
        <div className="ion-padding">
          <p>{`${dictionary?.wordsLearned} / ${dictionary?.totalWords}`}</p>
        </div>
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Learn;

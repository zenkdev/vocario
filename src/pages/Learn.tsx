import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { WordCard } from '../components';
import { Dictionary, Word } from '../models';
import { firebaseInstance } from '../services';

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
    (valid: boolean) => {
      if (!dictionary || !word) {
        return;
      }

      firebaseInstance.updateDictionaryFromWord(dictionary, word, valid).subscribe(() => {
        const justLearned = valid && word.count === word.errors;
        dictionary.wordsLearned += justLearned ? 1 : 0;
        if (dictionary.wordsLearned > dictionary.totalWords) {
          dictionary.wordsLearned = dictionary.totalWords;
        }
        word.count++;
        word.errors += valid ? 0 : 1;
        if (valid) {
          newWord(dictionary);
          if (justLearned) {
            // const toast = await this.toastCtrl.create({
            //   message: `Words learned ${dictionary.wordsLearned} of ${dictionary.totalWords}.`,
            //   duration: 1000
            // });
            // await toast.present();
            alert(`Words learned ${dictionary.wordsLearned} of ${dictionary.totalWords}.`);
          }
        }
      });
    },
    [dictionary, word],
  );

  useEffect(() => {
    if (history.location.state && history.location.state.title) {
      setTitle(history.location.state.title);
    }
    if (history.location.state && history.location.state.id) {
      firebaseInstance.getDictionary(history.location.state.id).subscribe(data => {
        setDictionary(data);
        newWord(data);
      });
    }
  }, [history.location.state]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <WordCard validate={handleValidate} value={word} />
        <div>
          <p>
            {dictionary?.wordsLearned} / {dictionary?.totalWords}
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Learn;

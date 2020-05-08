import firebase from 'firebase/app';

import { createTextArray, Text } from './Text';
import defaultTo from '../utils/defaultTo';

type DataSnapshot = firebase.database.DataSnapshot;

export type Word = {
  id: string;
  texts: Text[];
  translation: string;
  category: string;
  partOfSpeech: string;
  occurs?: string[];
  errors?: string[];
};

export function createWord(payload: DataSnapshot): Word {
  const { translation, category, partOfSpeech, ...rest } = payload.val();
  const texts = createTextArray(rest);
  return {
    id: defaultTo(payload.key, ''),
    translation: defaultTo(translation, ''),
    category: defaultTo(category, ''),
    partOfSpeech: defaultTo(partOfSpeech, ''),
    occurs: [],
    texts,
  };
}

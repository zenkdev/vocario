import addDays from 'date-fns/addDays';
import formatISO from 'date-fns/formatISO';
import parseISO from 'date-fns/parseISO';
import firebase from 'firebase/app';

import { createTextArray, Text } from './Text';
import UserProfile from './UserProfile';
import Word from './Word';

export function fromNextOccur(value: string | undefined, count: number) {
  if (!value) {
    return formatISO(addDays(new Date(), -1));
  }
  switch (count) {
    case 1:
      return formatISO(addDays(parseISO(value), -1));
    case 2:
      return formatISO(addDays(parseISO(value), -3));
    default:
      return value;
  }
}

export function createUserProfile(payload: firebase.database.DataSnapshot, options?: any): UserProfile {
  const id = payload.key as string;
  const { email, displayName, photoURL, simpleMode, darkTheme, fontSize } = payload.val();
  const data: any = { id, email, displayName, photoURL, simpleMode, darkTheme, fontSize };
  data.simpleMode = options != null && options.simpleMode != null ? options.simpleMode : data.simpleMode;
  data.darkTheme = options != null && options.darkTheme != null ? options.darkTheme : data.darkTheme;
  data.fontSize = options != null && options.fontSize != null ? options.fontSize : data.fontSize;
  return new UserProfile(data);
}

export function createWord(payload: firebase.database.DataSnapshot): Word {
  const id = payload.key as string;
  const { translation, category, partOfSpeech, ...rest } = payload.val();
  const texts = createTextArray(rest);
  return new Word({ id, translation, category, partOfSpeech, texts });
}

export function createPlainJS(texts: Text[]) {
  const poco: any = {};
  for (let i = 0; i < texts.length; i += 1) {
    const { index, ...rest } = texts[i];
    Object.entries(rest).forEach(([key, value]) => {
      if (index) {
        poco[`${key}${index}`] = value;
      } else {
        poco[key] = value;
      }
    });
  }
  return poco;
}

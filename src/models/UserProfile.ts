import { DataSnapshot } from 'firebase/database';

import { defaultTo } from '../utils';

export type UserProfile = {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  simpleMode: boolean;
  fontSize: number;
  darkTheme: boolean;
};

export function createUserProfile(payload: DataSnapshot | null, options?: any): UserProfile {
  if (payload == null) {
    return {
      id: '',
      email: '',
      displayName: '',
      photoURL: undefined,
      simpleMode: defaultTo(options && options.simpleMode, true),
      darkTheme: defaultTo(options && options.darkTheme, false),
      fontSize: defaultTo(options && options.fontSize, 1),
    };
  }
  const { email, displayName, photoURL, simpleMode, darkTheme, fontSize } = payload.val();
  return {
    id: defaultTo(payload.key, ''),
    email: defaultTo(email, ''),
    displayName: defaultTo(displayName, ''),
    photoURL,
    simpleMode: defaultTo(defaultTo(options && options.simpleMode, simpleMode), true),
    darkTheme: defaultTo(defaultTo(options && options.darkTheme, darkTheme), false),
    fontSize: defaultTo(defaultTo(options && options.fontSize, fontSize), 1),
  };
}

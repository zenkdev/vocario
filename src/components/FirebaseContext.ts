import React from 'react';
import firebase from 'firebase/app';

export interface FirebaseContextValue {
  currentUser: firebase.UserInfo | null;
  resetCount: number;
}

const createNamedContext = (name: string) => {
  const context = React.createContext<FirebaseContextValue>({ currentUser: null, resetCount: 0 });
  context.displayName = name;

  return context;
};

export default /* #__PURE__ */ createNamedContext('Firebase');

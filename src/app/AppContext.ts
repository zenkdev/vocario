import React from 'react';

import { UserProfile } from '../models';

export interface AppContextValue {
  currentUser: UserProfile | null;
  uid: string | null;
  simpleMode: boolean;
}

const createNamedContext = (name: string) => {
  const context = React.createContext<AppContextValue>({ currentUser: null, uid: null, simpleMode: true });
  context.displayName = name;

  return context;
};

export default /* #__PURE__ */ createNamedContext('App');

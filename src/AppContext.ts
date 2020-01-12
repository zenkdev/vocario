import React from 'react';

import { UserProfile } from './models';

export interface AppContextValue {
  currentUser: UserProfile | null;
}

const createNamedContext = (name: string) => {
  const context = React.createContext<AppContextValue>({ currentUser: null });
  context.displayName = name;

  return context;
};

export default /* #__PURE__ */ createNamedContext('App');

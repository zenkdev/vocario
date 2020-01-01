import React from 'react';

import { firebaseInstance, Firebase } from '../services';

const createNamedContext = (name: string) => {
  const context = React.createContext<Firebase>(firebaseInstance);
  context.displayName = name;

  return context;
};

export default /*#__PURE__*/ createNamedContext('App');

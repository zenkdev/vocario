import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

jest.mock('../services/Firebase', () => ({
  __esModule: true, // this property makes it work
  default: {
    auth: {
      onAuthStateChanged: jest.fn(),
    },
  },
}));

jest.mock('../services/ProfileService', () => ({
  __esModule: true, // this property makes it work
  default: {
    onCurrentUserChanged: jest.fn(),
  },
}));

it('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  root.unmount();
});

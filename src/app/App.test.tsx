import React from 'react';
import ReactDOM from 'react-dom';
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
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

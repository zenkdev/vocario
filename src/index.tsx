import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

import store from './app/store';
import * as serviceWorker from './serviceWorker';

// import { setupConfig } from '@ionic/react';

// setupConfig({ mode: 'ios' });

defineCustomElements(window);

const render = () => {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const App = require('./app/App').default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

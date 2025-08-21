import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { it, vi } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';
import store from './store';

vi.mock('../services/Firebase', () => ({
  default: {
    auth: {
      onAuthStateChanged: vi.fn(),
    },
  },
}));

vi.mock('../services/ProfileService', () => ({
  default: {
    onCurrentUserChanged: vi.fn().mockImplementation(() => ({ unsubscribe: vi.fn() })),
  },
}));

it('renders without crashing', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText('Please wait while app is loading')).toBeInTheDocument();
});

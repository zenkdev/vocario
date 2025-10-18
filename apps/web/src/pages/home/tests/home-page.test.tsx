import '@testing-library/jest-dom';

import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@/tests';

import HomePage from '../home-page';

vi.mock('react-router', async importOriginal => ({
  ...(await importOriginal()),
  useParams: vi.fn(() => ({ id: 'test-id' })),
  useNavigate: vi.fn(() => vi.fn()),
  Link: vi.fn(() => null),
}));

vi.mock('@/shared/api/firebase', () => ({
  Firebase: vi.fn().mockImplementation(() => ({
    auth: {
      onAuthStateChanged: vi.fn(),
      currentUser: null,
    },
    db: {},
    perf: {
      app: {},
      dataCollectionEnabled: false,
      instrumentationEnabled: false,
    },
    withTrace: vi.fn((_traceName, callback) => callback()),
    logEvent: vi.fn(),
  })),
  firebaseInstance: {
    auth: {
      onAuthStateChanged: vi.fn(),
      currentUser: null,
    },
    db: {},
    perf: {
      app: {},
      dataCollectionEnabled: false,
      instrumentationEnabled: false,
    },
    withTrace: vi.fn((_traceName, callback) => callback()),
    logEvent: vi.fn(),
  },
}));

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);

    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});

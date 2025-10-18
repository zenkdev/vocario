import '@testing-library/jest-dom';

import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@/tests';

import LearnPage from '../learn-page';

vi.mock('react-router', async importOriginal => ({
  ...(await importOriginal()),
  useParams: vi.fn(() => ({ id: 'test-id' })),
  useNavigate: vi.fn(() => vi.fn()),
  Link: vi.fn(() => null),
}));

vi.mock('../use-learn-page', () => ({
  default: vi.fn(() => ({
    simpleMode: false,
    isLoading: false,
    title: 'Test dictionary',
    word: null,
    progress: 0,
    hasMore: false,
    fetchData: vi.fn(),
  })),
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

describe('LearnPage', () => {
  it('renders without crashing', async () => {
    render(<LearnPage />);

    await vi.waitFor(() => {
      expect(screen.getByText('Test dictionary')).toBeInTheDocument();
    });
  });
});

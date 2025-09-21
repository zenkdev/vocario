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

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);

    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});

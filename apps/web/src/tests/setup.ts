import * as matchers from '@testing-library/jest-dom/matchers';
import { afterEach, beforeEach, expect, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

expect.extend(matchers);

beforeEach(() => {
  const consoleError = console.error;
  const spy = vi.spyOn(console, 'error').mockImplementation((...args) => {
    const message = args[0];
    if (typeof message === 'string' && message.includes('When testing, code that causes React state updates should be wrapped into act')) {
      return;
    }
    consoleError(...args);
  });

  return () => {
    spy.mockRestore();
  };
});

afterEach(() => {
  cleanup();
});

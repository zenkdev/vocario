import StoreProvider from '@/app/store-provider';
import ThemeProvider from '@/app/theme-provider';
import type { ReactElement, ReactNode } from 'react';
import { type RenderOptions, render } from '@testing-library/react';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

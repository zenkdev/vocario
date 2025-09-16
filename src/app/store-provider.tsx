import { type AppStore, makeStore } from '@/lib/store';
import { Provider } from 'react-redux';
import { type ReactNode, useRef } from 'react';

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

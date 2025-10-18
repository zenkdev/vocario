import { type AppStore, makeStore } from '@/lib/store';
import { Provider } from 'react-redux';
import { type ReactNode, useState } from 'react';

export default function StoreProvider({ children }: { children: ReactNode }) {
  // Create the store instance the first time this renders
  const [store] = useState<AppStore>(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
}

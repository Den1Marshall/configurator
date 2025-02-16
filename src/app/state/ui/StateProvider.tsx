'use client';

import { FC, ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { type AppStore, makeStore } from '../model/store';
import { persistStore } from 'redux-persist';

export const StateProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  persistStore(storeRef.current);

  return <Provider store={storeRef.current}>{children}</Provider>;
};

'use client';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../model/store';

export const StateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

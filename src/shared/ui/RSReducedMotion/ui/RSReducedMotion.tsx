'use client';

import { FC } from 'react';
import { useReducedMotion } from '@react-spring/web';

export const RSReducedMotion: FC = () => {
  useReducedMotion();
  return null;
};

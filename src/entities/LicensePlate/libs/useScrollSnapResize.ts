'use client';
import { RefObject, useEffect } from 'react';
import { LicensePlateRegion } from '..';
import { LicensePlateNumber } from '../model/types';

export const useScrollSnapResize = (
  ref: RefObject<HTMLParagraphElement | null>,
  currentValue: LicensePlateRegion | LicensePlateNumber | string
) => {
  useEffect(() => {
    const handleResize = () => {
      if (ref.current && ref.current.textContent === currentValue.toString()) {
        ref.current.scrollIntoView({ behavior: 'instant' });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, currentValue]);
};

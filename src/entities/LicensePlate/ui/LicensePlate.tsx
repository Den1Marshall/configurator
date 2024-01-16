'use client';
import { Stack } from '@/shared/ui';
import { FC, ReactNode, useEffect, useState } from 'react';
import { LicensePlateFlag } from './LicensePlateFlag';
import { useAppSelector } from '@/app/state';
import { LicensePlateLetter } from '..';

export const LicensePlate: FC<{ children: ReactNode }> = ({ children }) => {
  const letters = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters
  );

  const [color, setColor] = useState<undefined | 'success.dark'>(undefined);

  useEffect(() => {
    if (letters[0] === ('Y' as LicensePlateLetter)) {
      setColor('success.dark');
    } else {
      setColor(undefined);
    }
  }, [letters]);

  return (
    <Stack
      direction={'row'}
      width={'100%'}
      border={'6px solid #fff'}
      sx={{
        aspectRatio: '6/1',
        color,
        transition: 'color 0.2s ease-in-out',
      }}
    >
      <LicensePlateFlag />
      {children}
    </Stack>
  );
};

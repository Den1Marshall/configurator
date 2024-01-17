'use client';
import { Paper } from '@/shared/ui';
import { FC, ReactNode, useEffect, useState } from 'react';
import { LicensePlateFlag } from './LicensePlateFlag';
import { useAppSelector } from '@/app/state';
import { LicensePlateLetter } from '..';
import { useColorScheme } from '@mui/material';

export const LicensePlate: FC<{ children: ReactNode }> = ({ children }) => {
  const letters = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters
  );

  const { systemMode } = useColorScheme();
  const [color, setColor] = useState<undefined | 'success.dark'>(undefined);

  useEffect(() => {
    if (letters[0] === ('Y' as LicensePlateLetter)) {
      setColor('success.dark');
    } else {
      setColor(undefined);
    }
  }, [letters]);

  return (
    <Paper
      elevation={6}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        border: '6px solid',
        borderColor: 'primary',
        aspectRatio: '6/1',
        color,
        transition: 'color 0.2s ease-in-out',
        background:
          systemMode === 'dark'
            ? '#000'
            : systemMode === 'light'
            ? undefined
            : '#000',
      }}
    >
      <LicensePlateFlag />
      {children}
    </Paper>
  );
};

'use client';
import { Box, Paper } from '@/shared/ui';
import { FC, ReactNode, useEffect, useState } from 'react';
import { LicensePlateFlag } from './LicensePlateFlag';
import { useAppSelector } from '@/app/state';
import { LicensePlateLetter } from '..';

export const LicensePlate: FC<{ children: ReactNode }> = ({ children }) => {
  const letters = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters
  );

  const [color, setColor] = useState<'#000' | 'success.dark'>('#000');

  useEffect(() => {
    if (letters[0] === ('Y' as LicensePlateLetter)) {
      setColor('success.dark');
    } else {
      setColor('#000');
    }
  }, [letters]);

  return (
    <Paper
      component={'article'}
      square
      elevation={6}
      sx={{ width: '100%', p: '1%', background: '#fff', aspectRatio: '6/1' }}
    >
      <Box
        width={'100%'}
        sx={{
          p: '0.5%',
          backgroundColor: color,
          transition: 'background-color 0.2s ease-in-out',
        }}
      >
        <Box
          width={'100%'}
          color={color}
          bgcolor={'#fff'}
          display={'flex'}
          flexDirection={'row'}
          sx={{ aspectRatio: '6/1', transition: 'color 0.2s ease-in-out' }}
        >
          <LicensePlateFlag />
          {children}
        </Box>
      </Box>
    </Paper>
  );
};

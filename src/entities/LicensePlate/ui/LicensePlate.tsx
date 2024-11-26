'use client';
import { Stack } from '@mui/material';
import { FC, ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import { LicensePlateFlag } from './LicensePlateFlag';
import { useAppSelector } from '@/app/state';
import { LicensePlateLetter } from '..';
import { AnimatedPaper } from '@/shared/ui';
import { useSpring } from '@react-spring/web';
import { LICENSE_PLATE_ASPECT_RATIO } from '../model/consts';

export const LicensePlate: FC<{ children: ReactNode }> = ({ children }) => {
  const letters = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters
  );

  const [spring, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
  }));

  const [color, setColor] = useState<'#000' | 'success.dark'>('#000');

  useLayoutEffect(() => {
    api.start({
      to: { opacity: 1 },
      config: {
        frequency: 0.5,
        precision: 0.0001,
      },
    });
  }, [api]);

  useEffect(() => {
    if (letters[0] === ('Y' as LicensePlateLetter)) {
      setColor('success.dark');
    } else {
      setColor('#000');
    }
  }, [letters]);

  return (
    <AnimatedPaper
      style={spring}
      square
      elevation={6}
      sx={{
        width: '100%',
        aspectRatio: LICENSE_PLATE_ASPECT_RATIO,
        bgcolor: color,
        p: 'min(0.5vw, 6px)',
        border: 'min(0.5vw, 6px) solid #fff',
        transition: 'background 0.2s ease-in-out',
      }}
    >
      <Stack
        direction={'row'}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          color: color,
          justifyContent: 'flex-end',
          bgcolor: '#fff',
          aspectRatio: LICENSE_PLATE_ASPECT_RATIO,
        }}
      >
        <LicensePlateFlag />
        {children}
      </Stack>
    </AnimatedPaper>
  );
};

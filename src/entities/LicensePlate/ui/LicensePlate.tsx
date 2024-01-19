'use client';
import { AnimatedPaper, Box } from '@/shared/ui';
import { FC, ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import { LicensePlateFlag } from './LicensePlateFlag';
import { useAppSelector } from '@/app/state';
import { LicensePlateLetter } from '..';
import { useSpring } from '@react-spring/web';

export const LicensePlate: FC<{ children: ReactNode }> = ({ children }) => {
  const letters = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters
  );

  const [spring, api] = useSpring(() => ({
    from: {
      scale: 0.8,
      opacity: 0,
    },
  }));

  const [color, setColor] = useState<'#000' | 'success.dark'>('#000');

  useLayoutEffect(() => {
    api.start({
      to: { scale: 1, opacity: 1 },
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
    </AnimatedPaper>
  );
};

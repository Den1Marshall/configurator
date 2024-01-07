import { Stack } from '@/shared/ui';
import { FC, ReactNode } from 'react';
import { LicensePlateFlag } from './LicensePlateFlag';

export const LicensePlate: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Stack
      textAlign={'center'}
      component={'article'}
      border={'6px solid #fff'}
      direction={'row'}
      width={'100%'}
      sx={{ aspectRatio: '6/1' }}
    >
      <LicensePlateFlag />
      {children}
    </Stack>
  );
};

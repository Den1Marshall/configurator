import { FC } from 'react';
import { licensePlateNumbersArr } from '@/entities/LicensePlate/model/licensePlateNumbers';
import { Number } from './Number';
import { NumberPos } from '../model/types';
import { Stack } from '@/shared/ui';

export const LicensePlateNumber: FC<{ numberPos: NumberPos }> = ({
  numberPos,
}) => {
  return (
    <Stack
      overflow={'scroll'}
      width={'100%'}
      height={'100%'}
      sx={{
        scrollSnapType: 'y mandatory',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {licensePlateNumbersArr.map((number) => (
        <Number key={number} numberPos={numberPos} number={number} />
      ))}
    </Stack>
  );
};

import { licensePlateAllLettersArr } from '@/entities/LicensePlate';
import { Stack } from '@/shared/ui';
import { FC } from 'react';
import { Letter } from './Letter';
import { LetterPos } from '../model/types';

export const LicensePlateLetter: FC<{ letterPos: LetterPos }> = ({
  letterPos,
}) => {
  let licensePlateLettersArr;
  if (letterPos === 0) {
    licensePlateLettersArr = licensePlateAllLettersArr.toSpliced(
      licensePlateAllLettersArr.findIndex((letter) => letter === 'D')
    );
  }
  return (
    <Stack
      overflow={'scroll'}
      width={'100%'}
      height={'100%'}
      sx={{
        textAlign: letterPos === 1 ? 'left' : 'right',
        scrollSnapType: 'y mandatory',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {licensePlateLettersArr?.map((letter) => (
        <Letter key={letter} letter={letter} letterPos={letterPos} />
      )) ||
        licensePlateAllLettersArr.map((letter) => (
          <Letter key={letter} letter={letter} letterPos={letterPos} />
        ))}
    </Stack>
  );
};

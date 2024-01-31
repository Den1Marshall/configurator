import {
  licensePlateAllLettersArr,
  type LicensePlateElectricLetter,
  type LicensePlateLetter,
} from '@/entities/LicensePlate';
import { Stack } from '@/shared/ui';
import { FC } from 'react';
import { Letter } from './Letter';
import { LetterPos } from '../model/types';

export const ScrollLicensePlateLetter: FC<{ letterPos: LetterPos }> = ({
  letterPos,
}) => {
  let licensePlateLettersArr: (
    | LicensePlateLetter
    | LicensePlateElectricLetter
  )[] = [];

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
      {(licensePlateLettersArr[0] &&
        licensePlateLettersArr.map((letter) => (
          <Letter
            key={letter}
            letter={letter}
            letters={licensePlateLettersArr}
            letterPos={letterPos}
          />
        ))) ||
        licensePlateAllLettersArr.map((letter) => (
          <Letter
            key={letter}
            letter={letter}
            letters={licensePlateAllLettersArr}
            letterPos={letterPos}
          />
        ))}
    </Stack>
  );
};
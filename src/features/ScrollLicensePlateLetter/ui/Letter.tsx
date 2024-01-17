'use client';
import { FC, useEffect, useRef } from 'react';
import { Typography } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/state';
import type { LetterPos } from '../model/types';
import {
  LicensePlateElectricLetter,
  LicensePlateLetter,
  updateLetter,
} from '@/entities/LicensePlate';
import { useInView } from 'react-intersection-observer';
import { mergeRefs } from '@/shared/libs';

export const Letter: FC<{
  letterPos: LetterPos;
  letter: LicensePlateLetter | LicensePlateElectricLetter;
  letters: (LicensePlateLetter | LicensePlateElectricLetter)[];
}> = ({ letterPos, letter, letters }) => {
  const currentLetter = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters[letterPos]
  );

  const dispatch = useAppDispatch();

  const letterRef = useRef<HTMLParagraphElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.5,

    onChange(inView, entry) {
      if (inView) {
        dispatch(
          updateLetter({
            letterPos,
            value: entry.target.textContent as LicensePlateLetter,
          })
        );
      }
    },
  });

  useEffect(() => {
    if (
      !inView &&
      letterRef.current &&
      currentLetter === letterRef.current.textContent
    ) {
      letterRef.current.scrollIntoView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letterRef.current, currentLetter]);

  return (
    <Typography
      ref={mergeRefs<HTMLParagraphElement>(ref, letterRef)}
      key={letter}
      variant='h1'
      component={'p'}
      fontWeight={500}
      sx={{
        mt: letter === letters[0] ? '10%' : undefined,
        mb: letter === letters[letters.length - 1] ? '10%' : undefined,
        scrollSnapAlign: 'center',
      }}
    >
      {letter}
    </Typography>
  );
};

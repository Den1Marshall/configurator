'use client';
import { FC, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/state';
import type { LetterPos } from '../model/types';
import {
  LicensePlateElectricLetter,
  LicensePlateLetter,
  updateLetter,
  useScrollSnapResize,
} from '@/entities/LicensePlate';
import { useInView } from 'react-intersection-observer';
import { mergeRefs } from '@/shared/libs';

export const Letter: FC<{
  letterPos: LetterPos;
  letter: LicensePlateLetter | LicensePlateElectricLetter;
  letters: (LicensePlateLetter | LicensePlateElectricLetter)[];
}> = ({ letterPos, letter }) => {
  const currentLetter = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters[letterPos]
  );

  const dispatch = useAppDispatch();

  const letterRef = useRef<HTMLParagraphElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.9,

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

  useScrollSnapResize(letterRef, currentLetter);

  return (
    <Typography
      ref={mergeRefs<HTMLParagraphElement>(ref, letterRef)}
      key={letter}
      variant='h1'
      component={'p'}
      sx={{
        scrollSnapAlign: 'center',
        my: '10%',
      }}
    >
      {letter}
    </Typography>
  );
};

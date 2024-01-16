'use client';
import { FC, useEffect, useLayoutEffect, useRef } from 'react';
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
}> = ({ letterPos, letter }) => {
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

  const heightRef = useRef(0);

  useLayoutEffect(() => {
    if (letterRef.current && letterRef.current.parentElement) {
      heightRef.current =
        letterRef.current.parentElement.getBoundingClientRect().height;
    }
  }, []);

  return (
    <Typography
      ref={mergeRefs<HTMLParagraphElement>(ref, letterRef)}
      key={letter}
      component={'p'}
      fontWeight={700}
      sx={{
        scrollSnapAlign: 'center',
        fontSize: `${heightRef.current - 1}px`,
        lineHeight: `${heightRef.current}px`,
      }}
    >
      {letter}
    </Typography>
  );
};

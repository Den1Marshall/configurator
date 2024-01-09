'use client';
import { FC, useEffect, useMemo, useRef } from 'react';
import { Typography } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { useIntersectionObserver } from 'usehooks-ts';
import type { LetterPos } from '../model/types';
import { LicensePlateLetter, updateLetter } from '@/entities/LicensePlate';

export const Letter: FC<{
  letterPos: LetterPos;
  letter: LicensePlateLetter;
}> = ({ letterPos, letter }) => {
  const currentLetter = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters[letterPos]
  );

  const dispatch = useAppDispatch();

  const ref = useRef<HTMLParagraphElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 1 });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (
      ref.current &&
      !isVisible &&
      ref.current.textContent &&
      currentLetter === ref.current.textContent
    ) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, currentLetter]);

  useEffect(() => {
    if (isVisible && entry.target && entry.target.textContent) {
      dispatch(updateLetter({ letterPos, value: letter }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const containerHeight = useMemo(() => {
    if (ref.current && ref.current.parentElement) {
      return ref.current.parentElement.getBoundingClientRect().height / 1.2;
    } else {
      return undefined;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);
  return (
    <Typography
      ref={ref}
      key={letter}
      variant='h1'
      component={'p'}
      fontWeight={700}
      sx={{
        scrollSnapAlign: 'center',
        fontSize: `${containerHeight}px`,
      }}
    >
      {letter}
    </Typography>
  );
};

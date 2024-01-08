'use client';
import { FC, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { Typography } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { useIntersectionObserver } from 'usehooks-ts';
import { updateNumber } from '@/entities/LicensePlate';
import { LicensePlateNumber } from '@/entities/LicensePlate/model/types';
import { NumberPos } from '../model/types';

export const Number: FC<{
  numberPos: NumberPos;
  number: LicensePlateNumber;
}> = ({ numberPos, number }) => {
  const currentNumber = useAppSelector(
    (state) => state.persistedLicensePlateReducer.numbers[numberPos]
  );

  const dispatch = useAppDispatch();

  const ref = useRef<HTMLParagraphElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 1 });
  const isVisible = !!entry?.isIntersecting;

  useLayoutEffect(() => {
    if (
      ref.current &&
      !isVisible &&
      ref.current.textContent &&
      currentNumber === +ref.current.textContent
    ) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  useEffect(() => {
    if (isVisible && entry.target.textContent) {
      const visibleNumber = entry.target.textContent;

      dispatch(
        updateNumber({
          numberPos,
          value: +visibleNumber as LicensePlateNumber,
        })
      );
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
      key={number}
      variant='h1'
      component={'p'}
      fontWeight={700}
      sx={{
        scrollSnapAlign: 'center',
        fontSize: containerHeight,
      }}
    >
      {number}
    </Typography>
  );
};

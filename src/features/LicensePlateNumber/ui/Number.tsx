'use client';
import { FC, useEffect, useLayoutEffect, useRef } from 'react';
import { Typography } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { updateNumber } from '@/entities/LicensePlate';
import { LicensePlateNumber } from '@/entities/LicensePlate/model/types';
import { NumberPos } from '../model/types';
import { useInView } from 'react-intersection-observer';
import { mergeRefs } from '@/shared/libs';

export const Number: FC<{
  numberPos: NumberPos;
  number: LicensePlateNumber;
}> = ({ numberPos, number }) => {
  const currentNumber = useAppSelector(
    (state) => state.persistedLicensePlateReducer.numbers[numberPos]
  );

  const dispatch = useAppDispatch();

  const numberRef = useRef<HTMLParagraphElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.5,

    onChange(inView, entry) {
      if (inView && entry.target.textContent) {
        dispatch(
          updateNumber({
            numberPos,
            value: +entry.target.textContent as LicensePlateNumber,
          })
        );
      }
    },
  });

  useEffect(() => {
    if (
      !inView &&
      numberRef.current &&
      numberRef.current.textContent &&
      currentNumber === +numberRef.current.textContent
    ) {
      numberRef.current.scrollIntoView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberRef.current, currentNumber]);

  const heightRef = useRef(0);

  useLayoutEffect(() => {
    if (numberRef.current && numberRef.current.parentElement) {
      heightRef.current =
        numberRef.current.parentElement.getBoundingClientRect().height;
    }
  }, []);

  return (
    <Typography
      ref={mergeRefs<HTMLParagraphElement>(ref, numberRef)}
      key={number}
      component={'p'}
      fontWeight={700}
      sx={{
        scrollSnapAlign: 'center',
        fontSize: `${heightRef.current - 1}px`,
        lineHeight: `${heightRef.current}px`,
      }}
    >
      {number}
    </Typography>
  );
};

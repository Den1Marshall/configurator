'use client';
import { FC, useEffect, useRef } from 'react';
import { Typography } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { licensePlateNumbersArr, updateNumber } from '@/entities/LicensePlate';
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
    threshold: 0.53,

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

  return (
    <Typography
      ref={mergeRefs<HTMLParagraphElement>(ref, numberRef)}
      key={number}
      variant='h1'
      component={'p'}
      fontWeight={500}
      sx={{
        mt: number === licensePlateNumbersArr[0] ? '10%' : undefined,
        mb:
          number === licensePlateNumbersArr[licensePlateNumbersArr.length - 1]
            ? '10%'
            : undefined,
        scrollSnapAlign: 'center',
      }}
    >
      {number}
    </Typography>
  );
};

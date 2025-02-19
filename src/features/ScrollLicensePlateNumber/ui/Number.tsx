'use client';

import { FC, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { updateNumber, useScrollSnapResize } from '@/entities/LicensePlate';
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
  const areNumbersCorrect = useAppSelector(
    (state) => state.persistedLicensePlateReducer.areNumbersCorrect
  );

  const dispatch = useAppDispatch();

  const numberRef = useRef<HTMLParagraphElement>(null);
  const { ref, inView, entry } = useInView({
    threshold: 0.9,

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

  useEffect(() => {
    if (entry?.target.textContent && inView && areNumbersCorrect) {
      dispatch(
        updateNumber({
          numberPos,
          value: +entry.target.textContent as LicensePlateNumber,
        })
      );
    }
  }, [
    areNumbersCorrect,
    dispatch,
    entry?.target.textContent,
    inView,
    numberPos,
  ]);

  useScrollSnapResize(numberRef, currentNumber);

  return (
    <Typography
      ref={mergeRefs<HTMLParagraphElement>(ref, numberRef)}
      key={number}
      variant='h1'
      component={'p'}
      sx={{
        color: (theme) => (areNumbersCorrect ? null : theme.palette.error.main),
      }}
    >
      {number}
    </Typography>
  );
};

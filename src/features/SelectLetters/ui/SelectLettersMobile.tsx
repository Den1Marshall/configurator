'use client';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { TextField } from '@/shared/ui';
import {
  LicensePlateLetters,
  convertCyrillicToLatin,
  updateAllLetters,
} from '@/entities/LicensePlate';
import { isValid } from '../libs/isValid';

export const SelectLettersMobile: FC = () => {
  const dispatch = useAppDispatch();
  const letters = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters
  );

  useEffect(() => {
    setValue(letters.join(''));
  }, [letters]);

  const [value, setValue] = useState(letters.join(''));

  const handleChange = ({
    target: { value: targetValue },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    targetValue = targetValue.toUpperCase();

    if (
      isValid(targetValue.split('') as LicensePlateLetters, true) &&
      targetValue.length === 2
    ) {
      setValue(targetValue);

      const letters = convertCyrillicToLatin(targetValue).split('');

      dispatch(updateAllLetters(letters as LicensePlateLetters));
    } else if (isValid(targetValue.split('') as LicensePlateLetters)) {
      setValue(targetValue);
    }
  };

  return (
    <TextField
      variant='standard'
      inputProps={{ maxLength: 2 }}
      error={!isValid(value.split('') as LicensePlateLetters, true)}
      value={value}
      onChange={handleChange}
      label={'Введіть серію'}
    />
  );
};

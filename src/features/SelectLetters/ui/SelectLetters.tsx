'use client';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { TextField } from '@/shared/ui';
import { LicensePlateLetters, updateAllLetters } from '@/entities/LicensePlate';

export const SelectLetters: FC = () => {
  const dispatch = useAppDispatch();
  const letters = useAppSelector(
    (state) => state.persistedLicensePlateReducer.letters
  );

  useEffect(() => {
    setValue(letters.join(''));
  }, [letters]);

  const [value, setValue] = useState(letters.join(''));

  const regExp = new RegExp('^(A|B|C|E|H|I|K|M|O|P|T|X){0,2}$');
  const valid = regExp.test(value) && value.length === 2;

  const handleChange = ({
    target: { value: targetValue },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    targetValue = targetValue.toUpperCase();
    const valid = regExp.test(targetValue);

    if (valid && targetValue.length === 2) {
      setValue(targetValue);

      const letters = targetValue.split('');

      dispatch(updateAllLetters(letters as LicensePlateLetters));
    } else if (valid) {
      setValue(targetValue);
    }
  };

  return (
    <TextField
      inputProps={{ maxLength: 2 }}
      error={!valid}
      value={value}
      onChange={handleChange}
      label={'Введіть серію'}
    />
  );
};

'use client';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { LicensePlateNumbers, updateAllNumbers } from '@/entities/LicensePlate';
import { TextField } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';

export const SelectNumbers: FC<{ touch?: boolean }> = ({ touch }) => {
  const dispatch = useAppDispatch();
  const numbers = useAppSelector(
    (state) => state.persistedLicensePlateReducer.numbers
  );

  const [value, setValue] = useState(numbers.join(''));

  const regExp = new RegExp(/^\d*$/);
  const valid = regExp.test(value) && value.length === 4;

  useEffect(() => {
    setValue(numbers.join(''));
  }, [numbers]);

  const handleChange = ({
    target: { value: targetValue },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const valid = regExp.test(targetValue);

    if (valid && targetValue.length === 4) {
      setValue(targetValue);

      const numbers = targetValue
        .split('')
        .map((value) => +value) as LicensePlateNumbers;

      dispatch(updateAllNumbers(numbers));
    } else if (valid) {
      setValue(targetValue);
    }
  };

  return (
    <TextField
      fullWidth={touch}
      variant={touch ? 'standard' : 'outlined'}
      inputProps={{ maxLength: 4, inputMode: 'numeric' }}
      error={!valid}
      value={value}
      onChange={handleChange}
      label={'Введіть номер'}
    />
  );
};

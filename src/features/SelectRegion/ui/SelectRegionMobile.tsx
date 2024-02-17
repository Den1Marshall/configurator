'use client';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { FC } from 'react';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { licensePlateRegionsArr, updateRegion } from '@/entities/LicensePlate';
import { generateGroups } from '../libs/generateGroups';

export const SelectRegionMobile: FC = () => {
  const dispatch = useAppDispatch();

  const region = useAppSelector(
    (state) => state.persistedLicensePlateReducer.region
  );

  return (
    <FormControl fullWidth>
      <InputLabel variant='standard'>Оберіть регіон</InputLabel>
      <NativeSelect
        variant='outlined'
        value={region.code}
        onChange={(e) => {
          const newRegion = licensePlateRegionsArr.find(
            (region) => region.code === e.target.value
          )!;

          dispatch(updateRegion(newRegion));
        }}
      >
        {generateGroups().map((group) => (
          <optgroup key={group} label={group}>
            {licensePlateRegionsArr.map((region) => {
              if (group === region.title) {
                return (
                  <option key={region.code} value={region.code}>
                    {region.title} ({region.year})
                  </option>
                );
              } else {
                return null;
              }
            })}
          </optgroup>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

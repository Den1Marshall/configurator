'use client';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { FC } from 'react';
import { Autocomplete, TextField, createFilterOptions } from '@mui/material';
import {
  LicensePlateRegion,
  convertCyrillicToLatin,
  licensePlateRegionsArr,
  updateRegion,
} from '@/entities/LicensePlate';
import { SelectRegionPaper } from './SelectRegionPaper';

export const SelectRegion: FC = () => {
  const dispatch = useAppDispatch();

  const region = useAppSelector(
    (state) => state.persistedLicensePlateReducer.region
  );

  const options = createFilterOptions({
    stringify: (option: LicensePlateRegion) =>
      option.title + option.year + option.code,
  });

  return (
    <Autocomplete
      PaperComponent={SelectRegionPaper}
      value={region}
      filterOptions={(_, state) => {
        if (
          state.inputValue.length === 2 &&
          licensePlateRegionsArr.find(
            (reg) =>
              reg.code ===
              convertCyrillicToLatin(state.inputValue.toUpperCase())
          )
        ) {
          state.inputValue = convertCyrillicToLatin(
            state.inputValue.toUpperCase()
          );
          return options(_, state);
        }

        return options(_, state);
      }}
      onChange={(_event: any, newValue: LicensePlateRegion | null) => {
        const newRegion = licensePlateRegionsArr.find(
          (region) => region.code === newValue?.code
        )!;

        dispatch(updateRegion(newRegion));
      }}
      options={licensePlateRegionsArr}
      groupBy={(option) => option.title}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      getOptionLabel={(option) => `${option.title} (${option.year})`}
      renderInput={(params) => <TextField {...params} label='Оберіть регіон' />}
      sx={{
        width: 300,
      }}
      disableClearable
    />
  );
};

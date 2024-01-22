'use client';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { FC } from 'react';
import { Autocomplete, TextField } from '@/shared/ui';
import {
  LicensePlateRegion,
  licensePlateRegionsArr,
  updateRegion,
} from '@/entities/LicensePlate';
import { SelectRegionPaper } from './SelectRegionPaper';

export const SelectRegion: FC = () => {
  const dispatch = useAppDispatch();

  const region = useAppSelector(
    (state) => state.persistedLicensePlateReducer.region
  );

  return (
    <Autocomplete
      PaperComponent={SelectRegionPaper}
      value={region}
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
        '@media (max-width: 600px)': {
          width: '100%',
          gridColumn: '1/3',
        },
      }}
      disableClearable
    />
  );
};

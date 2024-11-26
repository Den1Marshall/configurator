import { LicensePlate } from '@/entities/LicensePlate';
import { ScrollLicensePlateNumber } from '@/features/ScrollLicensePlateNumber';
import { ScrollLicensePlateRegion } from '@/features/ScrollLicensePlateRegion';
import { ScrollLicensePlateLetter } from '@/features/ScrollLicensePlateLetter';
import { FC } from 'react';
import { Stack } from '@mui/material';
import { LicensePlateRegionDescription } from '@/entities/LicensePlateRegionDescription';

export const LicensePlateWidget: FC = () => {
  return (
    <LicensePlate>
      <Stack
        direction={'row'}
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <LicensePlateRegionDescription>
          <ScrollLicensePlateRegion />
        </LicensePlateRegionDescription>
      </Stack>
      <Stack
        direction={'row'}
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <ScrollLicensePlateNumber numberPos={0} />
        <ScrollLicensePlateNumber numberPos={1} />
        <ScrollLicensePlateNumber numberPos={2} />
        <ScrollLicensePlateNumber numberPos={3} />
      </Stack>
      <Stack
        direction={'row'}
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <ScrollLicensePlateLetter letterPos={0} />
        <ScrollLicensePlateLetter letterPos={1} />
      </Stack>
    </LicensePlate>
  );
};

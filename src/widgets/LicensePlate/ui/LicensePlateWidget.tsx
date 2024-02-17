import { LicensePlate } from '@/entities/LicensePlate';
import { LicensePlateNumber } from '@/features/LicensePlateNumber';
import { LicensePlateRegion } from '@/features/LicensePlateRegion';
import { ScrollLicensePlateLetter } from '@/features/ScrollLicensePlateLetter';
import { FC } from 'react';
import { Stack } from '@mui/material';
import { LicensePlateRegionDescription } from '@/entities/LicensePlateRegionDescription';

export const LicensePlateWidget: FC = () => {
  return (
    <LicensePlate>
      <Stack direction={'row'} width={'100%'} height={'100%'}>
        <LicensePlateRegionDescription>
          <LicensePlateRegion />
        </LicensePlateRegionDescription>
      </Stack>
      <Stack direction={'row'} width={'100%'} height={'100%'}>
        <LicensePlateNumber numberPos={0} />
        <LicensePlateNumber numberPos={1} />
        <LicensePlateNumber numberPos={2} />
        <LicensePlateNumber numberPos={3} />
      </Stack>
      <Stack direction={'row'} width={'100%'} height={'100%'}>
        <ScrollLicensePlateLetter letterPos={0} />
        <ScrollLicensePlateLetter letterPos={1} />
      </Stack>
    </LicensePlate>
  );
};

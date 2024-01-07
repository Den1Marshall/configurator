import { LicensePlate } from '@/entities/LicensePlate';
import { LicensePlateNumber } from '@/features/LicensePlateNumber';
import { LicensePlateRegion } from '@/features/LicensePlateRegion';
import { LicensePlateLetter } from '@/features/LicensePlateLetter';
import { FC } from 'react';
import { Stack } from '@/shared/ui';

export const LicensePlateWidget: FC = () => {
  return (
    <LicensePlate>
      <Stack direction={'row'} ml={'auto'}>
        <LicensePlateRegion />
      </Stack>
      <Stack direction={'row'}>
        <LicensePlateNumber numberPos={0} />
        <LicensePlateNumber numberPos={1} />
        <LicensePlateNumber numberPos={2} />
        <LicensePlateNumber numberPos={3} />
      </Stack>
      <Stack direction={'row'} mr={'auto'}>
        <LicensePlateLetter letterPos={0} />
        <LicensePlateLetter letterPos={1} />
      </Stack>
    </LicensePlate>
  );
};

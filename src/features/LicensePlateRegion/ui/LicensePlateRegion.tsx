import { licensePlateRegionsArr } from '@/entities/LicensePlate';
import { Stack } from '@/shared/ui';
import { FC } from 'react';
import { Region } from './Region';

export const LicensePlateRegion: FC = () => {
  return (
    <Stack
      overflow={'scroll'}
      width={'100%'}
      height={'100%'}
      sx={{
        scrollSnapType: 'y mandatory',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {licensePlateRegionsArr.map((region) => (
        <Region key={region.code} region={region} />
      ))}
    </Stack>
  );
};

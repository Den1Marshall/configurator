import { licensePlateRegionsArr } from '@/entities/LicensePlate';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { Region } from './Region';

export const LicensePlateRegion: FC = () => {
  return (
    <Stack
      overflow={'scroll'}
      width={'100%'}
      height={'100%'}
      textAlign={'center'}
      sx={{
        scrollSnapType: 'y mandatory',
        overscrollBehavior: 'contain',
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

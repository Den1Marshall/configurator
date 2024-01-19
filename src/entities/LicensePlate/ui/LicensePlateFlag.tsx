import { FC } from 'react';
import { Box, Stack, Typography } from '@/shared/ui';

export const LicensePlateFlag: FC = () => {
  return (
    <Stack
      component={Box}
      width={'10%'}
      height={'100%'}
      sx={{ background: 'rgb(25, 61, 157)', p: '1%', pt: '2.5%', pb: '1.5%' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        width={'100%'}
        sx={{
          aspectRatio: '2/1',
          background: 'linear-gradient(#0057B7 50%, #FFDD00 50%)',
        }}
      ></Box>
      <Typography
        variant='h2'
        component={'p'}
        mt={'auto'}
        fontWeight={500}
        color='#fff'
      >
        UA
      </Typography>
    </Stack>
  );
};

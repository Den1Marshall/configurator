import { FC } from 'react';
import { Box, Stack, Typography } from '@/shared/ui';

export const LicensePlateFlag: FC = () => {
  return (
    <Stack
      width={'10%'}
      sx={{ background: 'rgb(25, 61, 157)', p: 3, pt: 5 }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Stack width={'100%'} height={'35%'}>
        <Box
          sx={{ width: '100%', height: '100%', background: '#0057B7' }}
        ></Box>
        <Box
          sx={{ width: '100%', height: '100%', background: '#FFDD00' }}
        ></Box>
      </Stack>
      <Typography variant='h3' component={'p'} mt={'auto'} fontWeight={700}>
        UA
      </Typography>
    </Stack>
  );
};

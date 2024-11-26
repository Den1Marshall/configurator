import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';

export const LicensePlateFlag: FC = () => {
  return (
    <Stack
      component={Box}
      sx={{
        minWidth: '7.6923075%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgb(25, 61, 157)',
      }}
    >
      <Box
        sx={{
          mt: '37.5%',
          width: '75%',
          height: '17.857143%',
          background: 'linear-gradient(#0057B7 50%, #FFDD00 50%)',
        }}
      ></Box>
      <Typography
        variant='h2'
        component={'p'}
        sx={{
          mt: 'auto',
          mb: '37.5%',
          fontWeight: 500,
          color: '#fff',
        }}
      >
        UA
      </Typography>
    </Stack>
  );
};

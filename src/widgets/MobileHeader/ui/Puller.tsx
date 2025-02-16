'use client';

import { FC } from 'react';
import { Box, useColorScheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Puller: FC = () => {
  const { mode } = useColorScheme();

  return (
    <Box
      sx={{
        width: 36,
        height: 6,
        backgroundColor: mode === 'dark' ? grey[900] : grey[300],
        borderRadius: 3,
      }}
    />
  );
};

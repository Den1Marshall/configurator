'use client';
import { FC } from 'react';
import { Box } from '@/shared/ui';
import { useColorScheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Puller: FC<{ onClick: () => void }> = ({ onClick }) => {
  const { mode } = useColorScheme();

  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        top: 14,
        width: 36,
        height: 6,
        backgroundColor: mode === 'dark' ? grey[900] : grey[300],
        borderRadius: 3,
      }}
    />
  );
};

import { FC } from 'react';
import { AppBar, Stack, Toolbar } from '@/shared/ui';
import { SelectRegion } from '@/features/SelectRegion';
import { SelectNumbers } from '@/features/SelectNumbers';
import { SelectLetters } from '@/features/SelectLetters';

export const Header: FC = () => {
  return (
    <AppBar
      sx={{
        p: 1,
      }}
      component={'header'}
      color='secondary'
    >
      <Toolbar
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
        }}
      >
        <Stack mx={'auto'} direction={'row'} alignItems={'center'} gap={4}>
          <SelectRegion />
          <SelectNumbers />
          <SelectLetters />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

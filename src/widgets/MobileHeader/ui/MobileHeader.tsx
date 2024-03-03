'use client';
import { FC } from 'react';
import { SelectNumbers } from '@/features/SelectNumbers';
import { SelectLetters } from '@/features/SelectLetters';
import { Puller } from './Puller';
import { useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { detentToPx } from '../libs/detentToPx';
import { findClosestDetent } from '../libs/findClosestDetent';
import { SelectRegionMobile } from '@/features/SelectRegion';
import { Stack, useTheme } from '@mui/material';
import { ApproximateCost } from '@/entities/ApproximateCost';
import { AnimatedPaper } from '@/shared/ui/AnimatedPaper';

export const MobileHeader: FC = () => {
  const theme = useTheme();

  const detents = [60, 0].map((det) => detentToPx(det));
  let position = detents[0];

  const [{ y }, api] = useSpring(
    {
      y: typeof window === 'undefined' ? '60dvh' : position,
    },
    []
  );

  const bind = useDrag(
    ({ movement: [, my], down, velocity: [, vy], swipe: [, sy] }) => {
      if (down) {
        api.start({
          to: { y: position + my },

          immediate: true,

          config: {
            frequency: 0.3,
            precision: 0.0001,
            velocity: [0, vy],
          },
        });
      } else {
        if (sy === -1) {
          position = detents[1];
        } else if (sy === 1) {
          position = detents[0];
        } else {
          position = findClosestDetent(detents, position + my);
        }

        api.start({
          to: {
            y: position,
          },
          config: {
            frequency: 0.3,
            precision: 0.0001,
            velocity: [0, vy],
          },
        });
      }
    },
    {
      axis: 'y',
      rubberband: 0.12,
      filterTaps: true,
      bounds(state) {
        return {
          top: (state?.offset[1] || -0) + -y.get(),
        };
      },
    }
  );

  return (
    <header>
      <AnimatedPaper
        elevation={3}
        style={{
          y,
        }}
        {...bind()}
        sx={{
          zIndex: theme.zIndex.tooltip + 1,
          position: 'fixed',
          top: 'env(safe-area-inset-top)',
          left: 0,
          width: '100%',
          height: '115%',
          pt: 0.5,
          touchAction: 'none',
          borderRadius: 5.5,
          '@media (orientation: landscape)': {
            display: 'none',
          },
        }}
      >
        <Stack px={2} spacing={4} alignItems={'center'}>
          <Puller />
          <SelectRegionMobile />
          <Stack
            direction={'row'}
            alignItems={'center'}
            width={'100%'}
            spacing={1}
          >
            <SelectNumbers touch />
            <SelectLetters touch />
          </Stack>
          <ApproximateCost
            sx={{ position: 'static', transform: 'none' }}
            mobile
          />
        </Stack>
      </AnimatedPaper>
    </header>
  );
};

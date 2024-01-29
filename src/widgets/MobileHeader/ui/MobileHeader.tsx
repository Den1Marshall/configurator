'use client';
import { FC, useRef } from 'react';
import { AnimatedPaper, Stack } from '@/shared/ui';
import { SelectNumbersMobile } from '@/features/SelectNumbers';
import { SelectLettersMobile } from '@/features/SelectLetters';
import { Puller } from './Puller';
import { useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { detentToPx } from '../libs/detentToPx';
import { findClosestDetent } from '../libs/findClosestDetent';
import { SelectRegionMobile } from '@/features/SelectRegion';
import { useTheme } from '@mui/material';
import { ApproximateCost } from '@/entities/ApproximateCost';

export const MobileHeader: FC = () => {
  const detents = [85, 58.5, 10];
  const theme = useTheme();

  let position = detentToPx(detents[0]);
  const ref = useRef<HTMLDivElement>(null);

  const [{ y }, api] = useSpring(
    {
      y: position,
    },
    []
  );

  const bind = useDrag(
    ({ movement: [, y], down, velocity: [, vy] }) => {
      if (down) {
        api.start({
          to: { y: position + y },
          immediate: true,
        });
      } else {
        y = y * (vy || 1);

        position = findClosestDetent(
          detents.map((det) => detentToPx(det)),
          position + y
        );

        api.start({
          to: {
            y: position,
          },
          config: {
            frequency: 0.3,
            precision: 0.0001,
          },
        });
      }
    },
    {
      axis: 'y',
      filterTaps: true,
      rubberband: 0.1,
      bounds(state) {
        return {
          top:
            (state?.offset[1] || -Infinity) +
            detentToPx(4.3) -
            (ref.current?.getBoundingClientRect().top || -Infinity),
        };
      },
    }
  );

  return (
    <header>
      <AnimatedPaper
        ref={ref}
        elevation={3}
        style={{ y }}
        {...bind()}
        sx={{
          zIndex: theme.zIndex.tooltip + 1,
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          px: 2,
          pt: 6,
          gap: 6,
          touchAction: 'none',
          mb: 'env(safe-area-inset-bottom)',
        }}
      >
        <Puller
          onClick={() => {
            const [bottom, middle] = [
              detentToPx(detents[0]),
              detentToPx(detents[1]),
            ];
            if (position === middle) {
              position = bottom;
              api.start({ to: { y: position } });
            } else {
              position = middle;
              api.start({ to: { y: middle } });
            }
          }}
        />
        <Stack
          direction={'row'}
          alignItems={'center'}
          width={'100%'}
          spacing={1}
        >
          <SelectRegionMobile />
          <SelectNumbersMobile />
          <SelectLettersMobile />
        </Stack>
        <ApproximateCost
          mobile
          sx={{ position: 'relative', top: 0, left: 0, transform: 'none' }}
        />
      </AnimatedPaper>
    </header>
  );
};

'use client';
import { AnimatedPaper } from '@/shared/ui';
import { FC, useLayoutEffect } from 'react';
import { useSpring } from '@react-spring/web';
import { PaperProps } from '@mui/material';

export const SelectRegionPaper: FC<PaperProps> = (props) => {
  const [spring, api] = useSpring(() => ({
    from: {
      scale: 0,
      opacity: 0,
    },
  }));

  useLayoutEffect(() => {
    api.start({
      to: {
        scale: 1,
        opacity: 1,
      },
      config: {
        precision: 0.0001,
        frequency: 0.4,
        damping: 0.8,
      },
    });
  }, [api]);

  return (
    <AnimatedPaper
      {...props}
      style={spring}
      sx={{ transformOrigin: 'top center' }}
    />
  );
};

'use client';
import { FC, useLayoutEffect, useRef, useState } from 'react';
import { Box, Stack, Typography } from '@/shared/ui';

export const LicensePlateFlag: FC = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height / 4);
    }
  }, []);

  return (
    <Stack
      ref={ref}
      component={Box}
      width={'10%'}
      height={'100%'}
      sx={{ background: 'rgb(25, 61, 157)', p: 1, pt: 5 }}
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
      <Typography
        // variant='h3'
        component={'p'}
        mt={'auto'}
        fontWeight={700}
        fontSize={height + 'px'}
      >
        UA
      </Typography>
    </Stack>
  );
};

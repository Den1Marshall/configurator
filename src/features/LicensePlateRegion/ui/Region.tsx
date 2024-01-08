'use client';
import { useAppDispatch, useAppSelector } from '@/app/state';
import { licensePlateRegionsArr, updateRegion } from '@/entities/LicensePlate';
import { Typography } from '@mui/material';
import { FC, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

export const Region: FC<{ region: any }> = ({ region }) => {
  const { code: currentCode } = useAppSelector(
    (state) => state.persistedLicensePlateReducer.region
  );

  const dispatch = useAppDispatch();

  const ref = useRef<HTMLParagraphElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 1 });
  const isVisible = !!entry?.isIntersecting;

  useLayoutEffect(() => {
    if (
      ref.current &&
      ref.current.textContent &&
      currentCode === ref.current.textContent
    ) {
      ref.current.scrollIntoView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, currentCode]);

  useEffect(() => {
    if (isVisible) {
      dispatch(
        updateRegion(
          licensePlateRegionsArr.find(
            (region) => region.code === ref.current?.textContent
          )!
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const containerHeight = useMemo(() => {
    if (ref.current && ref.current.parentElement) {
      return ref.current.parentElement.getBoundingClientRect().height / 1.2;
    } else {
      return undefined;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <Typography
      ref={ref}
      key={region.code}
      variant='h1'
      component={'p'}
      fontWeight={700}
      sx={{
        scrollSnapAlign: 'center',
        fontSize: `${containerHeight}px`,
      }}
    >
      {region.code}
    </Typography>
  );
};

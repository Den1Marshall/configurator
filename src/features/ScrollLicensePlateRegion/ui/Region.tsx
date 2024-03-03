'use client';
import { useAppDispatch, useAppSelector } from '@/app/state';
import {
  LicensePlateRegion,
  licensePlateRegionsArr,
  updateRegion,
  useScrollSnapResize,
} from '@/entities/LicensePlate';
import { mergeRefs } from '@/shared/libs';
import { Typography } from '@mui/material';
import { FC, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export const Region: FC<{ region: LicensePlateRegion }> = ({ region }) => {
  const { code: currentCode } = useAppSelector(
    (state) => state.persistedLicensePlateReducer.region
  );

  const dispatch = useAppDispatch();

  const regionRef = useRef<HTMLParagraphElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.9,

    onChange(inView, entry) {
      if (inView) {
        dispatch(
          updateRegion(
            licensePlateRegionsArr.find(
              (region) => region.code === entry.target.textContent
            )!
          )
        );
      }
    },
  });

  useEffect(() => {
    if (
      !inView &&
      regionRef.current &&
      regionRef.current.textContent &&
      currentCode === regionRef.current.textContent
    ) {
      regionRef.current.scrollIntoView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regionRef.current, currentCode]);

  useScrollSnapResize(regionRef, currentCode);

  return (
    <Typography
      ref={mergeRefs<HTMLParagraphElement>(ref, regionRef)}
      key={region.code}
      variant='h1'
      component={'p'}
    >
      {region.code}
    </Typography>
  );
};

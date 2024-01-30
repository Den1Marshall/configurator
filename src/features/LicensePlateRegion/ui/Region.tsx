'use client';
import { useAppDispatch, useAppSelector } from '@/app/state';
import {
  LicensePlateRegion,
  licensePlateRegionsArr,
  updateRegion,
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
    threshold: 0.53,

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

  return (
    <Typography
      ref={mergeRefs<HTMLParagraphElement>(ref, regionRef)}
      key={region.code}
      variant='h1'
      component={'p'}
      fontWeight={500}
      textAlign={'center'}
      sx={{
        scrollSnapAlign: 'center',
        mt: region.code === licensePlateRegionsArr[0].code ? '10%' : undefined,
        mb:
          region.code ===
          licensePlateRegionsArr[licensePlateRegionsArr.length - 1].code
            ? '10%'
            : undefined,
      }}
    >
      {region.code}
    </Typography>
  );
};

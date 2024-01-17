'use client';
import { FC, ReactElement, useMemo, useState } from 'react';
import { Grow, Tooltip } from '@/shared/ui';
import { useAppSelector } from '@/app/state';
import { EKV } from '../consts/EKV';
import { DIIA } from '../consts/DIIA';

export const LicensePlateRegionDescription: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const { region } = useAppSelector(
    (state) => state.persistedLicensePlateReducer
  );

  const description = useMemo(() => {
    switch (region.code) {
      case 'II':
        return 'Загальнодержавна серія (до 2006 року)';
      case 'ED':
        return EKV;
      case 'DC':
        return EKV;
      case 'DI':
        return DIIA;
      case 'PD':
        return DIIA;
      default:
        return '';
    }
  }, [region]);

  const [open, setOpen] = useState(Boolean(description));

  return (
    <Tooltip
      arrow
      TransitionComponent={Grow}
      open={open}
      onClick={() => setOpen(false)}
      title={description}
    >
      {children}
    </Tooltip>
  );
};

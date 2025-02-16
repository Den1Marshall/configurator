'use client';

import { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import { Tooltip } from '@mui/material';
import { useAppSelector } from '@/app/state';
import { DIIA, EKV } from '../model/consts';

export const LicensePlateRegionDescription: FC<{
  children: ReactElement<unknown>;
}> = ({ children }) => {
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
        return 'Звичайний регіон';
    }
  }, [region]);

  const [open, setOpen] = useState(description !== 'Звичайний регіон');

  useEffect(() => {
    if (open && description === 'Звичайний регіон') {
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  }, [open, description]);

  return (
    <Tooltip
      arrow
      placement='top'
      open={open}
      onClick={() => setOpen(!open)}
      title={description}
      slotProps={{
        popper: { sx: { zIndex: 0 } },
      }}
    >
      {children}
    </Tooltip>
  );
};

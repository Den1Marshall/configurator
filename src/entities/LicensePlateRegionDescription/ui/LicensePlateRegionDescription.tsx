'use client';
import { FC, ReactElement } from 'react';
import { Grow, Tooltip } from '@/shared/ui';
import { useAppSelector } from '@/app/state';

export const LicensePlateRegionDescription: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const { region } = useAppSelector(
    (state) => state.persistedLicensePlateReducer
  );

  const description =
    region.code === 'II' ? 'Загальнодержавна серія (до 2006 року)' : '';

  return (
    <Tooltip
      arrow
      TransitionComponent={Grow}
      open={Boolean(description)}
      title={description}
    >
      {children}
    </Tooltip>
  );
};

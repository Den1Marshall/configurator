'use client';
import { useAppSelector } from '@/app/state';
import { SxProps, Typography } from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import { ApproximateCostModal } from './ApproximateCostModal';
import { ApproximateCostModalMobile } from './ApproximateCostModalMobile';

export const ApproximateCost: FC<{ sx?: SxProps; mobile?: boolean }> = ({
  sx,
  mobile = false,
}) => {
  const numbers = useAppSelector(
    (state) => state.persistedLicensePlateReducer.numbers
  ).join('');

  const [hydrated, setHydrated] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const cost = useMemo(() => {
    switch (true) {
      case /^0006|6666$/.test(numbers):
        return 10000;

      case /^(0001|0007|7777)$/.test(numbers):
        return 80000;

      case /^(?!6666|7777)(\d)\1*$/.test(numbers):
        return 50000;

      case /^000[2-589]/.test(numbers):
        return 50000;

      case /(\d)\1.*66|66.*(\d)\2/.test(numbers):
        return 4000;

      case /(\d)\1(\d)\2/.test(numbers):
        return 15000;

      case /0123|1234/.test(numbers):
        return 15000;

      case /^00(?!11|22|33|44|55|66|77|88|99)\d{2}$/.test(numbers):
        return 10000;

      case /\d*6{3}\d*/.test(numbers):
        return 4000;

      default:
        return undefined;
    }
  }, [numbers]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Typography
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
        }}
        sx={{
          position: 'absolute',
          left: '50%',
          top: '80%',
          width: '100%',
          fontSize: 'min(max(2vh, 1.5vw), 21.6px)',
          textAlign: 'center',
          transform: 'translate(-50%, -80%)',
          cursor: 'pointer',
          ...sx,
        }}
      >
        {hydrated && cost ? `Приблизна вартість - від ₴${cost}` : 'Безоплатні'}{' '}
        <HelpIcon
          sx={{
            fontSize: 'max(1.5vh, 1.1vw)',
            position: 'absolute',
            ml: 0.25,
          }}
        />
      </Typography>
      {mobile ? (
        <ApproximateCostModalMobile
          open={isModalOpen}
          setOpen={setIsModalOpen}
        />
      ) : (
        <ApproximateCostModal open={isModalOpen} setOpen={setIsModalOpen} />
      )}
    </>
  );
};

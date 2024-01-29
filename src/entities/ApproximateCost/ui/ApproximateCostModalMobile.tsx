'use client';
import { FC, useCallback, useLayoutEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@/shared/ui';
import { useTheme } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AnimatedDialog = animated(Dialog);

export const ApproximateCostModalMobile: FC<{
  open: boolean;
  setOpen: (value: boolean) => void;
}> = ({ open, setOpen }) => {
  const theme = useTheme();

  const [{ x }, api] = useSpring(() => ({
    x: window.innerWidth,
  }));

  const openModal = useCallback(() => {
    api.start({
      to: { x: 0 },
      config: {
        frequency: 0.4,
        precision: 0.0001,
      },
    });
  }, [api]);

  const closeModal = useCallback(() => {
    api.start({
      to: { x: window.innerWidth },
      onRest(result) {
        if (result.finished && result.value.x === window.innerWidth) {
          setOpen(false);
        }
      },
      config: {
        frequency: 0.4,
        precision: 0.0001,
      },
    });
  }, [api, setOpen]);

  useLayoutEffect(() => {
    if (open) {
      openModal();
    }
  }, [open, openModal]);

  const drag = useDrag(
    ({ movement: [mx], down, swipe: [sx] }) => {
      if (down) {
        api.start({ to: { x: mx }, immediate: true });
      } else {
        if (mx >= window.innerWidth / 2 || sx === 1) {
          closeModal();
        } else {
          openModal();
        }
      }
    },
    {
      axis: 'x',
      preventScrollAxis: 'y',
      preventScroll: true,
      bounds(state) {
        return { left: state?.offset[0] };
      },
    }
  );

  return (
    <AnimatedDialog
      component={'aside'}
      style={{ x }}
      {...drag()}
      sx={{
        zIndex: theme.zIndex.tooltip + 1,
        touchAction: 'none',
      }}
      open={open}
      fullScreen
      hideBackdrop
      PaperProps={{ elevation: 0 }}
    >
      <DialogTitle textAlign={'center'} component={'h2'}>
        <IconButton
          size='small'
          sx={{ position: 'absolute', left: 24 }}
          onClick={closeModal}
        >
          <ArrowBackIcon />
        </IconButton>
        Як вираховується ціна?
      </DialogTitle>
      <DialogContent>
        <DialogContentText mb={2} component={'p'}>
          Порядкові номери видаються в порядку наростання в межах коду серії. В
          багатьох регіонах видавалися позачергові серії, які згодом було
          вилучено і розповсюджено серед пільгових категорій населення. Винятком
          є серії на кшталт 0001 або 1111, що викуповуються приватними особами
          за окрему платню (7 500 — 20 000 гривень).
        </DialogContentText>
        <DialogContentText mb={2} component={'p'}>
          30 червня 2023 року Кабінет Міністрів України ухвалив зміни до правил
          присвоєння автомобільних номерних знаків, що дозволяють за бажанням
          власникам автомобілів обирати під час державної реєстрації номерний
          знак або його літерно-цифрову комбінацію.
        </DialogContentText>
        <DialogContentText mb={2} component={'p'}>
          15 листопада 2023 року в Міністерстві внутрішніх справ оновили прайс
          на платні номерні знаки для транспортних засобів.
        </DialogContentText>
        <List>
          <ListItem>
            <ListItemText>• 0001, 0007 та 7777 — 80 000 грн.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • Однакові цифри (окрім 6666 та 7777) — 50 000 грн.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • Комбінації від 0002 до 0005, 0008, 0009 — 50 000 грн.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • Послідовні пари однакових цифр — 15 000 грн.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • Послідовні цифри 0123 та 1234 — 15 000 грн.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • Починаються з двох нулів, а наступні цифри не однакові — 10 000
              грн.
            </ListItemText>
          </ListItem>
          <ListItemText>
            Зменшена вартість знаків із цифрою “6”, номерів:
          </ListItemText>
          <ListItem>
            <ListItemText>• 0006 та 6666 — 10 000 грн.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • із двох послідовних пар однакових цифр, одна з яких 66 — 4000
              грн.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              • Три цифри з яких 6 (підряд) — 4000 грн.
            </ListItemText>
          </ListItem>
        </List>
      </DialogContent>
    </AnimatedDialog>
  );
};

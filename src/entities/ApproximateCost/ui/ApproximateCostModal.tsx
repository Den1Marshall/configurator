'use client';
import { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';

export const ApproximateCostModal: FC<{
  open: boolean;
  setOpen: (value: boolean) => void;
}> = ({ open, setOpen }) => {
  const theme = useTheme();

  return (
    <Dialog
      component={'aside'}
      sx={{ zIndex: theme.zIndex.tooltip + 1 }}
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ elevation: 0 }}
    >
      <DialogTitle component={'h2'} textAlign={'center'}>
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
    </Dialog>
  );
};

import { createSlice } from '@reduxjs/toolkit';
import { licensePlateRegionsArr } from './licensePlateRegions';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  LicensePlate,
  LicensePlateLetter,
  LicensePlateNumber,
  LicensePlateNumbers,
  LicensePlateRegion,
} from './types';

interface UpdateNumber {
  numberPos: 0 | 1 | 2 | 3;
  value: LicensePlateNumber;
}
interface UpdateLetter {
  letterPos: 0 | 1;
  value: LicensePlateLetter;
}

const initialState: LicensePlate = {
  region: licensePlateRegionsArr[4],
  numbers: [0, 0, 0, 1],
  letters: ['A', 'A'],
};

const licensePlateSlice = createSlice({
  name: 'licensePlate',
  initialState,
  reducers: {
    updateRegion(state, action: PayloadAction<LicensePlateRegion>) {
      state.region = action.payload;
    },

    updateNumber(state, action: PayloadAction<UpdateNumber>) {
      const { numberPos, value } = action.payload;
      state.numbers[numberPos] = value;
    },

    updateAllNumbers(state, action: PayloadAction<LicensePlateNumbers>) {
      state.numbers = action.payload;
    },

    updateLetter(state, action: PayloadAction<UpdateLetter>) {
      const { letterPos, value } = action.payload;
      state.letters[letterPos] = value;
    },
  },
});

export const { updateRegion, updateNumber, updateAllNumbers, updateLetter } =
  licensePlateSlice.actions;
export default licensePlateSlice.reducer;

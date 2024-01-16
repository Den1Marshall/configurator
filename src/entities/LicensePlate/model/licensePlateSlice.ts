import { createSlice } from '@reduxjs/toolkit';
import { licensePlateRegionsArr } from './licensePlateRegions';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  LicensePlate,
  LicensePlateLetter,
  LicensePlateLetters,
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
  region: licensePlateRegionsArr.find((region) => region.code === 'DI')!,
  numbers: [0, 0, 0, 1],
  letters: ['Y', 'A'],
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

    updateAllLetters(state, action: PayloadAction<LicensePlateLetters>) {
      state.letters = action.payload;
    },
  },
});

export const {
  updateRegion,
  updateNumber,
  updateAllNumbers,
  updateLetter,
  updateAllLetters,
} = licensePlateSlice.actions;
export default licensePlateSlice.reducer;

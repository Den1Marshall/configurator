export {
  default,
  updateRegion,
  updateNumber,
  updateAllNumbers,
  updateLetter,
  updateAllLetters,
} from './model/licensePlateSlice';
export { licensePlateRegionsArr } from './model/licensePlateRegions';
export { licensePlateLettersArr } from './model/licensePlateLetters';
export { licensePlateNumbersArr } from './model/licensePlateNumbers';
export type {
  LicensePlateLetter,
  LicensePlateLetters,
  LicensePlateRegion,
  LicensePlateNumbers,
} from './model/types';
export { LicensePlate } from './ui/LicensePlate';

export {
  default,
  updateRegion,
  updateNumber,
  updateAllNumbers,
  updateLetter,
  updateAllLetters,
} from './model/licensePlateSlice';
export { licensePlateRegionsArr } from './model/licensePlateRegions';
export {
  licensePlateLettersArr,
  licensePlateElectricLetters,
  licensePlateAllLettersArr,
} from './model/licensePlateLetters';
export { licensePlateNumbersArr } from './model/licensePlateNumbers';
export type {
  LicensePlateLetter,
  LicensePlateLetters,
  LicensePlateRegion,
  LicensePlateNumbers,
  LicensePlateElectricLetter,
} from './model/types';
export { LicensePlate } from './ui/LicensePlate';
export { isLetterElectric } from './libs/isLetterElectric';
export { convertCyrillicToLatin } from './libs/convertCyrillicToLatin';
export { areLettersValid } from './libs/areLettersValid';
export { useScrollSnapResize } from './libs/useScrollSnapResize';

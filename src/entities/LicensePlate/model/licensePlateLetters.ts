import {
  LicensePlateElectricLetter,
  LicensePlateCyrillicLetter,
  LicensePlateLetter,
} from './types';

export const licensePlateElectricLetters: LicensePlateElectricLetter[] = [
  'Y',
  'D',
  'F',
  'G',
  'J',
  'L',
  'N',
  'R',
  'S',
  'U',
  'W',
];
export const licensePlateLettersArr: LicensePlateLetter[] = [
  'A',
  'B',
  'C',
  'E',
  'H',
  'I',
  'K',
  'M',
  'O',
  'P',
  'T',
  'X',
];
export const licensePlateAllLettersArr: (
  | LicensePlateLetter
  | LicensePlateElectricLetter
)[] = [...licensePlateLettersArr, ...licensePlateElectricLetters];
export const licensePlateCyrillicLettersArr: LicensePlateCyrillicLetter[] = [
  'А',
  'В',
  'С',
  'Е',
  'Н',
  'І',
  'К',
  'М',
  'О',
  'Р',
  'Т',
  'Х',
];

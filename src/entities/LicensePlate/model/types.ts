type LicensePlateYear = 2004 | 2013 | 2021 | 2022;
export type LicensePlateRegion = {
  title: string;
  year: LicensePlateYear;
  code: string;
};

export type LicensePlateNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type LicensePlateNumbers = [
  LicensePlateNumber,
  LicensePlateNumber,
  LicensePlateNumber,
  LicensePlateNumber
];

export type LicensePlateLetter =
  | 'A'
  | 'B'
  | 'C'
  | 'E'
  | 'H'
  | 'I'
  | 'K'
  | 'M'
  | 'O'
  | 'P'
  | 'T'
  | 'X';
export type LicensePlateElectricLetter =
  | 'Y'
  | 'D'
  | 'F'
  | 'G'
  | 'J'
  | 'L'
  | 'N'
  | 'R'
  | 'S'
  | 'U'
  | 'W';
export type LicensePlateCyrillicLetter =
  | 'А'
  | 'В'
  | 'С'
  | 'Е'
  | 'Н'
  | 'І'
  | 'К'
  | 'М'
  | 'О'
  | 'Р'
  | 'Т'
  | 'Х';

export type LicensePlateLetters = [
  LicensePlateLetter | 'Y',
  LicensePlateLetter | LicensePlateElectricLetter
];

export interface LicensePlate {
  region: LicensePlateRegion;
  numbers: LicensePlateNumbers;
  letters: LicensePlateLetters;
}

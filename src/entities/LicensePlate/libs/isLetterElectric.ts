import {
  LicensePlateElectricLetter,
  LicensePlateLetter,
  licensePlateElectricLetters,
} from '..';

export const isLetterElectric = (
  letter: LicensePlateLetter | LicensePlateElectricLetter
) => {
  return licensePlateElectricLetters.includes(
    letter as LicensePlateElectricLetter
  );
};

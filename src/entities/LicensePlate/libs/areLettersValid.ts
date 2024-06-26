import {
  LicensePlateLetter,
  licensePlateAllLettersArr,
  isLetterElectric,
  LicensePlateElectricLetter,
} from '@/entities/LicensePlate';

export const areLettersValid = (
  letters: (LicensePlateLetter | LicensePlateElectricLetter)[],
  forDispatch = false
) => {
  const regExp = new RegExp(
    '^(A|B|C|E|H|I|K|M|O|P|T|X|Y|D|F|G|J|L|N|R|S|U|W|А|В|С|Е|Н|І|К|М|О|Р|Т|Х){0,2}$'
  );
  const value = letters.join('');

  if (!forDispatch) {
    return regExp.test(value);
  } else {
    if (
      letters[0] !== ('Y' as LicensePlateLetter) &&
      isLetterElectric(letters[1])
    ) {
      return false;
    }
    if (
      licensePlateAllLettersArr
        .slice(licensePlateAllLettersArr.findIndex((letter) => letter === 'D'))
        .includes(letters[0])
    ) {
      return false;
    }
    return regExp.test(value) && value.length === 2;
  }
};

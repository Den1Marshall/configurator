import { licensePlateLettersArr } from '..';
import { licensePlateCyrillicLettersArr } from '../model/licensePlateLetters';

export const convertCyrillicToLatin = (string: string): string => {
  const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;

  if (cyrillicPattern.test(string)) {
    return string
      .split('')
      .map(
        (letter) =>
          (letter =
            licensePlateLettersArr[
              licensePlateCyrillicLettersArr.findIndex(
                (clet) => clet === letter
              )
            ])
      )
      .join('');
  } else {
    return string;
  }
};

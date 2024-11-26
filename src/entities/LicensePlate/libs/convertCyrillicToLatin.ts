import { licensePlateLettersArr } from '..';
import { licensePlateCyrillicLettersArr } from '../model/licensePlateLetters';

export const convertCyrillicToLatin = (string: string): string => {
  const cyrillicPattern = /^[\u0400-\u04FF]+$/; // TODO: change this later to previous variant due to next.js 15 tsconfig target set to 'ES2017'

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

import { arrayLength } from "./arrayLength";
export const arraySome = (array, callbackFn) => {
  for (let i = 0; i < arrayLength(array); i++) {
    if (callbackFn(array[i]) === true) {
      return true;
    }
  }

  return false;
};

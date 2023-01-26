import { arrayLength } from "./arrayLength";
export const arrayEvery = (array, callbackFn) => {
  for (let i = 0; i < arrayLength(array); i++) {
    if (callbackFn(array[i]) !== true) {
      return false;
    }
  }

  return true;
};

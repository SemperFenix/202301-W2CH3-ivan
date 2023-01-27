import { arrayLength } from "./arrayLength";

export const arrayPop = (array) => {
  if (arrayLength(array) === 0) {
    return undefined;
  }

  const output = array[arrayLength(array) - 1];
  array.length = [arrayLength(array) - 1];
  return output;
};

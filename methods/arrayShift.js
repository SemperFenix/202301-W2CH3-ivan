import { arrayLength } from "./arrayLength";
export const arrayShift = (array) => {
  let i = 0;
  const originalLength = arrayLength(array);
  do {
    array[i] = array[i + 1];
    i++;
  } while (i < originalLength);

  array.length = originalLength - 1;

  return arrayLength(array);
};

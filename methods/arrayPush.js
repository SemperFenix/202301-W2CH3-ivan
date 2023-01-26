import { arrayLength } from "./arrayLength";
export const arrayPush = (array, ...item) => {
  for (const i of item) {
    array[arrayLength(array)] = i;
  }

  return arrayLength(array);
};

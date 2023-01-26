import { arrayLength } from "./arrayLength";

export const arrayJoin = (array, element) => {
  let result = "";
  let i = 0;
  if (element) {
    while (i < arrayLength(array) - 1) {
      result = result + array[i] + element;
      i++;
    }

    return result + array[i];
  }

  while (i < arrayLength(array) - 1) {
    result = result + array[i] + ",";
    i++;
  }

  result += array[i];

  return result;
};

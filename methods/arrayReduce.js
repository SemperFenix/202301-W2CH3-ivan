import { arrayLength } from "./arrayLength";

export const arrayReduce = (array, callbackFn, initialValue) => {
  const copyArray = [...array];

  if (initialValue) {
    let index = 0;
    copyArray[0] = callbackFn(initialValue, copyArray[0]);
    for (const i of copyArray) {
      if (index < arrayLength(copyArray) - 1) {
        copyArray[index + 1] = callbackFn(i, copyArray[index + 1]);
        index++;
      }
    }

    const result = copyArray[arrayLength(copyArray) - 1];
    return result;
  }

  let index = 0;
  for (const i of copyArray) {
    if (index < arrayLength(copyArray) - 1) {
      copyArray[index + 1] = callbackFn(i, copyArray[index + 1]);
      index++;
    }
  }

  const result = copyArray[arrayLength(copyArray) - 1];
  return result;
};

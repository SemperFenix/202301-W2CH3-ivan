export const arrayFindIndex = (array, callbackFn) => {
  let i = 0;
  for (const a of array) {
    if (callbackFn(a) === true) {
      return i;
    }

    i++;
  }

  return -1;
};

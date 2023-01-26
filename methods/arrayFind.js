export const arrayFind = (array, callbackFn) => {
  for (const a of array) {
    if (callbackFn(a) === true) {
      return a;
    }
  }

  return undefined;
};

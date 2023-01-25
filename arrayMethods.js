export const arrayLength = (array) => {
  let i = 0;
  while (array[i] !== undefined) {
    i++;
  }

  return i;
};

export const arrayPush = (array, item) => {
  array[arrayLength(array)] = item;
  return arrayLength(array);
};

export const arrayPop = (array) => {
  const output = array[arrayLength(array) - 1];
  array.length = [arrayLength(array) - 1];
  return output;
};

export const arrayUnshift = (array, ...arg) => {
  for (let i = arrayLength(array) + arrayLength(arg) - 1; i > 0; i--) {
    array[i] = array[i - arrayLength(arg)];
  }

  for (let j = 0; j < arrayLength(arg); j++) {
    array[j] = arg[j];
  }

  return arrayLength(array);
};

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

export const arraySome = (array, callbackFn) => {
  for (let i = 0; i < arrayLength(array); i++) {
    if (callbackFn(array[i]) === true) {
      return true;
    }
  }

  return false;
};

export const arrayEvery = (array, callbackFn) => {
  for (let i = 0; i < arrayLength(array); i++) {
    if (callbackFn(array[i]) !== true) {
      return false;
    }
  }

  return true;
};

export const arrayFind = (array, callbackFn) => {
  for (const a of array) {
    if (callbackFn(a) === true) {
      return a;
    }
  }

  return undefined;
};

export const arrayFilter = (array, callbackFn) => {
  const result = [];

  for (const a of array) {
    if (callbackFn(a) === true) {
      arrayPush(result, a);
    }
  }

  return result;
};

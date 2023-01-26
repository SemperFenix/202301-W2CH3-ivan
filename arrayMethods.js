export const arrayLength = (array) => {
  let i = 0;
  while (array[i] !== undefined) {
    i++;
  }

  return i;
};

export const arrayPush = (array, ...item) => {
  for (const i of item) {
    array[arrayLength(array)] = i;
  }

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

export const arrayMap = (array, callbackFn) => {
  const result = [];

  for (const a of array) {
    arrayPush(result, callbackFn(a));
  }

  return result;
};

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

export const arrayReduce = (array, callbackFn, initialValue) => {
  const copyArray = [];
  for (const i of array) {
    arrayPush(copyArray, i);
  }

  if (!initialValue) {
    let index = 0;
    for (const i of copyArray) {
      if (index < arrayLength(copyArray) - 1) {
        copyArray[index + 1] = callbackFn(i, copyArray[index + 1]);
        index++;
      }
    }

    const result = copyArray[arrayLength(copyArray) - 1];
    return result;
  }

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
};

export const arrayIndexOf = (array, value) => {
  let i = 0;
  for (const a of array) {
    if (a === value) {
      return i;
    }

    i++;
  }

  return -1;
};

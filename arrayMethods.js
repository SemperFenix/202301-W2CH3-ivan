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

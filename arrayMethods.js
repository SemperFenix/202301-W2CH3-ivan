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

const array = [1, 2, 3, 4];
console.log(arrayUnshift(array, 7, 8, 9, 10, 11), array);

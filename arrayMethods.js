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

export const arrayUnshift = (array, arg) => {
  for (let i = arrayLength(array); i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = arg;
  return arrayLength(array);
};

// eslint-disable-next-line prefer-const
let array = ["a", "b", "c"];

console.log(arrayUnshift(array, "d"), array);

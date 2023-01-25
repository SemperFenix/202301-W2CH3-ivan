export const arrayLength = (array) => {
  let i = 0;
  while (array[i] !== undefined) {
    i++;
  }

  return i;
};

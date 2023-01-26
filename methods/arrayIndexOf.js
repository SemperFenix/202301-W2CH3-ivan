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

export const arrayIncludes = (array, value) => {
  for (const a of array) {
    if (a === value) {
      return true;
    }
  }

  return false;
};

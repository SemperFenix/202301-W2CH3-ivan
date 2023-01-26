import { arrayPush } from "./arrayPush";
export const arrayFilter = (array, callbackFn) => {
  const result = [];

  for (const a of array) {
    if (callbackFn(a) === true) {
      arrayPush(result, a);
    }
  }

  return result;
};

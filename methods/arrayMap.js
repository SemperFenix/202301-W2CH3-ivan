import { arrayPush } from "./arrayPush";
export const arrayMap = (array, callbackFn) => {
  const result = [];

  for (const a of array) {
    arrayPush(result, callbackFn(a));
  }

  return result;
};

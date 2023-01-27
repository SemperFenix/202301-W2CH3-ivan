import { arrayEvery } from "./methods/arrayEvery.js";
import { arrayFilter } from "./methods/arrayFilter.js";
import { arrayFind } from "./methods/arrayFind.js";
import { arrayFindIndex } from "./methods/arrayFindIndex.js";
import { arrayIncludes } from "./methods/arrayIncludes.js";
import { arrayIndexOf } from "./methods/arrayIndexOf.js";
import { arrayLength } from "./methods/arrayLength.js";
import { arrayMap } from "./methods/arrayMap.js";
import { arrayPop } from "./methods/arrayPop.js";
import { arrayPush } from "./methods/arrayPush.js";
import { arrayReduce } from "./methods/arrayReduce.js";
import { arrayShift } from "./methods/arrayShift.js";
import { arraySome } from "./methods/arraySome.js";
import { arrayUnshift } from "./methods/arrayUnshift.js";
import { arrayJoin } from "./methods/arrayJoin.js";

// Test for arrayLength
describe("Given the arrayLength function", () => {
  describe("When we give it an array", () => {
    test("Then it should return the number of items", () => {
      const array = ["a", "b", "c"];
      const r = arrayLength(array);
      const result = 3;
      expect(r).toBe(result);
    });
  });
});

// Double test for arrayPush
describe("Given the arrayPush function", () => {
  describe("When we give it an item", () => {
    test("Then it should return the new array length (original + number of elements) and the array to change", () => {
      const array = ["a", "b", "c"];
      const r = arrayPush(array, "d");
      const result = 4;
      expect(r).toBe(result);
      expect(array).toEqual(["a", "b", "c", "d"]);

      const array2 = ["a", "b", "c"];
      const r2 = arrayPush(array2, "d", "e", "f");
      const result2 = 6;
      expect(r2).toBe(result2);
      expect(array2).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
  });
});

// Tesat for arrayPop
describe("Given the arrayPop function", () => {
  describe("When we call it", () => {
    test("Then it should return the deleted element and take it from the original array or undefined if it is empty", () => {
      const array = ["a", "b", "c", "d"];
      const r = arrayPop(array);
      const result = "d";
      expect(r).toBe(result);
      expect(array).toEqual(["a", "b", "c"]);

      const array2 = [];
      const r2 = arrayPop(array2);
      expect(r2).toBe(undefined);
    });
  });
});

// Double test for arrayUnshift to check if it's able to take any number of parameters
describe("Given the arrayUnshift function", () => {
  describe("When we call it", () => {
    test("Then it should return the array with the added value/s in the beggining", () => {
      const array = ["a", "b", "c"];
      const value1 = "d";
      const r = arrayUnshift(array, value1);
      const result = 4;
      expect(r).toBe(result);
      expect(array).toEqual(["d", "a", "b", "c"]);

      const array2 = ["a", "b", "c"];
      const value2 = "d";
      const value3 = "e";
      const value4 = "f";
      const r2 = arrayUnshift(array2, value2, value3, value4);
      const result2 = 6;
      expect(r2).toBe(result2);
      expect(array2).toEqual(["d", "e", "f", "a", "b", "c"]);
    });
  });
});

// Test for arrayShift
describe("Given the arrayShift function", () => {
  describe("When we give it an item", () => {
    test("Then it should return the new length (original - 1 and the array should not have the first value", () => {
      const array = ["a", "b", "c"];
      const r = arrayShift(array);
      const result = 2;
      expect(r).toBe(result);
      expect(array).toEqual(["b", "c"]);
    });
  });
});

// Double test for arraySome
describe("Given the arraySome function", () => {
  describe("When we give it a function", () => {
    test("Then it should return true if any element of the array matches and false if not ", () => {
      const array = ["a", "b", "c"];
      const element = "b";
      const compare = (a) => a === element;

      const r = arraySome(array, compare);
      const result = true;
      expect(r).toBe(result);

      const element2 = "d";
      const compare2 = (a) => a === element2;

      const r2 = arraySome(array, compare2);
      const result2 = false;
      expect(r2).toBe(result2);
    });
  });
});

// Double test for arrayEvery
describe("Given the arrayEvery function", () => {
  describe("When we give it a value", () => {
    test("Then it should return true if any element of the array matches and false if not ", () => {
      const array = [2, 4, 6];
      const compare = (a) => a < 10;
      const r = arrayEvery(array, compare);
      const result = true;
      expect(r).toBe(result);

      const compare2 = (a) => a > 10;
      const r2 = arrayEvery(array, compare2);
      const result2 = false;
      expect(r2).toBe(result2);
    });
  });
});

// Double test for arrayFind
describe("Given the arrayFind function", () => {
  describe("When we give it a value or testing function", () => {
    test("Then it should return the first element that satisfies the provided testing function", () => {
      const array = [2, 4, 6];
      const search = (a) => a > 3;
      const r = arrayFind(array, search);
      const result = 4;
      expect(r).toBe(result);

      const compare2 = (a) => a < 1;
      const r2 = arrayFind(array, compare2);
      const result2 = undefined;
      expect(r2).toBe(result2);
    });
  });
});

// Test for arrayFilter
describe("Given the arrayFilter function", () => {
  describe("When we give it a testing function", () => {
    test("Then it should return every element that satisfies the provided testing function", () => {
      const array = [2, 4, 6];
      const search = (a) => a > 3;
      const r = arrayFilter(array, search);
      const result = [4, 6];
      expect(r).toEqual(result);

      const compare2 = (a) => a < 1;
      const r2 = arrayFilter(array, compare2);
      expect(r2).toEqual([]);
    });
  });
});

// Test for arrayMap
describe("Given the arrayMap function", () => {
  describe("When we give it a function", () => {
    test("Then it should return a new array where every element has been passed by the function", () => {
      const array = [2, 4, 6];
      const multiply = (a) => a * 3;
      const r = arrayMap(array, multiply);
      const result = [6, 12, 18];
      expect(r).toEqual(result);
    });
  });
});

// Test for arrayFindIndex
describe("Given the arrayFindIndex function", () => {
  describe("When we gives it a value or testing function", () => {
    test("Then it should return the index of the first element that satisfies the provided testing function or -1 if there is none", () => {
      const array = [2, 4, 6];
      const search = (a) => a > 4;
      const r = arrayFindIndex(array, search);
      const result = 2;
      expect(r).toBe(result);

      const compare2 = (a) => a < 1;
      const r2 = arrayFindIndex(array, compare2);
      const result2 = -1;
      expect(r2).toBe(result2);
    });
  });
});

// Test for arrayReduce
describe("Given the arrayReduce function", () => {
  describe("When we gives it a value or testing function", () => {
    test("Then it should return the index of the first element that satisfies the provided testing function or -1 if there is none", () => {
      const array = [2, 4, 6];
      const summ = (acc, current) => acc + current;
      const r = arrayReduce(array, summ);
      const result = 12;
      expect(r).toBe(result);

      const initialValue = 2;
      const r2 = arrayReduce(array, summ, initialValue);
      const result2 = 14;
      expect(r2).toBe(result2);

      // Const array2 = [
      //   [0, 1],
      //   [2, 3],
      //   [4, 5],
      // ];
      // const concate = (acc, current) => {
      //   acc.concat(current);
      // };

      // const r3 = arrayReduce(array2, concate, []);
      // expect(r3).toEqual([0, 1, 2, 3, 4, 5]);
    });
  });
});

// Test for arrayIndexOf
describe("Given the arrayIndexOf function", () => {
  describe("When we give it a value", () => {
    test("Then it should return the index of the first element that equals the provided value", () => {
      const array = [2, 4, 4, 6];
      const r = arrayIndexOf(array, 4);
      const result = 1;
      expect(r).toBe(result);

      const r2 = arrayIndexOf(array, 7);
      const result2 = -1;
      expect(r2).toBe(result2);
    });
  });
});

// Test for arrayIncludes
describe("Given the arrayIncludes function", () => {
  describe("When we give it a value", () => {
    test("Then it should return true if any element of the array matches and false if not ", () => {
      const array = ["a", "b", "c"];

      const r = arrayIncludes(array, "b");
      const result = true;
      expect(r).toBe(result);

      const r2 = arrayIncludes(array, "d");
      const result2 = false;
      expect(r2).toBe(result2);
    });
  });
});

// Test for arrayJoin
describe("Given the arrayJoin function", () => {
  describe("When we give it an array and an optional element", () => {
    test("Then it should return a string where each array item is separated by commas or with the element (if provided)", () => {
      const array = ["a", "b", "c"];
      const res = arrayJoin(array);
      expect(res).toBe("a,b,c");
      const element = "|";
      const r = arrayJoin(array, element);
      const result = "a|b|c";
      expect(r).toBe(result);
    });
  });
});

import * as arr from "./arrayMethods";

// Test for arrayLength
describe("Given a function", () => {
  describe("When array has 3 items", () => {
    test("Then it should return the number of items", () => {
      const array = ["a", "b", "c"];
      const r = arr.arrayLength(array);
      const result = 3;
      expect(r).toBe(result);
    });
  });
});

// Double test for arrayPush
describe("Given a function", () => {
  describe("When we give it an item", () => {
    test("Then it should return the new array length (original + number of elements) and the array to change", () => {
      const array = ["a", "b", "c"];
      const r = arr.arrayPush(array, "d");
      const result = 4;
      expect(r).toBe(result);
      expect(array).toEqual(["a", "b", "c", "d"]);

      const array2 = ["a", "b", "c"];
      const r2 = arr.arrayPush(array2, "d", "e", "f");
      const result2 = 6;
      expect(r2).toBe(result2);
      expect(array2).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
  });
});

// Tesat for arrayPop
describe("Given a function", () => {
  describe("When we call it", () => {
    test("Then it should return the deleted element and take it from the original array", () => {
      const array = ["a", "b", "c", "d"];
      const r = arr.arrayPop(array);
      const result = "d";
      expect(r).toBe(result);
      expect(array).toEqual(["a", "b", "c"]);
    });
  });
});

// Double test for arrayUnshift to check if it's able to take any number of parameters
describe("Given a function", () => {
  describe("When we call it", () => {
    test("Then it should return the array with the added value/s in the beggining", () => {
      const array = ["a", "b", "c"];
      const value1 = "d";
      const r = arr.arrayUnshift(array, value1);
      const result = 4;
      expect(r).toBe(result);
      expect(array).toEqual(["d", "a", "b", "c"]);

      const array2 = ["a", "b", "c"];
      const value2 = "d";
      const value3 = "e";
      const value4 = "f";
      const r2 = arr.arrayUnshift(array2, value2, value3, value4);
      const result2 = 6;
      expect(r2).toBe(result2);
      expect(array2).toEqual(["d", "e", "f", "a", "b", "c"]);
    });
  });
});

describe("Given a function", () => {
  describe("When we call it", () => {
    test("Then it should return the array with the added value/s in the beggining", () => {
      const array = ["a", "b", "c"];
      const value1 = "d";
      const value2 = "e";
      const value3 = "f";
      const r = arr.arrayUnshift(array, value1, value2, value3);
      const result = 6;
      expect(r).toBe(result);
      expect(array).toEqual(["d", "e", "f", "a", "b", "c"]);
    });
  });
});

// Test for arrayShift
describe("Given a function", () => {
  describe("When we give it an item", () => {
    test("Then it should return the new length (original - 1 and the array should not have the first value", () => {
      const array = ["a", "b", "c"];
      const r = arr.arrayShift(array);
      const result = 2;
      expect(r).toBe(result);
      expect(array).toEqual(["b", "c"]);
    });
  });
});

// Double test for arraySome
describe("Given a function", () => {
  describe("When we gives it a value", () => {
    test("Then it should return true if any element of the array matches and false if not ", () => {
      const array = ["a", "b", "c"];
      const element = "b";
      const compare = (a) => a === element;

      const r = arr.arraySome(array, compare);
      const result = true;
      expect(r).toBe(result);

      const element2 = "d";
      const compare2 = (a) => a === element2;

      const r2 = arr.arraySome(array, compare2);
      const result2 = false;
      expect(r2).toBe(result2);
    });
  });
});

// Double test for arrayEvery
describe("Given a function", () => {
  describe("When we gives it a value", () => {
    test("Then it should return true if any element of the array matches and false if not ", () => {
      const array = [2, 4, 6];
      const compare = (a) => a < 10;
      const r = arr.arrayEvery(array, compare);
      const result = true;
      expect(r).toBe(result);

      const compare2 = (a) => a > 10;
      const r2 = arr.arrayEvery(array, compare2);
      const result2 = false;
      expect(r2).toBe(result2);
    });
  });
});

// Double test for arrayFind
describe("Given a function", () => {
  describe("When we gives it a value or testing function", () => {
    test("Then it should return the first element that satisfies the provided testing function", () => {
      const array = [2, 4, 6];
      const search = (a) => a > 3;
      const r = arr.arrayFind(array, search);
      const result = 4;
      expect(r).toBe(result);

      const compare2 = (a) => a < 1;
      const r2 = arr.arrayFind(array, compare2);
      const result2 = undefined;
      expect(r2).toBe(result2);
    });
  });
});

// Test for arrayFilter
describe("Given a function", () => {
  describe("When we give it a testing function", () => {
    test("Then it should return every element that satisfies the provided testing function", () => {
      const array = [2, 4, 6];
      const search = (a) => a > 3;
      const r = arr.arrayFilter(array, search);
      const result = [4, 6];
      expect(r).toEqual(result);

      const compare2 = (a) => a < 1;
      const r2 = arr.arrayFilter(array, compare2);
      expect(r2).toEqual([]);
    });
  });
});

// Test for arrayMap
describe("Given a function", () => {
  describe("When we give it a function", () => {
    test("Then it should return a new array where every element has been passed by the function", () => {
      const array = [2, 4, 6];
      const multiply = (a) => a * 3;
      const r = arr.arrayMap(array, multiply);
      const result = [6, 12, 18];
      expect(r).toEqual(result);
    });
  });
});

// Test for arrayFindIndex
describe("Given a function", () => {
  describe("When we gives it a value or testing function", () => {
    test("Then it should return the index of the first element that satisfies the provided testing function or -1 if there is none", () => {
      const array = [2, 4, 6];
      const search = (a) => a > 4;
      const r = arr.arrayFindIndex(array, search);
      const result = 2;
      expect(r).toBe(result);

      const compare2 = (a) => a < 1;
      const r2 = arr.arrayFindIndex(array, compare2);
      const result2 = -1;
      expect(r2).toBe(result2);
    });
  });
});

// Test for arrayReduce
describe("Given a function", () => {
  describe("When we gives it a value or testing function", () => {
    test("Then it should return the index of the first element that satisfies the provided testing function or -1 if there is none", () => {
      const array = [2, 4, 6];
      const summ = (acc, current) => acc + current;
      const r = arr.arrayReduce(array, summ);
      const result = 12;
      expect(r).toBe(result);

      const initialValue = 2;
      const r2 = arr.arrayReduce(array, summ, initialValue);
      const result2 = 14;
      expect(r2).toBe(result2);
    });
  });
});

// Test for arrayIndexOf
describe("Given a function", () => {
  describe("When we give it a value", () => {
    test("Then it should return the index of the first element that equals the provided value", () => {
      const array = [2, 4, 4, 6];
      const r = arr.arrayIndexOf(array, 4);
      const result = 1;
      expect(r).toBe(result);
    });
  });
});

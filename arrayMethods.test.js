import * as arr from "./arrayMethods";

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

describe("Given a function", () => {
  describe("When we give it an item", () => {
    test("Then it should return the new array length (original + 1)", () => {
      const array = ["a", "b", "c"];
      const r = arr.arrayPush(array, "d");
      const result = 4;
      expect(r).toBe(result);
    });
  });
});

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

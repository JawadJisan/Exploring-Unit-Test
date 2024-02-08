import { expect, it } from "vitest";
import { add } from "./math";

// it("should return the correct sum if an array of number is provided", () => {
//   const result = add([1, 2, 3]);

//   expect(result).toBe(6);
// });

// AAA pattern
it("should return the correct sum if an array of number is provided", () => {
  // Arrange
  const number = [1, 5, 6, 9, 10];
  const expectedResult = number.reduce((prev, curr) => prev + curr);

  // Action
  const result = add(number);

  // Assertion
  expect(result).toBe(expectedResult);
});

it("should provide NaN if at least one invalid number is provided", () => {
  // Arrange
  const number = [1, 5, "invalid", 9, 10];

  // Action
  const result = add(number);

  // Assertion
  expect(result).toBeNaN();
});

it("should provide correct sum if an array numeric string is provided", () => {
  // Arrange
  const number = ["1", "5", "6", "9", "10"];
  const expectedResult = number.reduce((prev, curr) => +prev + +curr);

  // Action
  const result = add(number);

  // Assertion
  expect(result).toBe(expectedResult);
});

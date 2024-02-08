import { expect, it } from "vitest";
import { transformToNumber } from "./transformToNumber";

it("should return a number if a numeric string is provided", () => {
  const stringNumber = "5";
  const result = transformToNumber(stringNumber);
  expect(result).toBe(5);
});

// Multiple Assertions
it("should return a number if a numeric string is provided", () => {
  const stringNumber = "5";
  const result = transformToNumber(stringNumber);
  expect(result).toBe(5);
  expect(isNaN(result)).not.toBe(true);
});

import { expect, it } from "vitest";
import { stringLength } from "./stringLength";

it("should return correct length for non empty string", () => {
  // Arrange
  const input = "Hello World";
  const input2 = "Hello new World";
  // Action
  const result = stringLength(input);
  const result2 = stringLength(input2);
  // Assert
  expect(result).toBe(11);
  expect(result2).toBe(15);
});

it("should return zero for empty string", () => {
  expect(stringLength("")).toBe(0);
});

it("should throws error fox non-string input", () => {
  expect(() => stringLength(null)).toThrow();
  expect(() => stringLength(undefined)).toThrow();
  expect(stringLength(123)).toBeUndefined();
});

import { describe, expect, it } from "vitest";
import { validateArrayNonEmpty } from "./validation";

describe("validationEmail()", () => {
  // it("should validate a correct email address", () => {
  //   const email = "abc@hmail.com";
  //   const resultFn = () => validationEmail(email);
  //   expect(resultFn).not.toThrow();
  // });
  // it("should throw an error for a null emil address", () => {
  //   expect(() => validationEmail(null)).toThrow("invalid emil address");
  // });
});

describe("validateArrayNonEmpty()", () => {
  it("should validate a non-empty array", () => {
    const arr = [2, 5];
    const resultFn = () => validateArrayNonEmpty(arr);
    expect(resultFn).not.toThrow();
  });
});

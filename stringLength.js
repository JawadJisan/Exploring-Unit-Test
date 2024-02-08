export const stringLength = (str) => str.length;

export function validateArrayNonEmpty(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
}

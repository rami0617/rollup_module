import ERROR_MESSAGES from "../common/index";

export default function throwError(a: any, b: any) {
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
}

import throwError from "./throw-error";
import ERROR_MESSAGES from "../common/index";

export function addNumber(a: number, b: number) {
  throwError(a, b);

  if (a === 0) return b;
  if (b === 0) return a;

  return a + b;
}

export function minusNumber(a: number, b: number) {
  throwError(a, b);

  if (b === 0) return a;

  return a - b;
}

export function multiplyNumber(a: number, b: number) {
  throwError(a, b);

  if (a === 0 || b === 0) return 0;

  if (a === 1) return b;
  if (b === 1) return a;

  return a * b;
}

export function divideNumber(a: number, b: number) {
  throwError(a, b);

  if (a === Infinity || b === Infinity)
    throw new Error(ERROR_MESSAGES.INFINITY_AND_NAN);

  if (a === 0) return 0;
  if (b === 0) throw new Error(ERROR_MESSAGES.NO_DIVDIE_ZERO);

  if (b === 1) return a;

  if (!isFinite(a / b))
    throw new Error(ERROR_MESSAGES.RESULT_IS_INFINITY_AND_NAN);

  return a / b;
}

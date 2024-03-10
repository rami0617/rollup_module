import ERROR_MESSAGES from "../common/index";

export default class Calculate {
  static executeOperation(
    operation: (a: number, b: number) => number,
    a: number,
    b: number
  ) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }

    return operation(a, b);
  }

  static addNumber(a: number, b: number) {
    if (a === 0) return b;
    if (b === 0) return a;

    return a + b;
  }

  static minusNumber(a: number, b: number) {
    if (b === 0) return a;

    return a - b;
  }

  static multiplyNumber(a: number, b: number) {
    if (a === 0 || b === 0) return 0;

    if (a === 1) return b;
    if (b === 1) return a;

    return a * b;
  }

  static divideNumber(a: number, b: number) {
    if (a === Infinity || b === Infinity)
      throw new Error(ERROR_MESSAGES.INFINITY_AND_NAN);

    if (a === 0) return 0;
    if (b === 0) throw new Error(ERROR_MESSAGES.NO_DIVDIE_ZERO);

    if (b === 1) return a;

    if (!isFinite(a / b))
      throw new Error(ERROR_MESSAGES.RESULT_IS_INFINITY_AND_NAN);

    return a / b;
  }
}

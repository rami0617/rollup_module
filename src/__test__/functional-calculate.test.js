const { default: ERROR_MESSAGES } = require("../common");
const {
  addNumber,
  minusNumber,
  multiplyNumber,
  divideNumber,
} = require("../main");

test("1. addNumber", () => {
  expect(() => {
    addNumber("1", "1");
  }).toThrowError(ERROR_MESSAGES.INVALID_NUMBER);

  expect(addNumber(1, 1)).toBe(2);
});

test("2. minusNumber", () => {
  expect(() => {
    minusNumber("1", "1");
  }).toThrowError(ERROR_MESSAGES.INVALID_NUMBER);

  expect(minusNumber(1, 1)).toBe(0);
});

test("3. multiplyNumber", () => {
  expect(() => {
    multiplyNumber("1", "1");
  }).toThrowError(ERROR_MESSAGES.INVALID_NUMBER);

  expect(multiplyNumber(1, 1)).toBe(1);
  expect(multiplyNumber(1, 0)).toBe(0);
});

test("4. divideNumber", () => {
  expect(() => {
    divideNumber("1", "2");
  }).toThrowError(ERROR_MESSAGES.INVALID_NUMBER);

  expect(() => {
    divideNumber(1, 0);
  }).toThrowError(ERROR_MESSAGES.NO_DIVDIE_ZERO);

  expect(() => {
    divideNumber(Infinity, 1);
  }).toThrowError(ERROR_MESSAGES.INFINITY_AND_NAN);

  expect(() => {
    divideNumber(NaN, 1);
  }).toThrowError(ERROR_MESSAGES.INVALID_NUMBER);

  expect(divideNumber(1, 1)).toBe(1);
});

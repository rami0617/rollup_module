const { default: ERROR_MESSAGES } = require("../common");
const { Calculate } = require("../main");

test("1. addNumber", () => {
  expect(() => {
    Calculate.executeOperation(Calculate.addNumber, 1, "1");
  }).toThrowError(ERROR_MESSAGES.INVALID_NUMBER);

  expect(Calculate.executeOperation(Calculate.addNumber, 1, 1)).toBe(2);
});

test("2. minusNumber", () => {
  expect(() => {
    Calculate.executeOperation(Calculate.minusNumber, 1, "1");
  }).toThrowError(ERROR_MESSAGES.INVALID_NUMBER);

  expect(Calculate.executeOperation(Calculate.minusNumber, 1, 1)).toBe(0);
});

test("3. multiplyNumber", () => {
  expect(() => {
    Calculate.executeOperation(Calculate.multiplyNumber, 1, "1");
  }).toThrowError(ERROR_MESSAGES.INVALID_NUMBER);

  expect(Calculate.executeOperation(Calculate.multiplyNumber, 1, 1)).toBe(1);
});

test("4. multiplyNumber", () => {
  expect(() => {
    Calculate.executeOperation(Calculate.divideNumber, 1, "1");
  }).toThrowError(ERROR_MESSAGES.INVALID_NUMBER);

  expect(() => {
    Calculate.executeOperation(Calculate.divideNumber, 1, 0);
  }).toThrowError(ERROR_MESSAGES.NO_DIVDIE_ZERO);
  expect(() => {
    Calculate.executeOperation(Calculate.divideNumber, Infinity, 0);
  }).toThrowError(ERROR_MESSAGES.INFINITY_AND_NAN);

  expect(Calculate.executeOperation(Calculate.divideNumber, 1, 1)).toBe(1);
});

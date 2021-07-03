/* eslint-disable prefer-destructuring */
const myModule = require('./functions');

const capitalize = myModule.capitalize;
const reverseString = myModule.reverseString;
const calculator = myModule.calculator;

test('Pass one', () => {
  expect(capitalize('sebastian')).toBe('Sebastian');
});
test('Pass two', () => {
  expect(reverseString('sebastian')).toBe('naitsabes');
});
test('calculatorsum', () => { expect(calculator.suma(3, 3)).toBe(6); });
test('calculatorrest', () => { expect(calculator.resta(3, 3)).toBe(0); });
test('calculatordivision', () => { expect(calculator.division(3, 3)).toBe(1); });
test('calculatormultiplicacion', () => { expect(calculator.multiplicacion(3, 3)).toBe(9); });

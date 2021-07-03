/* eslint-disable prefer-destructuring */
const myModule = require('./functions');

const capitalize = myModule.capitalize;
const reverseString = myModule.reverseString;
const calculator = myModule.calculator;
const caesarCipher = myModule.caesarCipher;

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

test('ceasarCipherEasy', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});
test('ceasarCipherMedium', () => {
  expect(caesarCipher('Z.o.o', 5)).toBe('E.t.t');
});
test('ceasarCipherCaseExtreme', () => {
  expect(caesarCipher('Z.e.B.a.S.t.i.A.n', 9)).toBe('I.n.K.j.B.c.r.J.w');
});

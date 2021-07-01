/* eslint-disable prefer-destructuring */
const myModule = require('./functions');

const capitalize = myModule.capitalize;
const reverseString = myModule.reverseString;

it('Pass one', () => {
  expect(capitalize('sebastian')).toBe('Sebastian');
});
it('Pass two', () => {
  expect(reverseString('sebastian')).toBe('naitsabes');
});

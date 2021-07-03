function capitalize(string) {
  return string.replace(string[0], string[0].toUpperCase());
}

function reverseString(string) {
  let newString = '';
  for (let i = (string.length - 1); i !== -1; i -= 1) {
    newString += string[i];
  }
  return newString;
}
const calculator = {};
calculator.suma = (a, b) => a + b;
calculator.resta = (a, b) => a - b;
calculator.division = (a, b) => a / b;
calculator.multiplicacion = (a, b) => a * b;
module.exports = {
  capitalize,
  reverseString,
  calculator,
};

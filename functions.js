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

function caesarCipher(string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';
  // funcion para respetar Case original
  function keepCase(original, newValue) {
    if (original === original.toLowerCase()) {
      return newValue.toLowerCase();
    }
    return newValue.toUpperCase();
  }
  // logica para sumar puntos
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '.') {
      newString += '.';
    }
    for (let j = 0; j < alphabet.length; j += 1) {
      if (string[i].toLowerCase() === alphabet[j]) {
        // logica para seleccionar index negativo
        if (alphabet[j + key] === undefined) {
          const negativeIndex = (j + key) % alphabet.length;
          newString += keepCase(string[i], alphabet[negativeIndex]);
        } else {
          newString += keepCase(string[i], alphabet[j + key]);
        }
      }
    }
  }
  return newString;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
};

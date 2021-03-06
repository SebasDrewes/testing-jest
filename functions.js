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
  for (let i = 0; i < string.length; i += 1) {
    // logica para no modificar valores no alfabeticos
    if (alphabet.includes(string[i].toLowerCase()) === false) {
      newString += string[i];
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
function analyze(array) {
  const { length } = array;
  let sumOfArray = 0;
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
    sumOfArray += array[i];
  }
  const average = sumOfArray / length;
  return {
    average,
    min,
    max,
    length,
  };
}
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyze,
};

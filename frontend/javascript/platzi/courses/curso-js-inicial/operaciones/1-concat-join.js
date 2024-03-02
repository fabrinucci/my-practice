// Combinar con concat forma 1

const morseCode1 = ['....', '---'];
const morseCode2 = ['.-..', '.-'];
const morseCodeMessage = morseCode1.concat(morseCode2);

console.log(morseCode1); // ['....', '---']
console.log(morseCode2); // ['.-..', '.-']
console.log(morseCodeMessage); // [ '....', '---', '.-..', '.-' ]

// Combinar con concat forma 2
const morseCodeMessage2 = [].concat(morseCode1, morseCode2);
console.log(morseCodeMessage); // [ '....', '---', '.-..', '.-' ]

// Combinar con spread operator
function combineMorseMessages(morseCode1, morseCode2) {
  console.log([...morseCode1, ...morseCode2]);
}
combineMorseMessages(morseCode1, morseCode2); // [ '....', '---', '.-..', '.-' ]

const numbers = [1, 2, 3];
const string = 'string';
combineMorseMessages(numbers, string); // [1, 2, 3, 's', 't', 'r', 'i', 'n', 'g']

// Uso de join
const morseCodeMessageString = morseCodeMessage.join('');
console.log(morseCodeMessageString); // ....---.-...-

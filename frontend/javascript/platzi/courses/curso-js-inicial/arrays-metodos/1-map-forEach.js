//* Metodos que iteran sobre un array

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(squaredNumbers); // [ 1, 4, 9, 16, 25 ]

const colors = ['red', 'pink', 'blue'];
const iteratedColors = colors.forEach((color) => console.log(color));
console.log(colors); // ['red', 'pink', 'blue']
console.log(iteratedColors); // undefined

const temperaturesInFahrenheit = [32, 68, 95, 104, 212];
const temperaturesInCelsius = temperaturesInFahrenheit.map(
  (fahrenheit) => (5 / 9) * (fahrenheit - 32)
);
console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit); // [ 32, 68, 95, 104, 212 ]
console.log('Temperatures In Celsius: ', temperaturesInCelsius); // [ 0, 20, 35, 40, 100 ]

const newNumbers = [1, 2, 3, 4, 5];
let sum = 0;
newNumbers.forEach((number) => {
  sum += number;
});
console.log('Array of Numbers: ', newNumbers); // [ 1, 2, 3, 4, 5 ]
console.log('Sum of Numbers: ', sum); // 15

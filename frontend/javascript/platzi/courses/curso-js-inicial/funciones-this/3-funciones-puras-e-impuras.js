/*
En las funciones puras, dada una misma entrada (input), obtendremos una misma salida (output). 
Por otro lado, las funciones puras no tienen efectos secundarios (side effects).

*/

function sum(a, b) {
  return a + b;
}

function sum(a, b) {
  console.log('A: ', a);
  return a + b;
}

let total = 0;

function sumWithSideEffect(a) {
  total += a;
  return total;
}

function square(x) {
  return x * x;
}

function addTen(y) {
  return y + 10;
}

const number = 5;
const finalResut = addTen(square(number));
console.log(finalResut);

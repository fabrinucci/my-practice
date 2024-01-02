function sum(num1, num2) { return num1 + num2 }
function rest(num1, num2) { return num1 - num2 }
function mult(num1, num2) { return num1 * num2 }
function div(num1, num2) { return num1 / num2 }

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(20,5, sum)); //output: 25
console.log(calc(20,5, rest)); //output: 15
console.log(calc(20,5, mult)); //output: 100
console.log(calc(20,5, div)); //output: 4
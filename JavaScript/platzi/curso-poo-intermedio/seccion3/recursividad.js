// con un ciclo
let number = 0;

while(number < 5) {
  console.log(number);
  number++
}

// con recursividad
function recursiva(number) {
  console.log(number);
  if(number < 5) {
    return recursiva(number + 1);
  } else {
    return 5;
  }
}

console.log(recursiva(0));


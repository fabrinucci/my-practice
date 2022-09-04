function* iterate(array, array2){
  for (let value of array){
      yield value;
  }
  for(let value2 of array2){
      yield value2;
  }
}

const it = iterate(
  ['Angel','Juan'], 
  ['Angela', 'Juana']
);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
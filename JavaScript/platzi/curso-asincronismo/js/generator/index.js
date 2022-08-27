function* gen() {
  yield 1;
  yield 2;
}

const g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // undefined

function* iterate( array ) {
  for( let value of array) {
    yield value;
  }
} 

const it = iterate(['ana', 'julio', 'pedro', 'maria', 'luisa']);
console.log(it.next().value); // ana
console.log(it.next().value); // julio
console.log(it.next().value); // pedro
console.log(it.next().value); // maria
console.log(it.next().value); // luisa
console.log(it.next().value); // undefined


function* counterGenerator() {
  let i = 0
  while (true) {
    yield i
    i++
  }
}

const counter = counterGenerator()

console.log(counter.next()) // { value: 0, done: false }
console.log(counter.next()) // { value: 1, done: false }
console.log(counter.next()) // { value: 2, done: false }
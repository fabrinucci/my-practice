// const numbers: number[] = [1,2,2,2];
const numbers: ReadonlyArray<number> = [1,2,2,2];
// ReadonlyArray no permite las mutaciones en el array

numbers.push(9); // agrega al final
numbers.pop(); // elimina al final
numbers.unshift(1); // agrega al comienzo

numbers.filter(()=> {})
numbers.reduce(() => 0)
numbers.map(() => 0)
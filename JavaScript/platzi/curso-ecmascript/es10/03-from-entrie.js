// Ahora se puede cambiar de un array a un objeto
const entries = [
  ["name", "Sime"],
  ["age", 30],
];
console.log("Array original", entries);
// Array origintal [ [ 'name', 'Sime' ], [ 'age', 30 ] ]
console.log("Array transformado a object", Object.fromEntries(entries));
// Array transformado a object { name: 'Sime', age: 30 }
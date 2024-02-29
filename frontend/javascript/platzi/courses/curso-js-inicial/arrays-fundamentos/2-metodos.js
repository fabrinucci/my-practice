//* Metodos que modifican el array original

//- splice
const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato'];
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion');
console.log(vegetables); // [ 'carrot', 'broccoli', 'cucumber', 'onion', 'tomato' ]
console.log(removedVegetables); // [ 'spinach' ]

//- reverse
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(reversedNumbers); // [ 5, 4, 3, 2, 1 ]

//- sort
const unsortedNumbers1 = [4, 18, 1, 62, 34];
const unicodeSortedNumbers = unsortedNumbers1.sort();
console.log(unsortedNumbers1); // [ 1, 18, 34, 4, 62 ]
console.log(unicodeSortedNumbers); // [ 1, 18, 34, 4, 62 ]

const unsortedNumbers2 = [4, 18, 1, 62, 34];
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b);
console.log(unsortedNumbers2); // [ 1, 4, 18, 34, 62 ]
console.log(sortedNumbers); // [ 1, 4, 18, 34, 62 ]

const cities = ['New York', 'Paris', 'Tokyo', 'London'];
const sortedCities = cities.sort();
console.log(cities); // [ 'London', 'New York', 'Paris', 'Tokyo' ]
console.log(sortedCities); // [ 'London', 'New York', 'Paris', 'Tokyo' ]

//- fill
const ages = [21, 35, 45, 50];
console.log(ages.fill(0, 2, 4)); // [ 21, 35, 0, 0 ]
console.log(ages.fill(15, 1)); // [ 21, 15, 15, 15 ]
console.log(ages.fill(15)); // [ 15, 15, 15, 15 ]

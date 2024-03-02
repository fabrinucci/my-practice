const ages = [21, 25, 30, 19, 22];
const allAreAdults = ages.every((age) => age > 20);
const allAreAdults2 = ages.every((age) => age > 18);
console.log(allAreAdults); // false
console.log(allAreAdults2); // true

const atLeastOneIsOver28 = ages.some((age) => age > 28);
const atLeastOneIsOver30 = ages.some((age) => age > 30);
console.log(atLeastOneIsOver28); // true
console.log(atLeastOneIsOver30); // false

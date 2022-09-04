// flat

const array = [1,5,4,2,[2,7,1,[5,1,2,7,9]]]
console.log(array.flat(3));

// flatmap

const arrayFM = [2,5,4,2,8]
console.log(arrayFM.flatMap( value => [value, value * 5]));
// Var

var firstname; // declaracion
firstname = 'Kevin' // asignacion o inicializacion

var lastname = 'Morgan' // declaracion y asignacion
lastname = 'Trent' // reasignacion

var age = 25 // declaracion y asignacion
var age = 30 // redeclaracion y reasignacion

console.log(firstname);
console.log(lastname);
console.log(age);

// Let

let fruit = 'Apple'; // declaracion y asignacion
fruit = 'Lemon' // reasignacion
console.log(fruit);

// let fruit = 'Banana' // It's not posible redeclare let variables


// Const

const game = 'tennis' // declaracion y asignacion 
game = 'volleyball' // reasignacion
console.log(game)

const cart = []
cart.push('Shirt', 'Jogging', 'Shoes')
console.log(cart);

cart.pop('Jogging')
console.log(cart);

/*
En el caso de los Arrays en JavaScript se le puede hacer push, declarandolo con const no solo por que se pueda y ya. En realidad Javascript meneja los Arrays Dinamicos, en otros lenguajes los arrays se pueden hacer estaticos y allí no se puede agregar. Esto tiene que ver con la capacidad de memoria asignada a los arrays, en el caso de los dinamicos la asignacion de memoria se dobla y en el caso de los estaticos, es solo la memoria que se le asigna desde el inicio 
*/
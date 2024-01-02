let isEnable = true;

//no le puedo decir que es un string ni un número
// isEnable = "as";
// isEnable =  123;
isEnable = false;

//forma explicita 
let isNew: boolean = false;
console.log('isNew', isNew);
isNew = true;
console.log('isNew', isNew);

//saca un númeor entre 0 y 1
const random = Math.random();
console.log('random', random);
//vamos a asociar una condición y la asociamos a una variable 
isNew = random >= 0.5 ? true : false;
console.log('isNew', isNew);
//- Condicional if
let nombre = 'Nico';

if (nombre === 'Diego') {
  console.log('Hola Diego');
} else if (nombre === 'Nico') {
  console.log('Hola Nico');
} else {
  console.log('Nombre no encontrado');
}

//- Condicional ternario
const edad = 17;
const mensaje =
  edad >= 18
    ? 'Es mayor de edad, puede pasar'
    : 'Es menor de edad, no puede pasar';
console.log(mensaje);

//- Condicional switch
let expr = 'Uvas';

switch (expr) {
  case 'Naranjas':
    console.log('Las naranjas cuestan $20 el kilo');
    break;
  case 'Manzanas':
    console.log('Las manzanas cuestan $43 el kilo');
    break;
  case 'Bananas':
    console.log('Las bananas cuestan $30 el kilo');
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('Los mangos y las papayas cuestan $ 25 pesos el kilo');
    break;
  default:
    console.log(`Lo siento, no contamos con ${expr}`);
}
console.log('¿Hay algo mas que desees?');

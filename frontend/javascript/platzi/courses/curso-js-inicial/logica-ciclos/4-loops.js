//- Loop for
let list = ['eat', 'sleep', 'code', 'repeat'];

for (let i = 0; i < list.length; i++) {
  console.log('The action you need to do is ' + list[i]);
}

//- Loop forEach
let listaDeFrutas = ['manzana', 'naranja', 'plátano'];
listaDeFrutas.forEach((fruta) => console.log(`Tenemos una ${fruta}`));

//- Loop for of
// for of --> objetos iterables como arrays o strings

let canasta = ['manzana', 'pera', 'naranja', 'uva'];
for (fruta of canasta) {
  console.log('La fruta es una ' + fruta);
}

//- Loop for in
// for in --> objetos enumerables como objetos

const listaDeCompras = { manzana: 5, pera: 3, naranja: 2, uva: 1 };

for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

//- Loop while
let contador1 = 0;

while (contador1 < 10) {
  console.log(contador1);
  contador1++;
}

//- Loop do while
let contador2 = 0;
do {
  console.log(contador2);
  contador2++;
} while (contador2 < 20);

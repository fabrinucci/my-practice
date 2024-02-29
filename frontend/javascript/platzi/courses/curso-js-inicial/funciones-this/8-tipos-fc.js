// 1. Funciones Declarativas (o con nombre):
function suma1(a, b) {
  return a + b;
}

// 2. Funciones Expresivas (o anónimas):
const suma2 = function (a, b) {
  return a + b;
};

// 3. Funciones Flecha:
const suma3 = (a, b) => a + b;

// 4. Funciones Constructoras:
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
const persona1 = new Persona('Juan', 25);

// 5. Funciones de Orden Superior (Higher-Order Functions):

// 6. Funciones Recursivas:
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));

// 7. Funciones Anidadas (Nested Functions):
function exterior() {
  let variableExterior = 'Exterior';
  function interior() {
    console.log(variableExterior);
  }
  interior();
}
exterior();

// 8. Métodos de Objeto:
const objeto = {
  metodo: function () {
    console.log('Hola desde el método');
  },
};
objeto.metodo();

// 9. Funciones Asincrónicas:
async function fetchData() {
  const response = await fetch('<https://api.example.com/data>');
  const data = await response.json();
  console.log(data);
}

// 10. Funciones Puras:
function suma(a, b) {
  return a + b;
}

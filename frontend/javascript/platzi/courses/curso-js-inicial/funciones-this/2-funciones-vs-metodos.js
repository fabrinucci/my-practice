// Capacidades que tienen las funciones

// 1. Pasar funciones como argumentos -> callback
function a() {}
function b(a) {}
b(a);

// 2. Retornar funciones
function a() {
  function b() {}
  return b;
}

// 3. Asignar funciones a variables -> Expresion de funcion
const a = function () {};

// 4. Tener propiedades y metodos
function a() {}
const obj = {};
a.call(obj);

// 5. Anidar funciones
function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();

// Es posible almacenar funciones en objetos?
const rocket = {
  name: 'Falcon 9',
  launchMessage: function launchMessage() {
    console.log('3, 2, 1, Despegue!!!');
  },
};
rocket.launchMessage();

const fnAsync = () =>{
  return new Promise( (resolve, reject) => {
    (true) 
      ? setTimeout(() => resolve('Async!!', 2000))
      : reject(new Error('Error!'));
  });
}

const anotherFn = async () => {
  const something = await fnAsync(); //aquí nos está regresando una promesa
  console.log(something); //se imprime mientras se espera
  console.log('Hello!');
}

console.log('Before'); //al ser la primera orden 'Before' se imprime primero
anotherFn();
console.log('After'); 

/* 
* anotherFn() es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada
- 'After' aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue ejecutandose.

La salida al correr con Run Code queda:
Before
After
Async!!
Hello!
*/
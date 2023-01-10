# Curso Scope y Closures

## Global Scope, Function Scope y Block Scope


La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

* Una variable declarada con var puede ser redeclarada y reasignada.
* Una variable declarada con let puede ser reasignada, pero no redeclarada.
* Una variable declarada con const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

### Estructuras de datos declaradas con const

Las estructuras de datos, como los arrays u objetos, declaradas con const pueden cambiar las referencias de sus elementos, a este concepto se lo denomina mutabilidad. Sin embargo, siguen las mismas reglas ya mencionadas, no puedes redeclarar ni reasignar una variable de estructura de datos.

## Modo Estricto

El modo estricto tiene varios cambios en la semántica normal de JavaScript:

* Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.

* Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.

* Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.

* El modo estricto se aplica a un script completo o a funciones individuales. No se aplica a bloques entre corchetes {}; intentar aplicarlo en tales contextos no hace nada.

## ¿Qué es un Closure?

* Los closures permiten acceder al ámbito de una función exterior desde una función interior. En javascript, los closures se crean cada vez que una función es creada.

* Los closures no son siempre utilizados.

* Un closure es cuando una función accede a una variable fuera de su contexto.

* Al trabajar con closures entra en juego el concepto de alcance de las variables.

Para construir un closure necesitaremos los siguientes requisitos:

* Una función dentro de otra función.

```
function padre() {
  function hijo(){
  }
}
```

* Una variable que se encuentre en la función con el scope superior, donde la función con scope inferior la utilice.

```
function padre() {
  let numero = 5
  function hijo(){
    numero = numero + 1
    return numero
  }
}
```

* Invocar la función con scope inferior en otro scope del que fue escrita. Esto lo podemos hacer retornando la función entera y asignar la función de scope superior a una variable.

```
function padre() {
  let numero = 5
  function hijo() {
    numero = numero + 1
    return numero
  }
  
  return hijo
}
const closure = padre()
```

De esta manera obtendremos una función (scope inferior) que tiene una referencia a la variable que se encontraba en un scope superior, que a su vez recordará el contexto donde fue creada.

### Ámbito léxico
El ámbito léxico se refiere al alcance de una variable, siguiendo la cadena de scopes. Es decir, una variable puede ser accedida desde un nivel inferior hasta uno superior, pero no al contrario.

```
function contador ( i ) {
  let acumulador = i
  function aumentar () {
    console.log(acumulador);
    acumulador = acumulador + 1
  }
  return aumentar
};

const closure = contador(1)
closure() // 1
closure() // 2
closure() // 3

const closure2 = contador(10);
closure2() // 10
closure2() // 11
closure() // 4
```

Podemos asignar la función contador a una variable (_closure_ y _closure2_). Dependiendo del valor que tenga como parámetro, cada variable cambiará el valor inicial por el ámbito léxico, por la que fue originada la variable acumulador que está vinculada con la función aumentar.

## ¿Qué es el Hoisting?

Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

### Hoisting en variables declaradas con var

En el siguiente código, la respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.

console.log(nombre) // undefined
var nombre = "Andres" 
// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"
Hoisting en scope de bloque
Mira el siguiente código y piensa cuál sería el resultado del console.log.

if (true){
  var saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
console.log(despedida)
La respuesta es primero "hola" y luego un error de referencia. Esto sucede por el hoisting, la declaración de la variable saludo se eleva fuera del bloque en un scope superior, que puede ser un scope de función o global.

var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined
Es por eso que var no tiene scope de bloque, y se debe tener cuidado porque puede provocar errores en el código.

Hoisting en funciones
Mira el siguiente código y piensa cuál sería el resultado del console.log.

console.log( saludar() )

function saludar() {
  return "Hola"
}
La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.

// Hoisting
function saludar() {
  return "Hola"
}

console.log( saludar() ) // "Hola"
Pero, lo que realmente sucede es que JavaScript guarda la función en memoria en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.

Hoisting de variables dentro de una función
El hoisting desplaza las declaraciones a la parte superior del scope más cercano, en el caso de una función dentro de otra función, seguiría el siguiente comportamiento.

function scope() {
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  var nombre = "Andres"
  var edad = 20
  for (var i = 0; i< 6; i++) {
  //...
  }
}
JavaScript lo interpretaría como lo siguiente:

function scope() {
  var nombre = undefined
  var edad = undefined
  var i = undefined
  
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  nombre = "Andres"
  edad = 20
  for ( i = 0; i< 6; i++) {
  
  //
  }
}
Hosting en funciones asignadas a variables
Mira el siguiente código y piensa cuál sería el resultado del console.log.

console.log( saludar() )

var saludar = function saludar() {
  return "hola"
}
La respuesta es un error de tipo porque si asignas una función a una variable declarada con var, y la invocas antes declararla, la variable será de tipo undefined y no de función por el hoisting.

var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
  return "hola"
}
Hoisting con let y const
Aunque te haya dicho que el hoisting solo ocurre con declaraciones con var, no es totalmente cierto. El hoisting hará que el intérprete de JavaScript eleve las declaraciones con let y const a la Temporal Dead Zone.

La Temporal Dead Zone es una región del código donde la variable está declarada, pero no es posible acceder a esta, provocando un error de tipo ReferenceError.

console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"
Buenas prácticas para usar hoisting
No utilices var en las declaraciones de variables.
Escribe primero las funciones y luego su invocación.

## Debugging

Debugging es el término para solucionar bugs. Los bugs (“bichos” en inglés) son errores en la aplicación, saber cómo solucionarlos de manera eficiente es clave para tu desarrollo como profesional.

Todo navegador dispone de Dev tools o herramientas de desarrollador, que es un conjunto de características del código de la página web, una de estas es el debugging.

La consola del navegador es importante para ver qué está pasando con el código generado. La consola se muestra con la combinación de teclas F12 / Ctrl + Shift + I / Cmd+Opt+I o clic derecho e “Inspeccionar” en tu navegador preferido (de preferencia Google Chrome).

### Código de ejemplo
```
var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
  }
}
hello();
```

### Palabra reservada debugger

La palabra reservada **debugger** sirve para detener la ejecución del programa, pero solo funciona si el panel de las herramientas de desarrollo está abierto. Este panel te mostrará información sobre el código hasta la línea del debugger.

Ejecuta el código de prueba que contenga la palabra reservada debugger en la consola de tu navegador, puedes hacerlo en una página en blanco tan solo poniendo about:blank como una URL.

```
var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
    debugger // <---- Palabra reservada para debbuging
  }
}

hello();
```

* Al momento de ejecutar el código te aparecerá el panel de debugging.


En el panel de información, existe un apartado “Scope” que muestra el *scope/ de cada variable correspondiente al punto donde la ejecución se detuvo.


### Breakpoints

Los breakpoints son puntos donde la ejecución del programa se parará. Para activarlos se debe dar clic en la línea de código que se desea parar.


### Closures en debugging

Si el código tiene closures, aparecerán en el panel “Scope”.


Para concluir, deberías aprender a utilizar las herramientas de desarrollo web para ser más eficiente, y de esta forma encontrar de manera eficiente la causa de un error o un comportamiento no deseado que provocaría un bug.


## Enlaces complementarios

* scope: https://www.youtube.com/watch?v=s-7C09ymzK8
* closures: https://www.youtube.com/watch?v=JXG_gQ0OF74
* debbug: https://www.youtube.com/watch?v=YpFR8Q2lVDU&t=10s

 ``` 
 nameOfDog("Elmo"); 
 function nameOfDog(name) { console.log(name); }; 
 ```
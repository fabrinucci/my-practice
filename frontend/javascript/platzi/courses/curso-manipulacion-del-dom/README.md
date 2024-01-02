# Curso manipulacion del DOM

https://github.com/jonalvarezz/platzi-dom

## ¿Qué es el DOM?

### Critical Rendering Path
Es donde todo comienza, el proceso que se encarga de convertir en pixeles el HTML, CSS y JS

### DOM(Document Object Model): 
No es mas que un árbol de nodos en el cual esta representado cada una de las etiquetas HTML que colocamos en nuestro proyecto.

En simples palabras: 
* Es una representacion del HTML
* Estructura en forma de arbol de nodos
* Puede ser modificado

### CSSOM(CSS Object Model): 
* Es un conjunto de APIs que permite manipular CSS desde JavaScript. 
* Así como el DOM (Document Object Model) es para HTML, el CSSOM (CSS Object Model) es para CSS. 
* Permite leer y modificar el estilo de CSS de forma dinámica.

Para llegar al dom y cssom ocurre un proceso que se llama Critical Rendering Path, que es la secuencia de pasos que el navegador realiza para convertir el HTML, CSS y JavaScript en píxeles en la pantalla.

## ¿Qué son las API?

Una API es todo lo que sirva para comunicar fácilmente un pedazo de software con otro.

### APIs de terceros

Twitter, por ejemplo, nos proporciona una manera sencilla de mostrar tweets de algún usuario a través de su API. Tan solo tenemos que hacer una petición GET al siguiente Endpoint:

GET https://api.twitter.com/2/users/:id/tweets

### APIs de servicios
Si quisieramos mostrar mapas de Google Maps, tambien podriamos hacerlo a través de su API.

Por ejemplo, para mostrar la ubicación de Sydney, New South Wales, Australia, lo haríamos de la siguiente manera:

```
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
```

Son una manera sencilla de acceder a información o funcionalidades de otro pedazo de código. Es por eso que se les llama **intermediarios** o **puentes**.

## Leer nodos

* parent.getElementById('id') => nos permite obtener un elemento a través de su id.

* parent.getElementsByClassName('class') => obtiene un array con todos los elementos hijos que tengan esa clase, ojo “getElementByClassName” no existe, es decir no podremos obtener solo 1 elemento con esa clase.

* parent.getElementsByTagName('div') => con este método obtenemos una lista o “array list” con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar getElements

* parent.querySelector() => nos permite buscar de 3 formas, con id, clase o tagName. A diferencia de los 2 anteriores este nos devuelve 1 solo elemento, el primero que contenga el valor que se le paso. Id => ('#id'), class => ('.class'), tagName ('div')

* parent.querySelectorAll() => este método retorna una array list con todos los elementos que tengan ese selector (id, class o tagName)

* Casi siempre el elemento “padre o parent” es document. ya que estamos haciendo referencia a todo el DOM, todo el documento y esto en ciertos casos nos permite evitar errores.

## Diferencia entre NodeList y Array

La diferencia entre NodeList y Array, es que el NodeList carece de métodos que si están disponibles en los Arrays, pero podemos pasar esto fácilmente usando el operador de propagación.
```
  const nodeList = document.querySelectorAll("selector css");
  const elementList = [...nodeList];
```

* Recomendación importante:  cada vez que obtengamos un NodeList pásalo a Array ya que los motores de javascript como el motor V8 de google están mas optimizados para Arrays que para NodeList.

## Crear y agregar nodos

Los nodos que podemos agregar son de dos tipos:
* **createElement** -> Crear etiquetas html
* **createTextNode** -> Crear Texto

```
  const h1 = document.createElement("h1");
  const text = document.createTextNode("¡Hola, Mundo!");
```

Como solo creamos, necesitamos formas de agregarlos al DOM, para ello, JavaScript nos provee de estas formas:
* **appendChild**: Agrega un hijo al final algún elemento
```

  const parentElement = document.querySelector("selector"); // Obtengo el elemento padre
  const h3 = document.createElement("h3");                  // Creo el nodo a insertar
  const texto = document.createTextNode("Hola!");           // Creo el texto del nodo
  h3.appendChild(h3);                                       // Inserto el texto al nodo
  parentElement.appendChild(h3);                            // Inserto el nodo al padre
```

* **append**: Es la evolución de appendChild, podemos agregar más de un nodo, puedes agregar texto.
```
  const parentElement = document.querySelector("selector");               // Obtengo el elemento padre
  parentElement.append("agrego un texto", document.createElement("div")); // Agrego al elemento padre
```
* **insertBefore**: Inserta nodos antes del elemento que le pasemos como referencia, **este nodo tiene que ser un hijo DIRECTO del padre**
```
  const parentElement = document.querySelector("selector"); // Obtengo el elemento padre
  const titulo = document.createElement("h1");              // Creo un elemento
  const referencia = document.querySelector("selector");    // Obtengo la referencia
  parentElement.insertBefore(titulo, referencia); // ¡Lo insertamos!
```

* **insertAdjacentElement**: Inserta nodos según las opciones que le pasemos:
beforebegin: Lo inserta antes del nodo
afterbegin: Lo inserta despues del nodo
beforeend: Lo inserta antes de donde finaliza el nodo
afterend: Lo inserta después de donde finaliza el nodo


## Otras formas de agregar

* **node.outerHTML**: Sirve para leer HTML para leer HTML
* **node.innerHTML**: Sirve para escribir HTML

Pero, tienen un problema de seguridad 👀☝️

El problema con estas formas de inserciones es que permiten la inserción **XSS**, es decir, código maligno, y cualquier usuario programador malicioso podría meter scripts molestos, imagina que cada que un usuario llegue a tu página le salga un alert… ¡Sería catastrófico! Siempre sanitiza los inputs de tus usuarios.

https://github.com/gbirke/Sanitize.js/blob/master/README.md

hack: Cuando en el inspector de elementos seleccionas un elemento y en la consola escribes $0, este te devolverá el elemento tal como si lo hubieses seleccionado con document.querySelector().

## Diferencia entre atributos y propiedades

Los atributos de HTML son palabras especiales utilizadas dentro de la etiqueta de apertura, para controlar el comportamiento del elemento. Los atributos de HTML son un modificador de un tipo de elemento de HTML

Propiedad del DOM sera inicializada por los atributos del HTML para posteriormente modificarlas

### Atributo
* Definidas por el HTML
* Constantes
* Solo se usan para iniciar el HTML y las propiedades del DOM
### Propiedad
* Son lo que irán cambiando en JS
* Definidas por el DOM
* Valor de una propiedad es variable


La *diferencia* es que los **atributos** son utilizados unicamente al inicio para representar el html, y estos nunca cambian, mientras que las **propiedades** son la ventana que necesitamos para modificar todo lo que se encuentre en el DOM, y cambian segun se modifique.


Aparte de la cercanía entre los nombres, algunos valores de estos attributes serán iguales a sus propiedades recíprocas (por ejemplo, nodo_x.id === nodo_x.attributes.id), pero no siempre es así (por ejemplo, un input.attribute.value !== input.value, el primero es el valor con el que inicializamos el input, pero el segundo cambiará según el usuario interactúe con él).

https://lenguajejs.com/webcomponents/lit/propiedades-y-atributos/

## Eliminar nodos

Existen tres formas de eliminar un nodo del DOM:

* removeChild: Podemos eliminar un nodo según a un método que proviene del padre y pasamos la referencia a eliminar
```
parent.removeChild(nodoAEliminar)
```

* remove: Es la evolución de remove child. No nos pide ninguna referencia, por lo que no tenemos que referenciar al padre.
```
nodoAEliminar.remove()
```
* replaceChild: Nos permite remplazar un nodo. Primero debemos hacer referencia al padre y luego debemos pasarle como argumentos el nodo que vamos a agregar y despues el que queremos remplazar.
```
parent.replaceChild(nuevoNodo, nodoARemplazar)
```

## Operaciones en lote

Hacer operaciones en el DOM no es gratuito, en librerias o frameworks de JS lo que mas cuesta es hacer operaciones en el DOM, mientras menos operaciones realicemos en el DOM mas rapido andara nuestra aplicacion.

```
for (let i = 0; i < 100; i++) {
  const node = document.createElement('input');
  document.body.appendChild(node)
}
```
Esta manera no es muy optima, ya que cada vez que ejecutamos el ciclo **for** modificamos el **DOM**, por lo que operamos con el **100 VECES**.

Para hacerlo de una forma optima, ejecutando el DOM una sola vez seria la siguiente:
```
const nodoSelector = [];

for (let i = 0; i < 100; i++) {
  const node = document.createElement('input');
  nodoSelector.push(node);
}

document.body.append(...nodeSelector)
```


## Reaccionar a lo que sucede en el DOM

La función addEventListener() nos permite añadir eventos a nuestros elementos, la podemos usar de la siguiente manera:
```
miElemento.addEventListener("evento", manejador)
```
En este caso, el manejador debe ser una función callback que se ejecutará cuando el evento sea disparado. Es muy común verlo como una función anónima:
```
button.addEventListener("click", () => {
	alert("Me has clickado 😄")
})
```
Sin embargo, la mejor práctica es crear funciones por separado, así siempre tendremos una referencia a dicha función (con una función anónima no tenemos nada que la identifique, de ahí su nombre)
```
const miFuncionManejadora = () => {
  alert("Me has clickado 😄")
};

button.addEventListener("click", miFuncionManejadora) 
```
Presta atención como la estamos mandando sin paréntesis, porque de esa forma solo le pasamos la referencia de la función, si le pusieramos paréntesis entonces la estaríamos ejecutando

Y esto tiene la ventaja de que podemos remover los eventos cuando queramos ya que tenemos la referencia de la función manejadora 😄
```
const miFuncionManejadora = () => {
  alert("Me has clickado 😄")
};
```

### Agrego el evento
```
button.addEventListener("click", miFuncionManejadora)
```
### Quito el evento
```
button.removeEventListener("click", miFuncionManejadora)
```
También podemos definir funciones de esta otra manera 👀
```
button.onClick = () => {
  alert("Me has clickado 😄")
}
```
Esta sintaxis es onEvent pero no es muy común y no es muy recomendada.

Como dato adicional, esta es otra forma de añadir eventos desde HTML:

HTML
```
<button onclick="miFuncionManejadora">Clicame</button>
JavaScript

const miFuncionManejadora = () => {
  alert("Me has clickado 😄")
};
```
De esta forma, el botón, mediante un atributo estaría llamando a la función 😄

https://developer.mozilla.org/es/docs/Web/Events

## Event propagation

La propagación de eventos sucede desde el elemento mas interno hacia afuera, la cual se produce cuando tienes puestos algunos eventos en contenedores que son hijos de otro, por ejemplo:
```
<div id="div1">
  <div id="div2">
    <div id="div3">
      Hola
    </div>
  </div>
</div>
```
Si le ponemos un event listener a los 3 divs, y clicas dentro del div 3, también estás clicando el div2 (porque el div3 está dentro del div2), y a su vez estás clicando el div1 (porque estos 2 divs están dentro de div1), por tanto, el evento se va a propagar hacia los 3 divs.

La forma de deterlo es usando el método stopPropagation() que viene dentro del argumento event que cualquier evento nos provee, por tanto, yo puedo decirle al div3: “Oiga, yo solo lo quiero clicar a usted, no a los demás, sí, ya se que usted está dentro de los demás, pero yo solo lo quiero a usted”, de tal forma que al event listener del programation le puedo poner:
```
div3.addEventListener("click", event => {
  event.stopPropagation()
});
```
De esta forma, el evento de div2 y div1 no serán ejecutados

Fun fact 👀: cuando tu defines un elemento con un ID en HTML, en JavaScript se crea automágicamente una variable con ese id que creaste, por eso es completamente posible que yo pueda usar la variable div3 sin tener que seleccionar el elemento.

## Event delegation

La delegación de eventos es básicamente un contenedor padre que le pasa el evento a todos sus hijos (en realidad no se los está pasando, sino que el contenedor padre sigue estando presente en todos los hijos, es por eso que cuando clickeamos a un hijo el evento es disárado).

Entendiendo esto, cuando obtenemos el target podemos saber cuál elemento hijo del padre fue clickeado, por tanto, con una simple condicional puede ver si el elemento clickeado es el que yo quiero.

Ojo: Eso no significa que el evento se quite de los demás elementos hijos, si tu clickeas cualquier otro elemento hijo el evento se va a disparar sí o sí, pero lo que sucede es que la condición del tarjet no se cumple, por eso no hace nada.

Y sabiendo esto, puedes hacer cosas chulas como crear funciones que escuchen eventos dinámicamente, una característica de los eventos es que solo se le aplican a los elementos que están desde el inicio, pero si tu agregas otro nodo desde JavaScript los eventos no se van a escuchar para ese nuevo nodo. Entonces, una técnica que se suele usar es escuchar al padre (o en ocasiones a todo el document) y cada vez que el evento ocurra buscar a todos sus hijos que coincidan con el selector al que queremos aplicarle el evento, de esta forma no importa si los nodos se añaden posteriormente desde JavaScript, el evento será escuchado pues JavaScript directamente irá a buscar todos los nodos hijos que cumplan con dicho selector, por ejemplo:

**HTML**
```
<div id="divPadre">
  <div class="div">
    Hola
  </div>
</div>
```

**JavaScript**
```
document.querySelector(".div").addEventListener("click", () => {
  // Hace algo
})
```
En este caso, si al div padre yo le añadiera desde JavaScript otro elemento con la clase div, el evento **NO** funcionaría:
```
const nuevoDiv = document.createElement("div");
nuevoDiv.className = "div";
nuevoDiv.textContent = "Nuevo div"
divPadre.append(nuevoDiv)
```
Sin emabrgo, al usar la delegación de eventos, puedo escuchar al padre y buscar al hijo que me interesa:
```
nuevoDiv.addEventListener("click", event => {

  if(event.target.classList.contains("div")) {
    // Código
  }

})
```
De esta forma, no importa cuantos elementos nuevos agregues al padre desde JavaScript, esto siempre va a funcionar.

Ahora, si quieres hacer algo más pro, puedes crear una función en el cual tu le pases un selector en específico para usar dentro del div, así solo tienes que llamar a esa función y pasarle el selector de tal manera que se quede escuchando por cualquier elemento nuevo que sea agregado, algo así:
```
eventAll("click", parentElement, elementToListen, () => {
  // Has algo
})
```
Una función de ese tipo sería muy útil, porque así puedo mantener escuchando cada elemento, no importa que se agregue después con JavaScript, y sí, yo ya la cree, de hecho hice una mini librería para escuchar eventos partiendo de esta base, pueden indagar el código aquí:

events.js

Claro, este código está desactualizado porque tiene un pequeño bug y hay ciertos elementos con los que no funciona, pero para eso podemos usar un **MutationObserver** que mire cuando el padre haya sido modificado (se le haya agregado un hijo nuevo) y a ese hijo aplicarle el evento, yo ya lo hice pero se los dejo de tarea si tienen cursiodidad sobre eso 👀


## Intersection Observer

* Cuando se crea el observer de la forma que lo hace el profesor, se define por defecto un umbral = 0 para ejecutar el callback. Es decir, el observer va a validar si la imagen se ve o no se ve (así sea un poquito). Para este ejercicio está perfecto, pero ese umbral es parametrizable si queremos que se ejecute el callback por ejemplo si la imagen se ve en un 50% o más. Para eso hay que pasar un segundo parámetro (un objeto) llamado option: const observer = new IntersectionObserver(callback, option).

* Cuando se ejecuta el callback (que el profesor pasa como arrow function), esta función recibe como parámetro un array que aquí llamamos entries. El profesor dice que en ese array van TODOS los target que el observer está vigilando y no es así. Si hacen la prueba en la consola y en ese callback sólo hacen un console.log(entries), van a ver que siempre imprime un array de 1 posición y esa posición obecede solamente al target que desencadenó el callback (es decir, la imagen que ahora es visible o que dejó de ser visible en la pantalla).

* Dado esto, cuando el profesor hace un filter y un forEach dentro del callback, realmente está usando estos métodos sobre un array de 1 posición.

* Ese array de 1 posición tiene en esa posición un objeto. Este objeto describe el evento que interceptó el observer. Este objeto tiene dos propiedades muy relevantes aquí:
isIntersecting : que si es false indica que ya no está en el viewport y si es true indica que ya es visible en el viewport (aunque sea un poquitico).
target: que indica específicamente cuál elemento (cuál imágen) es la que generó la ejecución del callback.

* Entonces, ejecutar el filter realmente valida si ese único objeto en el array está o no está en el viewport. Si lo está seguimos…

* El forEach accede a ese único objeto (un recorrido bieeen cortico jeje), y con él ejecuta la función que imprime el ‘holis’ en consola. Bien podría haber impreso la imagen que desencadenó el callback si en vez de llamar la función ‘accion’ hiciera entries.filter(isIntersecting).forEach(entry => console.log(entry.target)).

* Finalmente, uno pensaría que el callback del observer se ejecuta sólo cuando se genera el evento que definimos (que la imagen aparezca en el viewport), pero no. El callback se ejecuta siempre que ejecutemos la función observer.observe(target) para cada target más las veces que ese target desencadene el callback después. En el ejercicio del curso no se nota porque el profesor hace un filter, pero si dentro del callback solamente colocan un console.log('hola'), van a ver que cada vez que agregen una imagen se imprime el saludo, así la foto aún no sea visible en el viewport.

![img](https://static.platzi.com/media/user_upload/22-IntersectionObserver-2b1a47aa-8bed-48ed-ba1c-8e83a8a5feac.jpg)

![img](https://static.platzi.com/media/user_upload/intersectionObserver-200bfa6b-10f5-40e1-9385-938f482d6e12.jpg)

https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## jQuery

jQuery fue algo muy hermoso que allá en años anteriores nos ayudó a tener una web más fácil de mantener, estandarizó a muchos navegadores, si algo no funcionaba en un navegador y en otro sí, jQuery hacía que funcionase en los dos, por eso fue tan mágico!

Sin embargo, los navegadores se actualizaron, y hoy en día hacer todo lo que hacía jQuery desde JavaScript nativo ya es muy fácil gracias a la implementación de ECMAScript que desde 2015 nos ha estado trayendo nuevos cambios y funcionalidades a JavaScript, le recomiento tomar el Curso de ECMAScript 6+ para enterarse de todos estos cambios.

De hecho, la noticia de que jQuery ya se estaba dejando de usar tuvo un gran impacto gracias a que GitHub publicó en su blog que se deshacían de jQuery

### ¿Entonces debería seguir usando jQuery o no?

Es una pregunta difícil, porque la verdad depende mucho, si un proyecto ya estaba usando jQuery, no tiene caso que quites jQuery de ahí porque tendrías que rehacer tu app seguramente, y esto en muchos casos no es viable, sobre todo para empresas que ya tienen una web funcionando bajo jQuery. Sin embargo, si planeas iniciar un proyecto desde 0, lo mejor es que ya no uses jQuery, dale una oportunidad a JavaScript, Platzi tiene muchos cursos para aprender JavaScript profesionalmente, tienes toda una Escuela de JavaScript para ello.

El problema de la compatibilidad entre navegadores ya no es tan grande gracias a que existen transpiladores como Babel que permiten dar soporte a nuevas versiones de ECMAScript para la mayoría de los navegadores.

Incluso más allá, existen compiladores ya integrados que te dan la configuración de Babel + WebPack y preprocesadores de CSS como SASS o LESS ya listas y configuradas solo para ser usados, tu simplemente lo instalas, creas tus archivos y estos compiladores generan bundles con el código adaptado para diferentes navegadores, un ejemplo de ellos es Laravel Mix que es el compilador de front-end que usa Laravel para servir sus aplicaciones, y puedes usar Laravel Mix SIN tener que usar Laravel necesariamente (Laravel es un framework de PHP).

Incluso más allá, existen nuevos Frameworks progresivos que ya tienen todo esto integrado y permiten hacer cosas más increíbles como Vue, React, Angular o Svelte Ft.



* Biblia de javascript: https://es.javascript.info/







### ¿En qué momento se construye el DOM?
* Critical Rendering Path.

### Una Web API nos permite…
* Utilizar JS para manipular el DOM.

### Cuál es la diferencia entre el tipo de dato NodeList y Array?
* NodeList no tiene métodos como map, filter o some.

### ¿Qué tipo de dato retorna el selector querySelectorAll?
* NodeList

### La Web API de Intersection Observer permite:
* Hacer visibles elementos en el viewport.

### Al hablar sobre Eventos, la siguiente afirmación es FALSA:
* Solo se puede agregar un evento por nodo.

###¿Cómo se evita que un Evento se siga propagando?

* Utilizando event.stopPropagation() en el nodo donde debe parar.

### La siguiente línea de código, asumiendo que node ni ninguno de sus padres es null:
```
const node = document.querySelector("div"); 
node.parentElement.parentElement.removeChild(node); 
```
* Error, solo se puede eliminar a un hijo directo.
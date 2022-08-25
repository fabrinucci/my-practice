# Curso manipulacion del DOM

https://github.com/jonalvarezz/platzi-dom

## ¿Qué es el DOM?

### DOM(Document Object Model): 
No es mas que un árbol de nodos en el cual esta representado cada una de las etiquetas HTML que nosotros colocamos en nuestro proyecto.

En simples palabras: 
* Es una representacion del HTML
* Estructura en forma de arbol de nodos
* Puede ser modificado

### CSSOM(CSS Object Model): 
* Es un conjunto de APIs que permite manipular CSS desde JavaScript. 
* Así como el DOM (Document Object Model) es para HTML, el CSSOM (CSS Object Model) es para CSS. 
* Permite leer y modificar el estilo de CSS de forma dinámica.

Para llegar al dom y cssom ocurre un proceso que se llama Critical Rendering Path, que es la secuencia de pasos que el navegador realiza para convertir el HTML, CSS y JavaScript en píxeles en la pantalla.

## ¿Qué rayos son las API?

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
* createElement -> Crear etiquetas html
* createTextNode -> Crear Texto

```
  const h1 = document.createElement("h1");
  const text = document.createTextNode("¡Hola, Mundo!");
```

Como solo creamos, necesitamos formas de agregarlos al DOM, para ello, JavaScript nos provee de estas formas:
* appendChild: Agrega un hijo al final algún elemento
```

  const parentElement = document.querySelector("selector"); // Obtengo el elemento padre
  const h3 = document.createElement("h3");                  // Creo el nodo a insertar
  const texto = document.createTextNode("Hola!");           // Creo el texto del nodo
  h3.appendChild(h3);                                       // Inserto el texto al nodo
  parentElement.appendChild(h3);                            // Inserto el nodo al padre
```

* append: Es la evolución de appendChild, podemos agregar más de un nodo, puedes agregar texto.
```
  const parentElement = document.querySelector("selector");               // Obtengo el elemento padre
  parentElement.append("agrego un texto", document.createElement("div")); // Agrego al elemento padre
```
* insertBefore(): Inserta nodos antes del elemento que le pasemos como referencia, **este nodo tiene que ser un hijo DIRECTO del padre**
```
  const parentElement = document.querySelector("selector"); // Obtengo el elemento padre
  const titulo = document.createElement("h1");              // Creo un elemento
  const referencia = document.querySelector("selector");    // Obtengo la referencia
  parentElement.insertBefore(titulo, referencia); // ¡Lo insertamos!
```

* insertAdjacentElement(): Inserta nodos según las opciones que le pasemos:
beforebegin: Lo inserta antes del nodo
afterbegin: Lo inserta despues del nodo
beforeend: Lo inserta antes de donde finaliza el nodo
afterend: Lo inserta después de donde finaliza el nodo


## Otras formas de agregar

* node.outerHTML: Sirve para leer HTML para leer HTML
* node.innerHTML: Sirve para escribir HTML

Pero, tienen un problema de seguridad 👀☝️

El problema con estas formas de inserciones es que permiten la inserción **XSS**, es decir, código maligno, y cualquier usuario programador malicioso podría meter scripts molestos, imagina que cada que un usuario llegue a tu página le salga un alert… ¡Sería catastrófico! Siempre sanitiza los inputs de tus usuarios.

https://github.com/gbirke/Sanitize.js/blob/master/README.md

hack: Cuando en el inspector de elementos seleccionas un elemento y en la consola escribes $0, este te devolverá el elemento tal como si lo hubieses seleccionado con document.querySelector().

## Diferencia entre atributos y propiedades

Los atributos nacen cuando creamos un elemento HTML en el código (estado inicial).

Este elemento será representado en el DOM como un nodo y por ende su representación será un objeto. Como sabemos, todo objeto puede tener propiedades y los nodos efectivamente las tendrán (y bastantes!).

Una de esas propiedades se llama “attributes” y contiene los atributos que habíamos indicado en el HTML.

El objeto aparte de la propiedad attributes tendrá más propiedades, algunas de ellas de nombre idéntico o similar a los atributos (id es exactamente igual, pero por ejemplo el atributo “class” se encuentra como propiedad del objeto bajo el nombre “className”).

Aparte de la cercanía entre los nombres, algunos valores de estos attributes serán iguales a sus propiedades recíprocas (por ejemplo, nodo_x.id === nodo_x.attributes.id), pero no siempre es así (por ejemplo, un input.attribute.value !== input.value, el primero es el valor con el que inicializamos el input, pero el segundo cambiará según el usuario interactúe con él).

https://lenguajejs.com/webcomponents/lit/propiedades-y-atributos/

## Eliminar nodos

* parentElement.removeChild
* document.remove
* document.replaceChild
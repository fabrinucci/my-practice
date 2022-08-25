## Qué es programación orientada a objetos?

* Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí

### Paradigmas
Cuando programamos un algoritmo existen diferentes formas de llegar a un mismo resultado

Los paradigmas de programación formas, caminos, indicaciones o lineamientos que podemos seguir para programar nuestras aplicaciones.

### Existen muchos paradigmas entre los más llamativos son:
* Estructurado
* Orientado a objetos
* Funcional

Cada paradigma se creó para solucionar algunos problemas o dificultades que nos generaban los paradigmas que existían en el pasado.

Existen lenguajes que te permiten utilizar más de un paradigma como otros que son exclusivos para un paradigma de programación.

## Programación Orientada a Objetos

### 🔠 Orden
Uno de los primeros problemas a resolver fue el orden.

Esto nos ayuda cuando todos los elementos de nuestra aplicación están conectados entre sí.
Los objetos nos permiten definir:

* Atributos: son valores que serán propios de unos objetos. Ej: Natalia tiene una lista de cursos que desea tomar, para eso crea un **atributo** que lo llama cursos a tomar.
* Métodos: son comportamientos para nuestros objetos. Ej: Para agregar o eliminar un curso a la lista, crea uno o varios **métodos** para actualizar la lista.

### 🍪 Reutilizar
Imagínate crear varias galletas las cuales deban de tener un mismo tamaño y grosor, este proceso será repetitivo.

Al tener un molde será más sencillo crear las mismas de una misma forma
Crear moldes toma un poco más de tiempo, pero a largo plazo para crear uno nos ahorra mucho más tiempo.

En POO estos moldes se llaman clases, las cuales podremos reutilizar declarando atributos y métodos.

📌 **RESUMEN:** La programación orientada a objetos es un paradigma. Un paradigma es un conjunto de lineamientos o guías que nos ayuda a resolver un problema específico.

---

![img](img/POO-1.webp)


## Qué es un objeto en JavaScript

Aunque javascript es un lenguaje orientado a objetos no esta basado en clases como el resto de los lenguajes orientados a objetos, sino en prototipos.

### Objeto literal
* Los objetos literales se distinguen de los objetos de la POO porque no son instancias de un prototipo creado por el desarrollador.

* Sin embargo los objetos literales son instancias del prototipo Object creado por defecto en JavaScript.


```
const Natalia = {
	'Name' : 'Natalia',
	'Age' : 20,
	'Rank': 2000, 
};
```

### Prototipo
* Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias.

* Podemos pensarlo como un “molde” de objetos.

```
function Student() {
	this.name = 'Nombre';
	this.age = '18';
	this.points = '750';
}

const Juanita = new Student();
```

### Objeto
* Los objetos son *estructuras de datos* formadas por **métodos** y **atributos**, los cuales hereda de su prototipo padre.

* De modo que los objetos son **instancias** de ese prototipo, particularmente cuando dicho prototipo fue creado por el desarrollador (en caso contrario se llaman objetos literales).

### Atributos

* Dentro de los objetos se pueden guardar atributos para guardar en ellos la información que se les asocia. Así, toda la información del objeto se guarda en sí mismo.

### Métodos

* Dentro de los objetos también pueden guardarse métodos, los cuales son funciones que, entre otras cosas, permiten actualizar la información guardada en los atributos de forma segura.

### Atributo **__proto\__**
* Es el nombre que se le da al atributo donde se guardan los métodos que las estructuras de datos tienen por defecto en JavaScript.

* El atributo __proto\_\_ se hereda a partir de los prototipos por defecto de JavaScript para cada estructura de datos en particular, por ejemplo de los prototipos Object y Array.

* El atributo __proto\_\_ también se hereda a los objetos, ya que éstos son a la vez instancias de algún prototipo creado por el desarrollador y del prototipo Object.


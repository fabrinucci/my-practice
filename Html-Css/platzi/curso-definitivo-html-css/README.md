# Curso definitivo HTML y CSS

Existen tres estándares importantes para generar productos web. Estos son los lenguajes o estándares que entiende todo navegador web:

HTML
CSS
JavaScript
HTML
Estructura de los documentos que se visualizan en los navegadores (Chrome, Edge, Firefox, Safari, Opera, entre otros). Es el lenguaje con el que clasificamos o etiquetamos cada parte del documento, dejándole saber al navegador qué información va a visualizar y qué valor tiene para nosotros. De esa manera, presentamos: Barras de Navegación, Secciones, artículos, listas, títulos de diferentes tamaños, audios, videos, imágenes, entre otros.

CSS
Es el lenguaje con el que le damos estilos a todo el contenido previamente etiquetado con HTML. Es el encargado o usado para darle todo el aspecto visual de manera profesional, usando estándares de diseño de documentos y logrando así la correcta visualización de textos y recursos audiovisuales en formatos digitales o, en nuestro caso, las páginas web.

JavaScript
Es lenguaje que se emplea para crear o brindar a las páginas web la capacidad de interactuar con el usuario y los recursos asociados a una página web, como lo son: bases de datos, servidores de diversa índole, información derivada de la interacción de cada página en sí.

Diferencias entre HTML, CSS y JavaScript
HTML es la estructura, como si fuese el esqueleto de un ser humano o los cimientos de un edificio. Por ejemplo: una página web que funciona, pero sin interactividad, colores ni diseño.
CSS corresponde a lo estético, como la piel de ser humanos. La pintura y adornos de los edificios o la manera en que es posible que la estructura del html se vea mejor para los usuarios.
JavaScript equivale a los músculos, lo que da esa interactividad a las personas para moverse y realizar acciones como correr.

![img](https://static.platzi.com/media/user_upload/css%20html%20js-c5cad547-d054-48d7-83be-bc2caee99577.jpg)

## ¿Qué es el Frontend?

![img](https://static.platzi.com/media/user_upload/frontend-2de42ca9-7413-46de-b411-31d3f1b8b8d0.jpg)

## ¿Qué es Backend?

![img](https://static.platzi.com/media/user_upload/BACK-END-286e8b77-8abe-413c-9f3e-5b502d655fb1.jpg)

## ¿Qué es Full Stack?

![img](https://static.platzi.com/media/user_upload/Fullstack-12ecb042-2e6b-47ea-a9a5-7269e670c905.jpg)

## Páginas Estáticas vs. Dinámicas

![img](https://static.platzi.com/media/user_upload/Pa%CC%81ginas%20esta%CC%81ticas%20vs%20dina%CC%81micas-1c91f6dd-328f-4271-a8e3-a57442620941.jpg)

![img](https://static.platzi.com/media/user_upload/habilidadesfullstack-cb788cc9-eaf6-40fb-a517-f10761010b76.jpg)


## HTML: anatomía de una página web

HTML (HyperText Markup Language) es un lenguaje de marcado de texto. Se utiliza para darle una estructura al sitio web que estás visitando.

Estructura básica de HTML en una página Web
Container: contenedor principal
Header: cabecera de la página. Aquí usualmente encuentras el logo y el menú de navegación del sitio.
Main content: estructura principal. Por ejemplo, el feed o lista de publicaciones de una red social.
Sidebar: contenido secundario de una página, que usualmente se encuentra a los lados del contenido principal (o main).
Footer: pie de página. Esto se encuentra al fondo del sitio web, salvo en casos de sitios web donde el scroll (o navegación hacia abajo) es infinito, por ende, no tendría sentido ponerlo al fondo.

![img](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%20%2817%29-f08bb2df-26d7-4221-aebc-c84dd0b015e1.jpg)

Las etiquetas en HTML nos ayudan a diferenciar en qué parte del contenido nos encontramos.

La web se conforma de tres conceptos:

* URL: Uniform Resource Locator. El identificador único del sitio en el navegador (por ejemplo: https://platzi.com).
* HTTP: Protocolo de transferencia de hipertexto. Es el estándar que se utiliza para enviar datos a través de paquetes entre el cliente y el servidor.
* HTML: es el código que se emplea para estructurar el contenido de tu web, y darle sentido y propósito.
* Hyper Text significa que el texto tiene interactividad, conexión con otros documentos.
* Markup significa que le pone etiquetas a los elementos. Por eso también se le conoce como un lenguaje de etiquetas.

HTML es un lenguaje interpretado. Además, HTML es un estándar, así que no importa desde qué navegador o dispositivo se ejecute, el código sigue siendo el mismo en cualquier sitio.

## Index y su estructura básica: head

```
<!DOCTYPE html>
<!--Le decimos al navegador que este archivo es del tipo html:5-->

<html lang="es">
  <!--Es la etiqueta "padre" donde vivirá nuestro proyecto. El atributo lang establece el idioma del sitio web. Debemos usarlo para que el navegador pueda traducir nuestra página-->

  <head>

    <meta charset="UTF-8" />
    <!--Este atributo nos ayuda a la hora de incluir caracteres especiales y emojis en nuestro proyecto-->

    <meta name="description" content="Esta página te mostrará fotos de gatos" />
    <!--Muestra una descripción de nuestro sitio en los buscadores-->

    <meta name="robots" content="index,follow" />
    <!--Le dice a los robots de los navegadores que rastreen nuestra página y la muestran en las búsquedas-->

    <title>Mi página</title>
    <!--Título de nuestra página, no confundir con los H1-H6. Este titulo es el que ves en la pestaña del navegador-->

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--Nos ayuda a trabajar en proyectos reponsive-->

    <link rel="stylesheet" href="./css/style.css">
    <!--Linkea/Enlaza archivos de estilos u otros archivos que necesitemos en nuestro proyecto-->

  </head>
```

## Index y su estructura básica: body

```
<body>

  <header> <!--Sección superior de nuestro website--> 

    <nav></nav> <!--Sección de navegación de nuestro website, siempre dentro del header-->

  </header>

  <main> <!--Main es el contenido central de nuestro website, "la parte del medio"-->

    <section> 
      <!--Nuestro website puede estar divido por secciones, por ejemplo platzi tiene 3: El navegador de cursos y rutas, el feed y nuestras rutas de aprendizaje-->

      <article>
        <!--Contenido independiente de la página. Es reutilizable-->
      </article>

    </section>

    <ul> <!--Lista desordenada: Sin numerar-->

      <li><!--Item List. Elementos de la lista--></li>

    </ul>

    <ol></ol> <!--Lista ordenada: Numerada-->
    
  </main>

  <footer> <!--Sección final de nuestro website-->

  </footer>

  <p>Soy un texto</p> <!--Párrafo, texto-->

  <h1>Soy un titulo</h1> 
  <!--Títulos, muestran el texto más grande y con negrilla. Existen desde el h1 al h6-->

  <a href="#">Soy un link</a>
  <!--Enlaces/links que nos permitirán movernos entre páginas.-->

</body>
```

![img](https://i.postimg.cc/k4s9SqbT/Anatom-a-de-Etiqueta.png)

## Tipos de imágenes

Las imágenes representan una pieza fundamental al momento de mostrar contenido para web. Aquí conoceremos los principales tipos de imágenes web y sus formatos.

### Tipos de imágenes para web

Lossless (sin pérdida):

* Capturan todos los datos del archivo original.
* No se pierde nada del archivo original.
* Puede comprimirse, pero podrá reconstruir su imagen al estado original

Lossy (con pérdida):

* Se aproximan a su imagen original.
* Podría reducir la cantidad de colores en su imagen o analizar la imagen en busca de datos innecesarios.
* Por consiguiente puede reducir su tamaño, lo que mejora el tiempo de carga de la página, pero pierde su calidad.
* Los archivos tipo lossy son mucho más livianos que los archivos tipo lossless, por lo que son ideales para usar en sitios en donde el tamaño del archivo y la velocidad de descarga son importantes.

![img](https://static.platzi.com/media/user_upload/table%20for%20diferent%20images-42fdf349-a492-4ff5-afbd-1f437c804e4a.jpg)

## Optimización de imágenes

Tamaño máximo recomendado para una imágen:
* 70kb

Herramientas para optimizar imágenes:

* Tiny PNG: Comprime el tamaño de una imagen, para hacerla más ligera.

https://tinypng.com/

* Verefix: Elimina los metadatos de una imagen, para reducir su tamaño.

https://www.verexif.com/

* Compressor.io Comprime sin perder calidad (mejor todavia Tinypng)

https://compressor.io/

* Picresize Comprime y recorta el tamaño de la imagen

https://picresize.com/

## Etiqueta img

El elemento HTML <img> incrusta una imagen dentro de un documento. A continuación, veremos cómo funciona.

La etiqueta <img> va siempre dentro del contenedor <body>, pues es un elemento visible.

Funcionamiento de la etiqueta alt:
```
<img src="ubicación de la imagen" alt="descripción de la imagen">
```

Con esta misma estructura, podemos utilizar el siguiente ejemplo de un estudiante cansado:
```
<img src="https://www.ipp.edu.pe/blog/wp-content/uploads/2020/05/shutterstock_1489158410.jpg" alt="estudiante cansado">
```

Atributos de la etiqueta img
La etiqueta img cuenta con dos atributos, el atributo "src" y el segundo atributo es "alt". Ambos son importantes.

El atributo de "src" es para mostrar en dónde se encuentra la imagen que vamos a incrustar. Las imágenes se pueden obtener de alguna carpeta o una URL que obtengamos de internet.

En caso de que el nombre de tu imagen lleve algún espacio, deberás sustituir ese espacio con un guion o guion medio. Caso contrario, el navegador no podrá reconocer la ubicación.
alt sirve para agregar una descripción a nuestra imagen. Esto es útil por cuestiones de SEO y también para accesibilidad (por ejemplo para personas con visión reducida).

`<img/>`, a diferencia de la gran mayoría de las demás etiquetas de HMTL, no necesita una etiqueta de cierre.
Aporte creado por: María del Pilar Chavez, Brayan Mamani

## Etiqueta figure

Es una etiqueta que permite almacenar una imagen en su interior. Es una mejor práctica comparada con usar solamente un contenedor div. Como complemento al contenedor figure, se utiliza la etiqueta figcaption, que permite darle una pequeña descripción a la imagen, como el autor, fuente o algo por el estilo, que se mostrará usualmente abajo de la imagen.

Figcaption se diferencia del atributo Alt porque esta última muestra su descripción en texto en el navegador solamente al pasar el mouse por encima de la imagen (de ahí su utilidad para personas con discapacidad visual). Es similar a usar un div y dentro un parrafo, solo que es mejor semanticamente hablando.

Es importante considerar que la etiqueta figure no es únicamente para imágenes:

El elemento HTML representa contenido independiente, a menudo con un título. Por lo general, se trata de una imagen, una ilustración, un diagrama, un fragmento de código, o un esquema al que se hace referencia en el texto principal, pero que se puede mover a otra página o a un apéndice sin que afecte al flujo principal.

### Ejemplo de etiqueta Figure:
```
<figure>
  <img
    src="./pics/tinified/small.jpg"
    alt="Es una imagen de un perrito"
  />
  <figcaption>Es una imagen de un perritofigcaption>  
figure>
```
## Etiqueta picture

Es ideal para usarla cuando quieres tener más flexibilidad al momento de especificar distintas imágenes, si quieres tener un diseño responsive en tu web.

Dentro de ella van dos etiquetas:

* `<source>` (y sus atributos principales serían media: para especificar el tamaño y srcset: para indicar la url de la imagen.
* `<img>` (con los atributos que ya explicó el profe Diego. Y esta sería la imagen principal)

En esta página, por ejemplo, se puede apreciar cuando paso el cursor sobre la url de cada imagen 😁
![img](https://static.platzi.com/media/user_upload/picture1-33f978bc-080e-49a4-8738-76d19eeb8534.jpg)

## Etiqueta video

![img](https://static.platzi.com/media/user_upload/CapturaVideo-67421890-876f-4603-941d-52e9562e21c9.jpg)
![img](https://static.platzi.com/media/user_upload/CapturaSource-9e2cb340-1dae-4eeb-bb56-ef7c43226249.jpg)

## Etiqueta form e input

Es importante utilizar la etiqueta `<form></form>` para indicar que utilizaremos un formulario, ademas de la semantica y buenas practicas.

Dentro de estas etiquetas indicaremos los elementos del Formulario como lo son:

`<label></label>` que sera como nuestro "Contenedor" en esta ocasión. Dentro de el pondremos la etiqueta `<span></span>` (no es necesario) para colocar un texto haciendo alusión al contenido esperado (nombre, contraseña, fecha etc…) y viene una de las etiquetas importantes la cual es `<input>` aqui es importante aclarar que hay muchos tipos de Input, los que veran en este ejemplo son text, password, date, time pero hay muchos mas…

Tambien esta el atributo placeholder para colocar un texto como guia dentro de la caja (Input) y este al hacer click sobre el se eliminara.

![img](https://static.platzi.com/media/user_upload/inputs-439d0f8e-9b8e-4217-959c-ec65506b9714.jpg)

https://medium.com/@juancaferraris/dise%C3%B1ando-formularios-m%C3%A1s-efectivos-estructura-inputs-labels-y-acciones-81ac011ea05f

## Autocomplete y require

Valores autocomplete:

- "off":
El navegador no puede ingresar o seleccionar automáticamente un valor para este campo. Es posible que el documento o la aplicación proporcione su propia función de autocompletar, o que los problemas de seguridad requieran que el valor del campo no se ingrese automáticamente.

- "on":
El navegador puede completar automáticamente la entrada. No se proporciona ninguna orientación sobre el tipo de datos que se esperan en el campo, por lo que el navegador puede usar su propio criterio.

- "name":
El campo espera que el valor sea el nombre completo de una persona. Generalmente se prefiere usar "nombre" en lugar de dividir el nombre en sus componentes porque evita tratar con la amplia diversidad de nombres humanos y cómo están estructurados; sin embargo, puede usar los siguientes valores de autocompletar si necesita dividir el nombre en sus componentes:

- "honorific-prefix"
Prefijo tipo "Mrs.", "Mr.", "Miss", "Ms.", "Dr.", or "Mlle.".

- "given-name"
Primer nombre (first name)

- "additional-name"
Segundo nombre (middle name)

- "family-name"
Apellido (last name)

- "honorific-suffix"
Sufijo tipo "Jr.", "B.Sc.", "PhD.", "MBASW", or "IV".

- "nickname"
Un apodo.

- "email"
Dirección de correo electrónico

- "username":
Nombre de usuario

- "new-password":
Una nueva contraseña. Al crear una nueva cuenta o cambiar contraseñas, este es el campo "Ingrese su nueva contraseña", a diferencia de cualquier campo "Ingrese su contraseña actual" que pueda estar presente. Esto puede ser utilizado por el navegador tanto para evitar ingresar accidentalmente una contraseña existente como para ofrecer ayuda para crear una contraseña segura.

- "current-password":
La contraseña actual del usuario.

- "organization-title":
Un puesto de trabajo, o el título que tiene una persona dentro de una organización, como "Escritor técnico senior", "Presidente" o "Líder asistente de tropa".

- "organization":
El nombre de una empresa u organización, como "Acme Widget Company" o "Girl Scouts of America".

- "street-address":
Una dirección postal. Puede ser varias líneas de texto y debe identificar completamente la ubicación de la dirección dentro de su segundo nivel administrativo (generalmente una ciudad o pueblo), pero no debe incluir el nombre de la ciudad, el código postal o el nombre del país.

- "address-line1", "address-line2", "address-line3":
Cada línea individual de la dirección postal. Estos solo deberían estar presentes si la "dirección postal" también está presente.

- "address-level4":
El nivel administrativo más detallado, en direcciones que tienen cuatro niveles.

- "address-level3":
El tercer nivel administrativo, en domicilios con al menos tres niveles administrativos.

- "address-level2":
El segundo nivel administrativo, en domicilios con al menos dos de ellos. En países con dos niveles administrativos, normalmente sería la ciudad, pueblo, aldea u otra localidad en la que se encuentra la dirección.

- "address-level1":
El primer nivel administrativo en la dirección. Esta suele ser la provincia en la que se encuentra la dirección. En los Estados Unidos, este sería el estado. En Suiza, el cantón. En el Reino Unido, la ciudad postal.

- "country":
Código de país

- "country-name":
Nombre del país

- "postal-code":
Código postal o ZIP

- "cc-name":
El nombre completo tal como está impreso o asociado con un instrumento de pago, como una tarjeta de crédito. Por lo general, se prefiere utilizar un campo de nombre completo en lugar de dividir el nombre en pedazos.

- "cc-given-name":
Nombre (first name) en un instrumento de pago como una tarjeta de crédito.

- "cc-additional-name":
Un segundo nombre (middle name) como se indica en un instrumento de pago o tarjeta de crédito.

- "cc-family-name":
Un apellido, tal como figura en una tarjeta de crédito.

- "cc-number":
Un número de tarjeta de crédito u otro número que identifique un método de pago, como un número de cuenta.

- "cc-exp":
Una fecha de vencimiento del método de pago, generalmente en el formato "MM / YY" o "MM / YYYY".

- "cc-exp-month":
El mes en el que vence el método de pago

- "cc-exp-year":
El año en el que vence el método de pago

- "cc-csc":
El código de seguridad del instrumento de pago; en las tarjetas de crédito, este es el número de verificación de 3 dígitos que se encuentra en el reverso de la tarjeta.

- "cc-type":
El tipo de instrumento de pago (como "Visa" o "Master Card").

- "transaction-currency":
La moneda en la que se realizará la transacción.

- "transaction-amount":
La cantidad, dada en la moneda especificada por "transacción-moneda", de la transacción, para un formulario de pago.

- "language":
Un idioma preferido, dado como una etiqueta de idioma BCP 47 válida.

- "bday":
Una fecha de nacimiento, como una fecha completa.

- "bday-day":
El día del mes de una fecha de nacimiento.

- "bday-month":
El mes de una fecha de nacimiento.

- "bday-year":
El año de una fecha de nacimiento.
**
- "sex":
Una identidad de género (como "Mujer", "Fa’afafine", "Hombre"), como texto de forma libre sin nuevas líneas

- "tel":
Un número de teléfono completo, incluido el código del país. Si necesita dividir el número de teléfono en sus componentes, puede usar estos valores para esos campos:

- "tel-country-code":
El código de país, como "1" para Estados Unidos, Canadá y otras áreas de América del Norte y partes del Caribe.

- "tel-national"
El número de teléfono completo sin el componente de código de país, incluido un prefijo interno del país. Para el número de teléfono "1-855-555-6502", el valor de este campo sería "855-555-6502"

- "tel-area-code":
El código de área, con cualquier prefijo interno del país aplicado si corresponde.

- "tel-local":
El número de teléfono sin el código de país o área. Esto se puede dividir en dos partes, para los números de teléfono que tienen un número de intercambio y luego un número dentro del intercambio. Para el número de teléfono "555-6502", utilice "tel-local-prefix" para "555" y "tel-local-suffix" para "6502".

- "tel-extension":
Un código de extensión de teléfono dentro del número de teléfono, como un número de habitación o suite en un hotel o una extensión de oficina en una empresa.

- "impp":
Una URL para un punto final de protocolo de mensajería instantánea, como "xmpp: username@example.net".

- "url":
Una URL, como una página de inicio o la dirección del sitio web de la empresa, según corresponda, dado el contexto de los otros campos del formulario.

- "photo":
La URL de una imagen que representa a la persona, la empresa o la información de contacto proporcionada en los otros campos del formulario.

## Select

![img](https://static.platzi.com/media/user_upload/user-friendly%20form-c3e63399-9677-4424-b685-e8978fecfb66.jpg)

![img](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202021-03-19%20a%20la%28s%29%203.09.15%20p.%C2%A0m.-a0d91feb-76f6-43bb-9233-faf3e69dd8d3.jpg)

https://css-tricks.com/dropdown-default-styling/

## Input type submit vs. Button tag

![img](https://static.platzi.com/media/user_upload/inputVSbutton-41dbe1f7-3dc7-4c70-a731-26c27a1470e6.jpg)

## CSS

![img](https://static.platzi.com/media/user_upload/Infographic-HTML-CSS-f65dea96-b0e3-4be0-ba8f-c0a0b120c72d.jpg)

## Cómo nombrar las clases

### Metodología **BEM😗* cómo nombrar correctamente las clases.

Solo usa clases. Las nombra siguiendo el siguiente patrón: BLOQUE__ELEMENTO—MODIFICADOR (son 2 guiones, se usa 1 guión para separar palabras).

Bloque: sección que puede funcionar por sí sola.
Elemento: forma una de las partes del bloque.
Modificador: variaciones de un mismo bloque/elemento.
```
<!-- BLOQUE -->
<main class="Padre">
	<!-- BLOQUE__ELEMENTO --> 
	<section class="Padre__Hijo">
		<!-- BLOQUE__ELEMENTO--MODIFICADOR -->
		<article class="Padre__Hijastro--Mayor"></article>
		<article class="Padre__Hijastro--Menor"></article>
	</section>
</main>
```
### Crear estilos a etiquetas dentro de clases
Si tienes etiquetas dentro de la etiqueta a la que le estás aplicando estilos y le pones una clase, puedes aplicar estilos únicamente a las etiquetas dentro de esa clase de la siguiente manera: .clase etiqueta {}

```
/* Estilos a etiqueta "a" dentro de una clase */
.main-nav__item a {
  color: white;
}
```

Usa background-color para ver las cajas de los elementos.

### Pseudo clases
Define el estilo de un estado especial de un elemento.

Agregar al final de la clase :nombreAccion

```
<!-- Pseudo Clase -->
.main-nav__item a:hover {
  color: darkblue;
}

.main-nav__item a:active {
  color: darkcyan;
}
```

Lista de Pseudo Clases: https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes

Pseudo Elementos
Define el estilo de una parte específica de un elemento.

Agregar al final de la clase ::nombreAccion

```
/* Pseudo elemento */
.main-nav__item a::after {
  content: " | "; /* despues del elemento, agrega esto */
}
```

Lista de Pseudo Elementos: https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements

### box-sizing: border-box;
Suma el padding y el borde con el width del elemento. Si aumenta el padding o el borde, el width disminuye para no generar un scroll horizontal. Lo mismo al contrario en caso de que aumente width. Esto se hace para que el elemento ocupe lo que le indicamos y no más.

## Regla CSS

![img](https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/reglacss_xl.png)

## Modelo de caja

![img](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-09-02%20a%20la%28s%29%2014.11.10-50b14fb3-9774-4f38-a405-39402028a560.jpg)

## Herencia y sus valores:

![img](https://static.platzi.com/media/user_upload/Herencia%20CSS%20-%20Notas%20de%20clase-c61901cd-dd2b-4623-ac27-3809334a52e0.jpg)

## Especificidad en selectores

![img](https://static.platzi.com/media/user_upload/8.Especificidad%20en%20selectores-1b4be9d0-ed66-4e86-b72e-071f0ba80091.jpg)

![img](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%20%2863%29-212a5cb5-2d4c-49a0-98a2-d33b54457211.jpg)

### Ejemplo:
![img](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-09-02%20a%20la%28s%29%2014.14.35-d259a9cd-4e7a-4b40-b424-bdbf4bdb6241.jpg)

## Malas Prácticas dichas en Clase Hasta Ahora

* Utilizar tanto id en CSS
* Utilizar el !important
* Utilizar la etiqueta `<style>` dentro del archivo html
* Utilizar el atributo style dentro de las etiquetas html
* Utilizar div para contener todo ignorando los header, nav, section, article, etc.
* No utilizar la etiqueta `<form>` para hacer formularios
* Utilizar las etiquetas `<select>` y `<option>` para hacer selectores o menús desplegables.
* No nombrar el primer archivo html del proyecto como index.html
* No tener archivos .css para cada pantalla de un proyecto.
* Tener todo el css junto en un solo archivo.
* No ponerle el atributo alt a una imagen
* Poner imágenes dentro de `<div>` en vez de `<figure>`
* Utilizar textos solo en mayúscula en HTML, en vez de utilizar el atributo de CSS, text-transform, con el valor uppercase. Ya que al hacer esto pareciera que estuvieras gritando.
* Poner videos que se reproduzcan solos.
* No optimizar las imágenes.
* No tener cuidado de cual es el formato ideal para las imágenes y su respectivo peso.
* No tener cuidado con la respectiva semántica de HTML, y con la sintaxis adecuada para CSS.
* No cerrar las etiquetas que se cierran en sí mismas como `<br/>`
* No comentar partes esenciales de tu código.
* No poner la etiqueta `<meta name=”robots” content=”index,follow”>` en tu proyecto para que los navegadores los puedan ubicar mejor.
* No usar la etiqueta `<meta name=”viewpor” content=”width=device-width, initial-scale=1.0”>` para hacer tu proyecto responsive.
* No poner el atributo autocomplete=”valor” en los campos de tu formulario para hacerle la vida más fácil al usuario
* No usar el atributo required en los campos obligatorios de tu formulario como una primera capa de seguridad.


## Combinadores: Adjacent Siblings

![img](https://static.platzi.com/media/user_upload/Artboard%201-7978db51-2e4d-4e50-91c8-d0bf8f139d23.jpg)

## Medidas

![img](https://static.platzi.com/media/user_upload/Medidad-4fcf6b4d-978d-43f8-afa6-4dbfdb0ab867.jpg)

## Medidas EM

Es un acronimo de elemento y lo que hace es tomar el tamaño de fuente que tenga el padre directo ejemplo:
```
.container {
  font-size: 20px
}

.container div {
  font-size: 2em
}
```

Aqui el tamaño del div que esta dentro de la clase container sera de 40px, ya que 1em = 20px, y como estamos asignandole 2em seria como 20px + 20px y si por ejemplo tenemos el siguiente caso :
```
.container {
  font-size: 20px
}

.container div {
  font-size: 2em
}

.container div p {
  font-size: 1.5em
}
```

A continuacion veremos que la etiqueta p tendra un tamaño de fuente de 60px, ya que toma como referencia el tamaño de su padre ( 40px ) y haria la siguiente operacion 40*1.5 que es igual a 60, es por eso que la etiqueta p tomo el valor de 60px.

## Medidas REM

Funciona igual que el em, con la diferencia que es relativo al valor de la fuente del elemento html, y no tiene en cuenta el valor heredado o del elemento que lo contiene.

Por defecto el html viene con un tamaño de fuente de 16px asi que siempre.

1 REM = 16PX

Si queremos aplicar rem de una forma mas sencilla para no tener que hacer tantos calculos hacemos lo siguiente:
```
html {
  font-size: 62.5%; 
}
```

Esto lo que hara es darle a el html un valor de 10px ya que 16px - 62.5% = 10px.

ahora si por ejemplo a una etiqueta le asignamos 2rem este hara referencia a 20px, o si por ejemplo le damos un valor de 1.5rem su valor sera de 15px.

![img](https://blog.avenuecode.com/hs-fs/hubfs/Images/Blog/unidade-relativa-vs-unidade-estatica.gif?width=906&height=330&name=unidade-relativa-vs-unidade-estatica.gif)

## Max/min width

![img](https://static.platzi.com/media/user_upload/max_min_width-b443f980-da9e-4eab-ab60-e6ed1cb8cb4a.jpg)

## Valores de position

* Static: Posición por defecto de los elementos, conservan la posición y espacio de donde son colocados (estáticos). No se puede usar top, right, bottom y left en esta posición.

* Relative: Conservan su posición original y espacio físico pero se los puede posicionar mediante las propiedades top, right, bottom y left sin perder dicho espacio físico.

* Absolute: Permanecen en la posición de donde fueron colocados pero pierden su espacio físico (se sobreponen a los elementos que ocupan dicho espacio), se los puede posicionar mediante las propiedades top, right, bottom y left.
Al aplicar las propiedades top, right, bottom y left se tomará de referencia al contenedor más cercano con posición relativa.

* Fixed: Pierden su espacio físico y permanecen de forma fija (siguen el scroll, se colocan al lado izquierdo del viewport), se los puede posicionar mediante las propiedades de top, right, bottom y left.

* Sticky: Conservan su espacio físico pero cuando el scroll los alcanza lo siguen (sin perder dicho espacio físico), es muy usado para barras de navegación y se lo puede posicionar con las propiedades top, right, bottom y left.

## Display

* Block: Estos toman el 100% del width, por lo que un elemento no puede posicionarse a un lado de el.
Se le puede poner el width deseado, height deseado, añadir margin, padding sin problema. Pero recordando que ocupara este elemento todo el largo de una Fila por asi decirlo.

* Inline: Estos elementos solo ocuparan el ancho dependiento de su contenido. Por lo tanto estos elementos si permiten que si un elemento cabe a lado suyo, se posicione este ahi.
Las *desventajas es que no se les puede modificar el width, height, ni colocar margin u padding tanto top, como bottom.

* Inline-block: Este tiene la combinación de los 2 anteriores. Haciéndolo un mejor candidato para usarlo.
Permite modificar su width, height, añadirle margin, padding sin problemas y lo mejor es que mientras que haya espacio a un lado suyo, este permitirá posicionar mas elementos ahi.

![img](https://static.platzi.com/media/user_upload/CSS-Display-cb091802-4494-4e42-b0eb-44ec91efa280.jpg)

Ademas existe el `display:none`, que no renderiza el contenido en la página. Se puede puede obtener un resultado similar si se utiliza `visibility:hidden` Sólo que en este caso, el contenido será renderizado, en otras palabras, sí existe dentro de nuestra página, pero está oculto.

## Flexbox

Flex es un tipo de display que permite que el contenedor padre sea flexible a los cambios que puedan tener los elementos hijos en su alineación.

Una vez tengamos el elemento padre con `display: flex` tenemos otras propiedades que podremos usar para nuestro beneficio:

**Flex-direction**: Te permite elegir la alineación de los elementos hijos sea en vertical (column) u horizontal (row), esta alineación viene por defecto.

**Justify-content**: Esta propiedad nos permite alinear el contenido de forma horizontal en row y vertical en column

Valores:
* Flex-start: Alinear items del flex desde el comienzo.
* Flex-end: Alinear items desde el final.
* Center: Alinear items en el centro del contenedor.
* Space-between: Distribuir items uniformemente, el primer items al inicio, el último al final.
* Space-around: Distribuir items uniformemente, estos tienen el mismo espacio a su alrededor.
* Space-evenly: Distribuye uniformemente el espacio entre los items y su alrededor.

**Align-items**: Sirve para alinear los elementos hijos de forma vertical en row y horizontal en column.

Valores:
* Flex-start: Se alinean desde arriba.
* Flex-end: Se alinean desde abajo.
* Center: Alinea los item al centro del eje y del contenedor.
* Stretch: Estira el alto de los elementos hijos al 100% del alto del elemento padre.
* Baseline: Escala el alto del elemento al tamaño de su contenido.

**Flex-wrap**: Permite que un elemento cuyo tamaño sea mayor al de la página haga un salto de línea sin salirse del contenedor, pues este se agranda.

**Order**: Especifica el orden utilizado para disponer los elementos en su contenedor flexible. Los elementos estarán dispuestos en orden ascendente según el valor de order.

**Flex-grow**: Especifica qué cantidad del espacio restante dentro del contenedor flexible, debería ocupar el ítem en cuestión según su dirección principal, esta última determinada por flex-direction.

**Flex-basis**: Especifica el tamaño inicial de un elemento flexible.

![img](https://static.platzi.com/media/user_upload/c87fc0c65be30f8142276dc9d269b775-38055e06-a98b-4af4-8466-57cff0d611a6.jpg)

![img](https://static.platzi.com/media/user_upload/ef094b38a113262ae36b40ea1dff356b-d58fe4db-7348-4c8f-a872-9db3bdcd92f1.jpg)

## Variables

### Para que nos sirven?
Nos servirán para guardar valores que reiteradamente ocuparemos en el desarrollo de nuestro proyecto. Realmente se le ve mas utilidad en proyectos grandes. Pero claro, es importante conocerlo desde ahora.

### Como se declara?
Normalmente se declara dentro de :root ta que serán variables globales.
y se declaran de la siguiente manera:

## Fonts

Hay 4 grupos de fuentes denominadas familias.

* Serif: tienen un toque elegante como la fuente New Times Roman.
* Sans-serif: son fuentes de “palo seco” como la Verdana.
* Cursive: tienen estilos cursivos como hechas a mano.
* Monospace: todos los caracteres tiene el mismo ancho. Ideal para escribir código.

## Responsive design: media queries

Se debe optimizar para todos los dispositivos. Hay tiene que tener en claro un par de conceptos:

* Break points: cuando la pantalla sea de cierto tamaño, se generará un cambio para reposicionar o redimensionar los contenedores.
* Media Queries: son condicionales. No es la mejor práctica pero aplicándolo al CSS: @media (min-width: #;) {"código que se aplicará"} y se aplican para cada tamaño de dispositivo. El pixelaje dado será el break point.

Lo más importante es diseñar para movil. Por lo que se debe diseñar con **mobile first**. Es decir, primero diseñar para celular, luego un break point para tablet y finalmente un break point para PC.

Para aplicar media queries con buenas prácticas, hay que hacerlo en el header. Porque así solo se descarga el código necesario según el dispositivo, mientras que en CSS se descarga todo sin importar nada.

En la tag link se colocan los atributos href, rel y, a partir del segundo archivo, el break point media="screen and (min-width: #px". El style.css debe estar hecho para mobile. Luego se pueden crear otros archivos como tablet.css o desktop.css.

## Mostly Fluid

El patrón Mostly fluid consiste, principalmente, en una cuadrícula fluida. Por lo general, en las pantallas grandes o medianas se mantiene el mismo tamaño y simplemente se ajustan los márgenes en las más anchas.

![img](https://static.platzi.com/media/user_upload/Captura-3066e9e2-a8fb-49ad-af1f-0fd156c6d086.jpg)

## Layout shifter

El patrón Layout shifter es el más adaptable, ya que posee varios puntos de interrupción en diferentes anchos de pantalla.

La clave para este diseño es el desplazamiento del contenido, en lugar de su reprocesamiento y colocación debajo de otras columnas. Debido a las diferencias significativas entre cada punto de interrupción principal, es más complejo de mantener, y es posible que se deban realizar cambios dentro de los elementos, no solo en el diseño de contenido general.

![img](https://static.platzi.com/media/user_upload/Captura-66281cc3-7319-4a62-b2c0-180657c93723.jpg)

## Column Drop

En el caso de los diseños con varias columnas de ancho completo, durante el proceso de colocación de columnas éstas únicamente se colocan de forma vertical debido a que el ancho de la ventana es demasiado reducido para el contenido.

![img](https://static.platzi.com/media/user_upload/Captura-1523b52e-1e3d-4209-975e-34b32559fd55.jpg)

## Imágenes responsive
```
<picture> <!-- Agrupa una serie de imágenes. Etiqueta contenedora. -->
```
```
<source> <!-- Mostrará la imagen que cumpla una serie de criterios opcionales. -->
```

Otra ventaja interesante es que con `<picture>` podemos crear imágenes responsive que cambien dependiendo de características de las media queries (CSS). Por ejemplo, utilicemos min-width en el siguiente ejemplo:
```
<picture>
  <source media="(min-width: 600px)" srcset="html5-logo-xl.png" />
  <source media="(min-width: 300px) and (max-width: 600px)" srcset="html5-logo-large.png" />
  <source media="(max-width: 50px)" srcset="html5-logo-small.png" />
  <img src="html5-logo-medium.png" alt="HTML5 logo" />
</picture>
```
De esta forma, estamos indicando que se muestren diferentes imágenes dependiendo de la resolución de pantalla (ancho) del dispositivo:

* Dispositivos muy grandes (más de 600px): Muestra la imagen html5-logo-xl.png
* Dispositivos grandes (entre 300-600px): Muestra la imagen html5-logo-large.png
* Dispositivos pequeños (menos de 50px): Muestra la imagen html5-logo-small.png

Si no cumple las anteriores (o no soporta HTML5.1): Muestra la imagen html5-logo-medium.png

![img](https://static.platzi.com/media/user_upload/10-0af8f46b-6ecc-4bfa-9b3a-11aa0cfe125b.jpg)
![img](https://static.platzi.com/media/user_upload/9-051133d4-7560-4140-ac43-96e1edb4e9e0.jpg)
![img](https://static.platzi.com/media/user_upload/Cap-84fdb982-2fe0-4f0b-b3e8-b42d9162dc32.jpg)

## Textos

Se recomienda fuertemente usar medidas relativas como rem, para poder incrementar el tamaño del texto para personas con visibilidad disminuida. Las opciones de navegador que cambian el tamaño de las fuentes no funcionan cuando las fuentes de html en el texto están en pixeles (px).

## Semántica

“La accesibilidad es una acto de democratización al acceso de productos digitales, es la reivindicación del derecho de una persona con ciertas capacidades diferentes a acceder a las mismas plataformas.”

- La semántica jugará un papel importante en la lectura de la plataforma por parte de un software
- Es recomendable en cualquier situación el uso de medidas relativas (REM, EM) pues estas modificarán su tamaño en nuestra página cuando un usuario modifique el tamaño de las letras en la configuración de su navegador.
- El uso de <label> en los formularios facilita la interacción de las personas y software con ellos. Por ejemplo al apretar la barra de espacio en un input que despligue un submenú, este se mostrará.
- alt en las imágenes proporciona una descripción para un lector de contenido.
- El atributo title puede ser usado en las etiquetas img y a para dar una descripción de sus contenidos al hacer hover.

![img](https://static.platzi.com/media/public/uploads/sheet-html_78e6f04d-2ecb-472a-a36c-582b9fc4fb6f.png)

* Resoluciones: https://www.mydevice.io/

* Buenas Practicas RD: https://www.somoscafeina.com/articles/7-buenas-practicas-para-un-diseno-web-responsive

* Contraste en textos: https://www.notion.so/Contraste-en-Web-c5f242b0cc114401aaca8b615d3a8e32

* Tabla Periódica para HTML: https://allthetags.com/

* Etiquetas escensiales html: https://platzi.com/blog/etiquetas-html-debes-conocer/


* Calculador de especificidad: https://www.codecaptain.io/tools/css-specificity-calculator
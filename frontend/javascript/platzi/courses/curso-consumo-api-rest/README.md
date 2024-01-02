# API REST 🌐

## Conceptos clave
---

### API: Application Program Interface -> Interfaz
- Una interfaz es el medio por el cual la computadora se conecta con los humanos. Es lo visible para el usuario que interactúe con una app, por ejemplo.

### API REST
- Es el medio por el cual se comunican computadoras con otras computadoras. O también podemos pensarlo como robots con robots 🤖🔁🤖. Puede ser backend con frontend, backend con backend, etc.

### REST: Representational State Transfer
- A diferencia de una página web, que se muestra con imágenes, textos formateados, etc.; la llamada de una API REST se devuelve en un archivo JSON.

- Aunque pocas, algunas aplicaciones todavía usan el método SOAP para mandar información entre computadoras. Sin embargo, actualmente REST está dominando su aplicación.


## Flujo de comunicación entre usuarios, frontend y backend

### ¿Cómo las hacemos dinámicas y interactivas? 
- Pues las APIs del DOM que nos permiten escuchar las interacciones del usuario y la API Fetch son herramientas poderosísimas que combinadas nos dan una alternativa al tener que recargar toda la página HTML cada vez que queremos algún recurso SSR(server side rendering).



---

## Consumir una API REST

https://github.com/public-apis/public-apis

---

## Endopoints y Query parameters



---

## Http Status code


### Most common HTTP status codes:
```
const HTTP = {
  'OK': 200,
  'CREATED': 201,
  'BAD_REQUEST': 400,
  'UNAUTHORIZED': 401,
  'FORBIDDEN': 403,
  'NOT_FOUND': 404,
  'INTERNAL_SERVER_ERROR':500,
  'SERVICE_UNAVAILABLE': 503,
  'GATEWAY_TIMEOUT': 504,
}
```

---

## Api Key


---

## Http Methods



### clase 10/ 11 :
https://github.com/platzi/consumo-api-rest-javascript/tree/059992c2290a96254fc8ed53c7668debe6aef1a7

---

## ¿Qué son los Headers HTTP?

Los HTTP headers son la parte central de los HTTP requests y responses, y transmiten información acerca del navegador del cliente, de la página solicitada o del servidor

Los headers son esquemas de key: value que contienen información sobre el HTTP request y el navegador. Aquí también se encuentran los datos de las cookies

Los API Headers contienen una gran cantidad de información para rastrear posibles problemas al usar cualquier API. La mayor parte del tiempo, no los mirarás. Pero cuando surgen problemas, los headers son el primer lugar en el que debes buscar.


Tipos de Headers:

https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types


## FormData

```
function miniatura() {
    const form = document.getElementById('uploadingForm')
    const formData = new FormData(form)
	//usamos el FileReader para sacar la información del archivo del formData
    const reader = new FileReader();

//Este código es para borrar la miniatura anterior al actualizar el form.
    if (form.children.length === 3) {
        const preview = document.getElementById("preview")
        form.removeChild(preview)
    }
//aquí sucede la magia, el reader lee los datos del form.
    reader.readAsDataURL(formData.get('file'))

//Éste código es para cuando termine de leer la info de la form, cree una imagen miniatura de lo que leyó el form.
    reader.onload = () => {
        const previewImage = document.createElement('img')
        previewImage.id = "preview"
        previewImage.width = 50
        previewImage.src = reader.result
        form.appendChild(previewImage);
    }

}
```

https://developer.mozilla.org/es/docs/Web/API/FormData

https://muffinman.io/blog/uploading-files-using-fetch-multipart-form-data/

https://github.com/platzi/consumo-api-rest-javascript/tree/93e7314bec42af1df8f27c88a7bfae28a41c3b26


## CORS, caché, redirect 

* https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
* https://developer.mozilla.org/en-US/docs/Web/API/fetch
* https://developer.mozilla.org/en-US/docs/Web/API/Request
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#freshness
* https://developer.mozilla.org/en-US/docs/Web/API/Headers
* https://developer.mozilla.org/es/docs/Web/HTTP/Caching#actualizaci%C3%B3n
* https://developer.mozilla.org/en-US/docs/Web/API/Response

## GraphQL, Web Sockets y Web 3.0: el mundo más allá de REST

* DNS (Domain Name System) lo usamos para poder comunicarnos con otros sitios a travez de un nombre de dominio como wwwplatzicom, sin ello sería atravez de la IP “000.00.000.000” del servidor donde se encuentra esa página y como es muy larga y difícil de recordar se uso DNS en la web2.

* ENS (Ethereum Naming Service) es la sustitución del DNS pero en la web3, ahora como cada persona tiene su wallet en el mundo del crypto pues la dirección seria algo a si “e32fre43f584bnf2784b3” lo cual se repite la historia como con la IP, es muy difícil de recordarla.

* Al comprar el dominio ENS seria de esta forma “badman.eth”. Alfín otra forma de recordarla más fácil.

* https://platzi.com/blog/introduccion-a-graphql
* https://platzi.com/blog/rest-o-graphql/
* https://platzi.com/blog/websockets-en-nodejs/
* https://platzi.com/blog/el-rey-ha-muerto-larga-vida-a-graphql/


## Gestión de dependencias

### Historia
* 1995 Nacimiento de JS --> Uno de los lenguajes mas populares con miles de aplicaciones y grandes empresas apostando por este recurso
* 2009 Nace Node.js --> Un entorno en tiempo de ejecucion multiplataforma.
* 2009 NPM (Node Package Manager) --> Gestor de paquetes por defecto para Node.js

### ¿Qué son los gestores de dependencias?
Organizan, administran y tienen una serie de herramientas las cuales podemos aprovehar en nuestros proyectos y ser mucho mas agiles en la creación de nuestras aplicaciones.

### Paquetes y modulos
Van a ser instalados y utlizados segun sea el caso. Podemos tener paquetes que funcionan solamente de lado de node asi como tambien de lado de la arquitectura web.

### Herramientas que tenemos al instalar Node.js
* Repositorio onlines --> Podemos publicar paquetes que sean mejoras y/o ayudas para la construccion de aplicaciones.
* Command Line Client (CLI) --> Cliente que nos ayuda a trabajar de manera correcta con comandos

## ¿Cuál versión de Node.js debo de tener?

La versión actual (18.4.0) incluye todas las características hasta el último cambio listo para que pueda llegar a cualquier computadora.

La versión LTS (16.15.1) es una versión de soporte extendido. Nos permite utilizar una versión que anteriormente va a tener un alcance mayor. En otras palabras, LTS es el soporte que les está brindando Node como organización para reparar o darle seguimiento de alguna manera con el objetivo de no dejarle obsoleta la versión.

Si vas a tener un soporte mayor a alguna implementación o que quieres que mantenga el soporte por más de un tiempo establecido, puedes instalar la versión LTS.

Pero si vas a hacer un equipo de desarrollo donde vas a trabajar con proyectos, lo ideal es utilizar la última versión (la versión actual)

Tambien podemos usar nvm ( node version manager) que nos permite tener diferentes versiones de node JS

* https://github.com/nvm-sh/nvm

### Para actualizar Node en Linux Ubuntu para WSL

Revisamos la versión de npm
```
~$ npm --version
```
Instalamos la ultima versión de npm
```
~$ sudo npm install -g npm@latest
```
Comprobamos la nueva versión
```
~$ npm --version
```

Limpiamos la caché
```
~$ sudo npm cache clean -f
```

Actualizamos Node
```
~$ sudo npm install -g n

~$ sudo n stable
```

## Instalacion de dependecias

### Dependencia que solo va a ser utilizada en el entorno de desarollo
```
npm install package-name -D
npm install package-name --save-dev
```
### Dependencia para ser llevada a produccion.
```
npm install package-name -S
npm install package-name --save
```

### Paquetes Globales
```
npm install -g
```
### Ver lista de los paquetes
```
npm list
```
### Ver lista de paquetes globlales
```
npm list -g
```

## Instalación de dependencias de versiones específicas

### Instalar dependencia de manera opcional
```
npm install package-name -o
```
El paquete aparecerá en en "optionalDependencies".

### Simular instalacion
Se pueden generar conflictos cuando se tienen paquetes que usan la misma dependencia pero en versiones diferentes. Para evitar esto se puede simular una instalación con:
```
npm install package-name —dry-run
```
Con esto se simula la instalación pero sin agregar ningún paquete, si no hay ningún conflicto se procede a instalar de la manera convencional.

### Instalar la versión especifica de un paquete
```
npm install package-name@0.15.0
```

### Instalar la versión más reciente
```
npm install package-name@latest
```

## Comandos en npm (scripts)

Cabe destacar que se pueden encadenar los scripts e incluso un script puede ejecutar otro script
```
"scripts": {
	"cowsay": "fortune | cowsay",
	"doublecowsay": "npm run cowsay && npm run cowsay"
}
```

### NPX
NPX (Node Package Execute) nos permite ejecutar acciones sin necesitad de instalar paquetes. Se usa mucho para instalar frameworks o librerias como React, Angular, Vue

```
npx create-react-app my-app
```

![img](https://static.platzi.com/media/user_upload/npm-npx-2e824100-77fb-49a5-904c-8713f1d4b5e5.jpg)

## Actualizacion

### Muestra los cambios en las dependencias, actualizaciones
```
npm outdate
```

### Actualizar paquete
```
npm install package-name@latest
```

## Seguridad y solución de problemas

### Vulnerabilidades: 
* Moderate: Podemos dejar pasar
* High: Debemos empezar a considerar
* Critical: Debemos resolverlas si o si

Podemos utilizar varios comandos para analizarlas y solucionarlas

### Auditar las dependencias que tenemos instaladas en busca de vulnerabilidades:
```
npm audit
```
###  Auditar e intentar arreglar las vulnerabilidades de nuestras dependencias:
```
npm audit fix
```
### Mostrar los resultados de la auditoría a manera más profunda en formato json.
```
npm audit --json
```

### Corregir los problemas encontrados en las librerías instalando otras dependencias por debajo si es necesario.
```
npm audit fix --force
```
 
### Eliminación de dependencias y Package lock
```
npm uninstall package-name
```
Otra forma es ir al archivo package.json y eliminar del listado de dependencia, dependencias de desarrollo o dependencias opcionales; una vez eliminado de la lista ejecutamos:
```
rm -rf node_modules/
npm install
```

### Para compilar el proyecto usamos
```
npm run build
```

### Para compilar el proyecto y obtener mas informacion usamos
```
npm run build --dd
```

### Para ver librerias deprecadas
```
npm ci
```

## Crear un paquete de npm

Para crear un paquete debemos irnos a la pagina de npm y verificar que no exista ninguno con el nombre que le queremos poner.

Dentro de nuestro proyecto debemos crear una carpeta bin donde crearemos un archivo base.

En el package.json debemos especificar:
```
"homepage": "nuestro repo de github",
"bin": {
	"nombre-paquete":"./bin/nuestro-archivo"
},
"preferGlobal": true
```

## Publicar un paquete

Primero necesitamos ejecutar
```
npm link
```
para crear un enlace simbolico que reconozca nuestro paquete dentro del listado de paquetes de npm.

Antes de publicar el paquete se debe probar que todo funcione con el comando:
```
npm install -g /nuestra-ruta-del-proyecto
```

Si funciona todo bien iniciamos sesion en npm y pasamos nuesro user y password a la terminal donde ejecutamos el proyecto con:
```
npm add user
```

Para finalmente publicar el paquete utilizamos:
```
npm publish
```

## Versionado de paquetes y paquetes privados

https://semver.org/lang/es/
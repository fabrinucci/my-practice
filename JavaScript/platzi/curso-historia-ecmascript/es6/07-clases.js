//* declarando
// class User {}

//* instancia de una clase
// const newUser = new User()

//- llamando a un metodo por medio de dos instancias de una misma clase

// class User{
//   // metodos
//   gretting() { return 'Hello friend'}
// }

// const newUser = new User();
// const otherUser = new User();

// console.log(newUser.gretting());
// console.log(otherUser.gretting());


//- Constructor

// class User {
//   constructor() {
//     console.log('New user');
//   }

//   gretting() {
//     return 'Hola que ase'
//   }
// }

// const david = new User();

//- this

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  speak() {
    return 'Hello';
  }

  gretting() {
    return `${this.speak()} my name's ${this.name} and I'm ${this.age} years old`
  }
}

const camila = new User('Camila', 22);
console.log(camila.gretting())


class Animal {
  constructor(saludo) {
    this.saludo = saludo
  }

  hablar() {
    return `${this.saludo}`
  }
}

const gato = new Animal('miau')
const perro = new Animal('gua gua')

console.log(gato.hablar());
console.log(perro.hablar());


// setters getters

class Developer {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  speak() {
    return 'Hello'
  }

  gretting() {
    return `${this.speak()} I'm ${this.name} and I'm ${this.age}`
  }

  get newAge() {
    return this.age
  }

  set newAge(n) {
    return this.age = n
  }
}

const newDeveloper = new Developer('Julian', 25)
console.log(newDeveloper.gretting());

newDeveloper.newAge = 31
console.log(newDeveloper.gretting());
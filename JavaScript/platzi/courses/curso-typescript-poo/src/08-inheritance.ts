export class Animal {
  constructor(public animalName: string) {}
  
  move() {
    return 'Moving alone';
  }

  greeting() {
    return `Hello I'm ${this.animalName}`
  }
}

export class Dog extends Animal {
  constructor(
    dogName: string,
    public owner: string
  ) {
    super(dogName)
  }

  woof() {
    return 'Woof, gua uga'
  }

  ownerDog() {
    return `My owner is ${this.owner}`
  }
}

const pepe = new Animal('Pepe')
console.log(pepe.greeting())

const ricky = new Dog('Ricky', 'Carlos Garcia')
console.log(ricky.greeting())
console.log(ricky.move())
console.log(ricky.woof())
console.log(ricky.ownerDog())



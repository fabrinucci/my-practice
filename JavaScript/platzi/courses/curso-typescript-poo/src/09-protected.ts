export abstract class Animal {
  constructor(protected name: string) {}
  
  move() {
    console.log('Moving alone')
  }

  greeting() {
    return `Hello I'm ${this.name}`
  }

  protected doSomething() {
    console.log('Do something')
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name)
  }

  woof(times: number): void {
    for( let index = 0; index < times; index++) {
      console.log(`woff! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('Moving as a dog');
    super.move();    
  }

  ownerDog() {
    return `My owner is ${this.owner}`
  }
}

const pepe = new Animal('Pepe')
console.log(pepe.greeting())

const ricky = new Dog('Ricky', 'Carlos Garcia')
ricky.woof(2);
ricky.move()
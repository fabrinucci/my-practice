class Developer {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  #speak() {
    return 'Hello'
  }

  #gretting() {
    return `${this.#speak()} I'm ${this.name} and I'm ${this.age}`
  }

  gretting() {
    return `${this.#speak()} I'm ${this.name} and I'm ${this.age}`
  }

  get #newAge() {
    return this.age
  }

  set #newAge(n) {
    return this.age = n
  }
}

const newDeveloper = new Developer('Julian', 25)
// console.log(newDeveloper.#gretting()); // property #greeting is a private class and it's not accessible

newDeveloper.newAge = 31
console.log(newDeveloper.gretting()); // undefined
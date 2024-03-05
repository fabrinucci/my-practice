/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

class Singleton {
  static instance = undefined;
  constructor(version) {
    this.version = version;
  }

  static getInstance(version) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }
    return Singleton.instance;
  }
}

const appSingleton = () => {
  const singleton1 = Singleton.getInstance('1.0');
  const singleton2 = Singleton.getInstance('2.0');
  const singleton3 = Singleton.getInstance('3.0');

  console.log(singleton1); // Singleton { version: '1.0' }
  console.log(singleton2); // Singleton { version: '1.0' }
  console.log(singleton3); // Singleton { version: '1.0' }

  console.log(singleton1 === singleton2); // true
  console.log(singleton1 === singleton3); // true
};

appSingleton();

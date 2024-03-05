/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */

class SingletonTs {
  private static instance: SingletonTs;
  private version: string;

  private constructor(version: string) {
    this.version = version;
  }

  static getInstance(version: string): SingletonTs {
    if (!SingletonTs.instance) {
      SingletonTs.instance = new SingletonTs(version);
    }
    return SingletonTs.instance;
  }
}

const appSingletonTs = () => {
  const singleton1 = SingletonTs.getInstance('1.0');
  const singleton2 = SingletonTs.getInstance('2.0');
  const singleton3 = SingletonTs.getInstance('3.0');

  // const singleton4 = new SingletonTs()
  // Constructor of class SingletonTs is private and only accessible within the class declaration.

  console.log(singleton1); // Singleton { version: '1.0' }
  console.log(singleton2); // Singleton { version: '1.0' }
  console.log(singleton3); // Singleton { version: '1.0' }

  console.log(singleton1 === singleton2); // true
  console.log(singleton1 === singleton3); // true
};

appSingletonTs();

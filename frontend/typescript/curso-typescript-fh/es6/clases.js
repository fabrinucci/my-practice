(() => {

  class Avenger {
    name;
    power;

    constructor(name, power) {
      this.name = name
      this.power = power
    }
  }

  class FlyingAvenger extends Avenger {
    
    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk', 9000);
  const falcon = new Avenger('Falcon', 50);

  console.log(hulk);
  console.log(falcon);
  
})();
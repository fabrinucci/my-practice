(() => {

  type Hero = {
    name: string;
    age: number;
    powers: number[];
    getName?: () => string;
  }
  
  let superman: Hero = {
    name: 'Superman',
    age: 40,
    powers: [1, 5, 8],
  }

  let flash: Hero = {
    name: 'Flash',
    age: 28,
    powers: [2, 4, 6, 10],
    getName() {
      return this.name;
    }
  }

  let myCustomVariable: string | number | Hero;
  
  myCustomVariable = 'Fernando';
  console.log( typeof myCustomVariable);

  myCustomVariable = 78;
  console.log( typeof myCustomVariable);

  myCustomVariable = {
    name: 'Pedro',
    age: 55,
    powers: [4654, 410, 205],
    getName() {
      return 'Julian';
    }
  };
  console.log( typeof myCustomVariable);

})();
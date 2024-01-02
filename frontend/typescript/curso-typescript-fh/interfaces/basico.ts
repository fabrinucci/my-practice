(() => {

  interface Hero {
    name: string;
    age: number;
    powers: number[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: [1,2,3],
  }

  let superman: Hero = {
    name: 'Clark Kent',
    age: 46,
    powers: [1,2,3,4,5],
  }

})();
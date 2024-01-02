(() => {

  let superhero: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: 'Superman',
    age: 40,
    powers: ['Fly', 'Nuclear Vision', 'Super Jump'],
  }
  
  superhero = {
    name: 'Flash',
    // age: 28,
    powers: ['Super Speed'],
    getName() {
      return this.name;
    }
  }
  
})();
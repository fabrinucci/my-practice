(() => {

  class Avenger {
    
    static avgAge: number = 35;
    static getName() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName: string,
    ) {}

    private bio() {
      return `${this.name} (${this.team})`
    }

    getBio() {
      return this.bio();
    }
  }

  console.log(Avenger.getName());
  const hulk: Avenger = new Avenger('Hulk', 'Avengers', 'Bruce Banner');
  
  // console.log(hulk.bio());
  console.log(hulk.getBio());
  
})();
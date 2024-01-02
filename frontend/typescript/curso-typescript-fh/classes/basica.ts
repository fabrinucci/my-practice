(() => {

  //* Forma larga de pasar argumentos
  // class Avenger {
  //   private name: string;
  //   private team: string;
  //   public realName?: string;
  //   static avgAge: number = 35;

  //   constructor(name: string, team: string, realName: string) {
  //     this.name = name;
  //     this.team = team;
  //     this.realName = realName;
  //   }
  // }

  //* Forma corta de pasar argumentos
  class Avenger {
    
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName: string,
    ) {}
  }

  const hulk: Avenger = new Avenger('Hulk', 'Avengers', 'Bruce Banner');
  
  console.log(hulk);
  
})();
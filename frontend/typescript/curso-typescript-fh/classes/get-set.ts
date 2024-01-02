(() => {

  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ) {
      console.log('Avenger llamado');
    }
    protected getFullName() {
      return `${this.name} ${this.realName}`
    }
  }
  
  class Xmen extends Avenger{
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ) {
      super(name, realName);
      console.log('Xmen llamado');
    }

    get fullName() {
      return `${this.name} - ${this.realName}`
    }

    set fullName(name: string) {
      this.name = name;
    }
  }
  
  const xmen = new Xmen('Wolverine', 'Logan', true);
  console.log(xmen.fullName);
  xmen.fullName = 'Hulk'
  console.log(xmen.fullName);

})();
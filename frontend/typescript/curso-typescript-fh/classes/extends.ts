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

    getFullNameX() {
      return super.getFullName()
    }
  }
  
  const xmen = new Xmen('Wolverine', 'Logan', true);

  console.log(xmen);
  console.log(xmen.getFullNameX());

})();
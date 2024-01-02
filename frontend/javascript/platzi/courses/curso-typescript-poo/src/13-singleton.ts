class MyService {
  private static instance: MyService | null = null;

  private constructor(private name: string) {};

  getName() {
    return this.name;
  }

  static create(name: string) {
    if(MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const service = MyService.create('First service')
console.log(service.getName()); // First service

const service2 = MyService.create('Second service')
console.log(service2.getName()); // First service
console.log(service === service2); // true

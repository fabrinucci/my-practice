class People{
  showName() {
    console.log("My name is David")
  }
  #showAge() {
    console.log("David is 21")
  }
}

const people = new People()

people.showName()
people.showAge() 
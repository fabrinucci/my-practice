let a = 1
let b = a

console.log(a, b) // 1 1
b += 1
console.log(a, b) // 1 2


let car = {
  color: 'red',
  year: 2019,
  km: 0,
}

let newCar = car
console.log(car, car2)

car2.color = 'blue'
console.log(car, car2) // ambos objetos tienen color azul, no solo `car2` ya que estamos copiando la referencia en memoria


// Object.assign
let auto = {
  color: 'red',
  year: 2019,
  km: 0,
}

let auto2 = Object.assign({} , auto)
auto2.color = 'blue'

console.log(auto, auto2) // `auto` es de color rojo y `auto2` de color azul

//////////////////////

let carro = {
  color: 'red',
  year: 2019,
  km: 0,
  owner: { name: 'David', age: 25 }
}

const newCarro = Object.assign({}, carro)
newCarro.owner.age = 20

console.log(carro, newCarro) 

// json.parse y json.stringify
let bondi = {
  color: 'red',
  year: 2019,
  km: 0,
  owner: { name: 'David', age: 25 }
}

let newBondi = JSON.parse(JSON.stringify(bondi))
newBondi.owner.age += 4

console.log(bondi, newBondi) // bondi -> age = 25 | newBondi -> age = 29
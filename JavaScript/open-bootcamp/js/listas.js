// .map() .filter() .reduce();

const array = ['Madrid', 'Amsterdam', 'Lisboa', 'Copenhagen'];

const list = [
  { name: 'Julio', age: 25 },
  { name: 'Marta', age: 22 },
  { name: 'Pedro', age: 46 },
  { name: 'Lucia', age: 32 },
  { name: 'Belen', age: 43 },
]

const mapFunction = () => {
  array.map( (value, index) => {
    console.log(`${index} - ${value}`)
  })
}

const filterFunction = () => {
  array.filter( cities => console.log(`${cities}: ${cities.includes('M')}`))
}

mapFunction();
filterFunction()


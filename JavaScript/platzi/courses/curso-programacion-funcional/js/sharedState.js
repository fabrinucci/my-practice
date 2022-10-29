// Intento #1
const a = {
  value: 2
}

const addOne = () => a.value += 1
const timesTwo = () => a.value *= 2

addOne()
timesTwo()
console.log(a.value) // 6

// Sin embargo, si ejecutamos las mismas funciones en orden invertido
// obtenemos resultados diferentes

timesTwo()
addOne()
console.log(a.value) // 5

//////////////////////////////

const b = {
	value: 2
}

const addOneX = x => Object.assign({}, x, { value: x.value + 1 })
const timesTwoX = x => Object.assign({}, x, { value: x.value * 2 })

addOneX(b)
timesTwoX(b)
console.log(b.value)

// El resultado siempre es el mismo a pesar de
// ejecutar las funciones en orden diferente

timesTwoX(b)
addOneX(b)
console.log(b.value)
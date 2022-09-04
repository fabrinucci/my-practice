
let numbers = [1, 3, 4, 6, 7, 8];
console.log(numbers.includes(9))

const list = ["oscar", "David", "Ana"]
console.log(list.includes("oscar"))
console.log(list.includes("Oscar"))

const familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(
	familyEmoji.includes("👨"),
	familyEmoji.includes("👩"),
	familyEmoji.includes("👦")
);


// Otras formas

const letras = { a: 1, b: 2, c: 3 }

"toString" in letras // true
letras.hasOwnProperty("toString") // false
Object.hasOwn(letras, "toString") // false
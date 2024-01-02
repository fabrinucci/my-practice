function greeting(){
  let userName = 'Ana';
  console.log(userName); // output: 'Ana'

  if (userName === 'Ana'){
    console.log(`Hello ${userName}`) // output: 'Hello Ana'
  }
}

greeting()
console.log(userName); // output: is not defined

nameOfDog("Elmo"); 
function nameOfDog(name) { console.log(name); };


const fruits = () => { 
  if (true) { 
    var fruit1 = 'apple'; 
    const fruit2 = 'banana'; 
    let fruit3 = 'kiwi'; 
  } 
  
  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}

var fru = '0'
fr = '1'
let fruit = '2'
const frui = '5'


function myd() {
  console.log(fru)
  console.log(fr)
  console.log(fruit)
  console.log(frui)
}

myd()
function fruits() {
  if( true ) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; // block scope
    
    console.log(fruit2); // output: 'Kiwi'
    console.log(fruit3); // output: 'Banana'
  }
  console.log(fruit1); // output: 'Apple'
  console.log(fruit2); // output: is not defined 
  console.log(fruit3); // output: is not defined
}

fruits()
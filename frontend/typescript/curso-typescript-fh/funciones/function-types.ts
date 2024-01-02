(() => {

  const addNumbers = (a: number, b: number) => a + b; 
  const greet = (name: string) => `Hola ${name}`; 
  const save = () => 'File saved'; 

  let myFunction;

  myFunction = 10;
  console.log(myFunction);

  myFunction = addNumbers;
  console.log(myFunction(1, 5));
  
  myFunction = greet;
  console.log(myFunction('Pepe'));

  myFunction = greet;
  console.log(save());

})();
(() => {
  const printObject = <T> (argument: T): T => {
    return argument;
  }
  function genericFc<T>(argument: T): T {
    return argument;
  }
  
  printObject(123)
  printObject(new Date())
  printObject({ a:1, b:2, c:3 })
  printObject([1,2,3,4,5])
  printObject('Hola mundo')
  
  genericFc({ name:'Pep', age:254, id:'fg45er57re555erer7key' })
  genericFc([1650,5487,26548,1564])
  genericFc(56643664328)
  genericFc(new Date())
  genericFc('frejhfehriouferfpkoerfer fje rjfiwe4j  fepr pojkpkos gep[a[ pqapjh')
})()

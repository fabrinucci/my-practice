function getValue<myType>(value: myType) {
  // const array: myType[] = [value];
  return value;
}

getValue<number>(5)
getValue<string>('Jim')
getValue<string[]>(['Luck', 'Gena', 'Mina'])


function getEmployee<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let employee = {
  name: 'John Rambo',
  company: 'Phillips SA'
}

console.log(getEmployee(employee, 'company')); // Perfecta invocación
// console.log(getEmployee(employee, 'propiedadInexistente'));
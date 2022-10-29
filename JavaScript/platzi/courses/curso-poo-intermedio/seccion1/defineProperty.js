const person = {
  userName: 'zajithcorro',
  age: 26,
  approvedCourses: ['Curso Profesional de Git y Github'],
  addApprovedCourse (course) {
    console.log(this)
    this.approvedCourses.push(course);
  }
}

Object.defineProperty(person, "navigator", {
  value: "chrome",
  enumerable: false,
  writable: true,
  configurable: true
}) // enumerable: No se mostrara en la enumeración de las mismas al ser false.

Object.defineProperty(person, "editor", {
  value: "VScode",
  enumerable: true,
  writable: false,
  configurable: true
}) // writable: Esta propiedad no puede ser modificada si es false.

Object.defineProperty(person, "terminal", {
  value: 'WSL',
  enumerable: true,
  writable: true,
  configurable: false
}) // configurable: No puede ser eliminada en false

Object.defineProperty(person, "gender", {
  value: "male",
  writable: false,
  enumerable: false,
  configurable: false
}) 

// Object.seal(person); // no se puede borrar (configurable = false)
// Object.freeze(person); // no se puede borrar ni modificar (configurable = false and writeble = false)
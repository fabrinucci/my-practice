const juan = {
  name: 'Juan',
  age: 20,
  approvedCourses: ['Html, css X'],
  addCourse( newCourse ) {
    console.log('this', this)
    console.log('this.approvedCourses', this.approvedCourses)
    this.approvedCourses.push(newCourse)
  }
}

console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan))
console.log(Object.entries(juan))

console.log(Object.getOwnPropertyDescriptors(juan));

// juan['nuevaPropiedad'] = 'value'
Object.defineProperty(juan, 'nasaTest', {
  value: 'aliens',
  configurable: true,
  enumerable: true,
  writable: true,
})
// Object literal
const natalia = {
  'age': 21,
  'country': 'Ecuador',
  cursosAprobados: [
    'Css Grid',
    'JavaScript Funcional'
  ],
  // methods
  aprobarCurso(nuevoCursoAprobado) {
    this.cursosAprobados.push(nuevoCursoAprobado);
  }
}

natalia.aprobarCurso('Flexbox')
console.log(natalia);


// Prototypes

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso= (nuevoCursoAprobado) => {
  //   this.cursosAprobados.push(nuevoCursoAprobado)
  // }
}

Student.prototype.aprobarCurso = function (nuevoCursoAprobado) {
  this.cursosAprobados.push( nuevoCursoAprobado )
}

const lucas = new Student(
  'Lucas',
  25,
  [
    'Curso Algoritmos',
    'Curso PHP Basico'
  ]
);

lucas.aprobarCurso('JavaScript moderno');

console.log(lucas);

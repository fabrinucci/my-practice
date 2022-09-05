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


// Clases

class Alumno {
  constructor({
    name,
    age,
    cursosAprobados = [], //* Por defecto el parámetro tiene un valor vacío
    email,
  }) {
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
    this.email = email
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito)
  }
};

const patricia = new Alumno({
  name: 'Patricia',
  email: 'patricia@gmail.com',
  age: 21,
  cursosAprobados: ['POO'],
});

patricia.aprobarCurso('Manipulacion del DOM');

console.log(patricia);

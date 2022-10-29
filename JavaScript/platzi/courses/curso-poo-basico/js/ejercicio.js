

class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'student',
  }) {
    this.content = content
    this.studentName= studentName
    this.studentRole = studentRole
    this.likes = 0
  }

  publish() {
    console.log(`Comment by ${this.studentName} - ${this.studentRole}`);
    console.log(`${this.likes} likes`);
    console.log(this.content);
  }
}

class Course {
  constructor({
    id,
    name,
    teacher,  
  }) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
  }
}

const cursoJSModerno = new Course({
  id: 12,
  name: 'Curso JavaScript Moderno',
  teacher: 'Juan Pablo de la Torre'
})

const cursoReactAvanzado = new Course({
  id: 29,
  name: 'Curso React Avanzado',
  teacher: 'Miguel Angel Duran'
})

const cursoMobileFirst = new Course({
  id: 6,
  name: 'Curso Mobile First',
  teacher: 'Diego de Granda',
  lang: 'english'
})

const cursoFrontendDev = new Course({
  id: 4,
  name: 'Curso FrontEnd Developer',
  teacher: 'Stephany Aguilar',
  isFree: true
})


class LearningPath {
  constructor({
    id,
    name,
    courses = []
  }) {
    this.id = id;
    this.name = name;
    this.courses = courses
  }
}

const escuelaWeb = new LearningPath({
  id: 1,
  name: 'Escuela de Desarrollo Web',
  courses: [
    cursoFrontendDev,
    cursoMobileFirst,
    cursoJSModerno,
    cursoReactAvanzado,
  ]
})

const escuelaJS = new LearningPath({
  id: 2,
  name: 'Escuela FullStack JavaScript',
  courses: [
    cursoJSModerno,
    cursoReactAvanzado,
  ]
})

class Student {
  constructor({
    name,
    username,
    email,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    learningPaths = [],
    approvedCourse = []

  }) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.socialMedia = {
      twitter,
      instagram,
      facebook
    };
    this.learningPaths = learningPaths
    this.approvedCourse = approvedCourse
  }

  publishComment(contentComment) {
    const comment = new Comment({
      content: contentComment,
      studentName: this.name
    });
    comment.publish();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourse.push(newCourse);
    } else {
      console.warn(`We are sorry ${this.name}, you can only take the free courses`);
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if(newCourse.lang !== 'english') {
      this.approvedCourse.push(newCourse);
    } else {
      console.warn(`We are sorry ${this.name}, you can't take the english courses`);
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourse.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourse.push(newCourse);
  }

  publishComment(contentComment) {
    const comment = new Comment({
      content: contentComment,
      studentName: this.name,
      studentRole: 'teacher'
    })
    comment.publish()
    
  }
}









const miguelito = new FreeStudent({
  name: 'Miguel',
  username: 'miguelito',
  email: 'miguelito342@gmail.com',
  twitter: 'miguelitofn',
  learningPaths: [
    escuelaJS
  ]
})

const pedrito = new BasicStudent({
  name: 'Pedro',
  username: 'pedrito',
  email: 'pedrito342@gmail.com',
  instagram: 'pefrotp',
  learningPaths: [
    escuelaJS,
    escuelaWeb
  ],
})

const teacherLoki = new TeacherStudent({
  name: 'Loki',
  username: 'loki',
  email: 'loki@gmail.com',
  instagram: 'loki',
})

console.log(miguelito);
console.log(pedrito);




/*
class Course {
  constructor({
    id,
    name,
    teacher,
    lessons = [],
  }) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
    this.lessons = lessons;
  }
}

class LearningPath {
  constructor({
    id,
    name,
    courses = [],
  }) {
    this.id = id;
    this.name = name;
    this.courses = courses;
  }

  addCourse(course) {
    this.courses.push(course);
  }

  replaceCourse(oldCourse, newCourse) {
    const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);

    if (oldCourseIndex !== -1) {
      this.courses[oldCourseIndex] = newCourse;
    }

    return this.courses;
  }

  deleteCourse(oldCourse) {
    const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
    this.courses.splice(courseIndex, 1);

    return this.courses;
  }
}

const reactNativeLearningPath = new LearningPath({
  id: 'react-native',
  name: 'Desarrollo de Apps con React Native',
  courses: [
    new Course({ 
      id: 'basico-javascript', 
      name: 'Curso Básico de JavaScript', 
      teacher: 'Diego De Granda',
    }),
    new Course({
      id: 'ecmascript-6',
      name: 'Curso de ECMAScript 6+',
      teacher: 'Orlando Naipes',
    }),
    // etc...
  ]
})
*/
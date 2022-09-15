
function isObject(subject) {
  return typeof subject === 'object';
}

function isArray(subject) {
  return Array.isArray(subject)
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject)
  const subjectIsObject = isObject(subject)

  if( subjectIsArray ) {
    copySubject = [];
  } else if( subjectIsObject ) {
    copySubject = {};
  } else {
    return subject;
  }

  for( key in subject ) {
    const keyIsObject = isObject(subject[key])

    if( keyIsObject ) {
      copySubject[key] = deepCopy(subject[key])
    } else {
      if(subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key]
      }
    }
  }

  return copySubject;
}

function requiredParam(param) {
  throw new Error(`${param} is required`)
}

function createLearningPath({
  name = requiredParam('name'),
  courses = []
}) {
  const private = {
    _name: name,
    _courses: courses
  }

  const public = {
    get name() {
      return private._name
    },

    set name(newName) {
      if (newName.length >= 3 ) {
        return private._name = newName
      } else {
        console.warn('Your name must be at least 3 characteres');
      }
    },

    get courses() {
      return private._courses
    }
  }
  return public;
}

function createStudent({
  name = requiredParam('name'),
  email= requiredParam('email'),
  age,
  twitter,
  github,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {} ) {

  const private = {
    '_name': name,
    _learningPaths: learningPaths
  }
  
  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      github,
      instagram
    },        
    get name() {
      return private._name
    },

    set name(newName) {
      if(newName.length >= 3 ) {
        return private._name = newName;
      } else {
        console.warn('Your name must be at least 3 characteres');
      }
    },

    get learningPaths() {
      return private._learningPaths
    },

    set learningPaths(newLP) {
      if ( !newLP.name ) {
        return console.warn('Your learning path are not have name property');
      }

      if( !newLP.courses ) {
        return console.warn('Your lp are not have courses');
      }

      if( !isArray(newLP.courses) ) {
        return console.warn('Your lp are not a list');
      }

      private._learningPaths.push(newLP)
    },
  }

  return public;
}

const juan = createStudent({
  name: 'Juan',
  age: 32,
  email: 'juanitozeblolas2@emial.com',
  twitter: '@juanitozeblolas2'
});


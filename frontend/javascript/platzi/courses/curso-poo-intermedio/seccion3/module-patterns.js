
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
    '_name': name 
  }
  
  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      github,
      instagram
    },        
    readName() {
      return private._name
    },
    changeName(newName) {
      private._name = newName
    },
  }

  Object.defineProperty(public, 'readName', {
    writable: false,
    configurable: false
  })

  Object.defineProperty(public, 'changeName', {
    writable: false,
    configurable: false
  })

  return public;
}

const juan = createStudent({
  name: 'Juan',
  age: 32,
  email: 'juanitozeblolas2@emial.com',
  twitter: '@juanitozeblolas2'
});


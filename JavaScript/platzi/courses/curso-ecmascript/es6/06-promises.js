const anotherFuncion = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("hey!!");
    } else {
      reject ( "whooooops!");
    }
  })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));

// anotherFuncion()
// .then(console.log)
// .catch(console.log);

// Esto es lo mismo pero mas corto xd
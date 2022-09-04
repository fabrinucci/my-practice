try {
  hello ();
} catch (error) {
  console.log(error);
}

// El error del catch ahora es opcional

try {
  hello();
} catch(e) {
  console.log('F por el hello()!')
  console.log(e);
}

try {
  anotherFn();
} catch {
  console.log('Esto es un error')
}
const greeting = () => {
  let username = 'Oscar'

  const displayUserName = () => {
    return `Hello ${ username }`
  }
  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());
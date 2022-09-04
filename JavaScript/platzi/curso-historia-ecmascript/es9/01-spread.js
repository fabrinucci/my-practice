const user = { username: 'bosti', age: 22, coutry: 'AR' };
const { username, ...values } = user;

console.log(user.username);
console.log(user);
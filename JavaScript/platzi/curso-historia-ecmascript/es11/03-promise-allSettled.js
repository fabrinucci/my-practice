const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise1, promise2, promise3]) // success
.then(response => console.log(response));

Promise.all([promise1, promise2, promise3]) // error
.then(response => console.log(response));

Promise.all([promise2, promise3]) // success
.then(response => console.log(response));


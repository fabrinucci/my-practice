function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId
  }
}

console.log(newUser("bosti", 22, "AR", 1));
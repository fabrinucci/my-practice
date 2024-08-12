const sinon = require('sinon');

class UserService {
  constructor(database) {
    this.database = database;
  }

  getUser(userId) {
    return this.database.findUserById(userId);
  }
}

// Crear un stub para el método findUserById
const databaseStub = {
  findUserById: sinon.stub().returns({ id: 1, name: 'John Doe' }),
};

const userService = new UserService(databaseStub);
const user = userService.getUser(1);

// Verificar que el stub devuelve el valor esperado
console.log(user); // { id: 1, name: 'John Doe' }

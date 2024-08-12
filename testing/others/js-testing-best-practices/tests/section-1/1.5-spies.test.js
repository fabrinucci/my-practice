const sinon = require('sinon');

class UserService {
  constructor(database) {
    this.database = database;
  }

  deleteUser(userId) {
    this.database.removeUser(userId);
  }
}

// Crear un spy para el método removeUser
const database = {
  removeUser: function (userId) {},
};

const removeUserSpy = sinon.spy(database, 'removeUser');

const userService = new UserService(database);
userService.deleteUser(1);

// Verificar que removeUser fue llamado una vez con el argumento 1
console.log(removeUserSpy.calledOnce); // true
console.log(removeUserSpy.calledWith(1)); // true

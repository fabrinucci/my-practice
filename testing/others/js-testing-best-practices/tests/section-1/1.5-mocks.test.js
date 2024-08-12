const sinon = require('sinon');

class UserService {
  constructor(database) {
    this.database = database;
  }

  addUser(user) {
    this.database.saveUser(user);
  }
}

// Crear un mock de la base de datos
const databaseMock = sinon.mock({
  saveUser: function () {},
});

// Definir la expectativa: se espera que saveUser sea llamado con el argumento { name: 'John Doe' }
databaseMock.expects('saveUser').withArgs({ name: 'John Doe' }).once();

const userService = new UserService(databaseMock.object);
userService.addUser({ name: 'John Doe' });

// Verificar que las expectativas se cumplieron
databaseMock.verify();

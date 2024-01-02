class MySQLConnection {
  connect() {
    // connect to MySQL database
  }
}

class PasswordReminder {
  constructor() {
    this.dbConnection = new MySQLConnection();
  }
}

// -----------------------------------------

class MySQLConnection {
  connect() {
    // connect to MySQL database
  }
}

class PostgreSQLConnection {
  connect() {
    // connect to PostgreSQL database
  }
}

class PasswordReminder {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }
}

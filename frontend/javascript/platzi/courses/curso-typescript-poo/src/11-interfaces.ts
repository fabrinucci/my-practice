interface Driver {
  database: string;
  password: string;
  port: string;
  connect(): void;
  disconnect(): void;
  isConnect(name: string): boolean;
}

class PostgresDriver implements Driver {
  constructor(    
    public database: string,
    public password: string,
    public port: string,
  ) {}
  connect(): void {
    throw new Error("Method not implemented.");
  }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnect(name: string) {
    if(name !== 'Pepe') {
      return true;
    }
    throw new Error("Method not implemented.");
  }
}
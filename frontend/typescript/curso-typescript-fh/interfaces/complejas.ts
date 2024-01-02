(() => {

  interface Client {
    id: string;
    name: string;
    age: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    city: string
  }

  const client: Client = {
    id: '8erfg74reg54ghergeaz',
    name: 'Kike',
    age: 24,
    address: {
      id: 155,
      city: 'Lousiana',
    },
    getFullAddress() {
      return this.address?.city
    },
  }
  

})();
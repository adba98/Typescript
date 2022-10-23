((): void => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  let client: Client = {
    name: 'Oscar',
    age: 24,
    address: {
      id: 10,
      zip: '123',
      city: 'Bogota'
    },
    getFullAddress() {
      return this.address.city;
    }
  };
})();

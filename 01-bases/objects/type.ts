((): void => {
  type Hero = {
    name: string;
    powers: string[];
    age?: number;
    getName?: () => string;
  };

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  };

  let superman: Hero = {
    name: 'Clark Kent',
    age: 30,
    powers: ['Súper velocidad'],
    getName() {
      return this.name;
    }
  };
})();

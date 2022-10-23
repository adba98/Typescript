((): void => {
  interface Hero {
    name: string;
    powers: string[];
    age?: number;
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  };
})();

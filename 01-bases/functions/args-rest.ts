(() => {
  const fullName = (firstName: string, ...restNames: string[]): string => {
    return `${firstName} ${restNames.join(' ')}`;
  };

  const spiderman = fullName('Peter', 'Benjamin', 'Parker');
  console.log({ spiderman });
})();

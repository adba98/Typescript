((): void => {
  abstract class Mutant {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutant {
    public savedWorld() {
      return 'Saved world!';
    }
  }
  class Villain extends Mutant {
    public conquerWorld() {
      return 'Conquer world!';
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villain('Magneto', 'Magnus');

  // console.log(wolverine.savedWorld());
  // console.log(magneto.conquerWorld());

  const printName = (character: Mutant): void => {
    // console.log(`${character.name} (${character.realName})`);
  };
  printName(wolverine);
})();

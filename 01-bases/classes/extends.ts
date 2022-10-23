((): void => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log('Constructor Avenger');
    }

    protected getFullName() {
      return `${this.name} (${this.realName})`;
    }
  }

  class XMen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      // console.log('Constructor XMen');
      super(name, realName);
    }

    public getFullNameXMen() {
      return `X-men: ${super.getFullName()}`;
    }

    public get fullName(): string {
      return `${this.name} (${this.realName})`;
    }

    public set fullName(name: string) {
      this.name = name;
    }
  }

  const wolverine = new XMen('Wolverine', 'Logan', true);
  // console.log(wolverine);
  // console.log(wolverine.getFullNameXMen());

  wolverine.fullName = 'Lobezno';
  // console.log(wolverine.fullName);
})();

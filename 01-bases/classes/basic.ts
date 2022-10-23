(() => {
  /* 
  class BeforeAvenger {
    private name: string;
    private team: string;
    public realName?: string;
    static avgAge = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const beforeAntMan = new BeforeAvenger('AntMan', 'Capitan');
  console.log(beforeAntMan);
  console.log(BeforeAvenger.avgAge); 
  */

  class Avenger {
    static avgAge = 25;

    constructor(private name: string, private team: string, public realName?: string) {}

    static getType() {
      return this.name;
    }

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antMan = new Avenger('AntMan', 'Capitan');
  // console.log(antMan);
  // console.log(antMan.bio());

  // console.log(Avenger.getType());
  // console.log(Avenger.avgAge);
})();

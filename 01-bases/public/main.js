"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        savedWorld() {
            return 'Saved world!';
        }
    }
    class Villain extends Mutant {
        conquerWorld() {
            return 'Conquer world!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');
    const printName = (character) => {
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getType() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 25;
    const antMan = new Avenger('AntMan', 'Capitan');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} (${this.realName})`;
        }
    }
    class XMen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameXMen() {
            return `X-men: ${super.getFullName()}`;
        }
        get fullName() {
            return `${this.name} (${this.realName})`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new XMen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Lobezno';
})();
//# sourceMappingURL=main.js.map
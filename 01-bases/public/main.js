"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    let isSpiderman = true;
    let isDareDevil = false;
    console.log({ isSpiderman });
    console.log(isDareDevil ? 'A' : 'B');
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.max;
    console.log(currentAudio);
})();
(() => {
    const showError = (message) => {
        throw new Error(message);
    };
    showError('404');
})();
(() => {
    let avengers = 10;
    console.log({ avengers });
    const villains = 20;
    if (avengers < villains) {
        console.log('We have problems');
    }
    else {
        console.log('Avengers assemble');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const spiderman = 'Spiderman';
    const daredavil = "Daredevil's";
    console.log((_a = spiderman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
(() => {
    const callSpiderman = () => {
        return;
    };
    const call = callSpiderman();
    console.log({ call });
})();
(() => {
    const fullName = (firstName, ...restNames) => {
        return `${firstName} ${restNames.join(' ')}`;
    };
    const spiderman = fullName('Peter', 'Benjamin', 'Parker');
    console.log({ spiderman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado!';
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('spiderman'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Súper velocidad']
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Súper velocidad'],
        getName() {
            return this.name;
        }
    };
})();
//# sourceMappingURL=main.js.map
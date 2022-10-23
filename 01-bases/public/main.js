"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
})();
(() => {
    let client = {
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
//# sourceMappingURL=main.js.map
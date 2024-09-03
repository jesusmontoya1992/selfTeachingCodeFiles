"use strict";
// class coffeeMachine {
//     waterAmount = 0;
//     constructor(power) {
//         this.power = power;
//         alert(`Created a coffee-machine, power: ${power}`);
//     }
// }
// let coffeeMachine = new coffeeMachine(100);
// coffeeMachine.waterAmount = 200;

// making a protected property
class CoffeeMachine {
    _waterAmount = 0;
    #waterLimit = 200;

    #fixWaterAmount(value) {
        if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
        if (value < 0) value = 0;
        this._waterAmount = value;
        this.#waterLimit = this.#fixWaterAmount(value);
    }

    // set waterAmount(value) {
    //     if (value < 0) value = 0;
    //     // if (value < 0) {
    //     //     value = 0;
    //     // }
    //     this._waterAmount = value;
    // }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }
}
let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = -10;
coffeeMachine.setWaterAmount(300);
alert(coffeeMachine.waterAmount);
alert(`Power is: ${coffeeMachine.power}W`);
// coffeeMachine.power = 25;


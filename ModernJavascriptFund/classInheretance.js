"use strict";
// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} run with speed ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stands still.`);
//     }
// }
// let animal = new Animal("My animal");
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} hides!`);
//     }
// }
// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5);
// rabbit.hide();

// function f(phrase) {
//     return class {
//         sayHi() {
//             alert(phrase);
//         }
//     };
// }
// class User extends f("Hello") {};
// new User().sayHi();

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} run with speed ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stands still.`);
//     }
// }
// let animal = new Animal("My animal");
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} hides!`);
//     }
//     stop() {
//         super.stop();
//         this.hide();
//     }
// }
// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5);
// rabbit.hide();
// rabbit.stop();

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} run with speed ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stands still.`);
//     }
// }
// let animal = new Animal("My animal");
// class Rabbit extends Animal {
//     constructor(name, earlength) {
//         super(name);
//         this.earlength = earlength;
//     }
//     hide() {
//         alert(`${this.name} hides!`);
//     }
//     stop() {
//         super.stop();
//         this.hide();
//     }
// }
// let rabbit = new Rabbit("White Rabbit", 10);
// alert(rabbit.name);
// alert(rabbit.earlength);

// class Animal {
//     showName() {
//         alert("animal");
//     }
//     constructor() {
//         this.showName();
//     }
// }
// class Rabbit extends Animal {
//     showName() {
//         alert("rabbit");
//     }
// }
// new Animal();
// new Rabbit();

// super Internals
// let animal = {
//     name: "Animal",
//     eat() {
//         alert(`${this.name} eats.`);
//     },
// };
// let rabbit = {
//     __proto__: animal,
//     name: "Rabbit",
//     eat() {
//         super.eat();
//     },
// };
// let longEar = {
//     __proto__: rabbit,
//     name: "long ear",
//     eat() {
//         super.eat();
//     },
// };
// longEar.eat();
"use strict";
// teaching user to say hi
// let user = {
//     name: "john",
//     age: 30,
// };
// user.sayHi = function() {
//     alert("Hello");
// };
// user.sayHi();

// using "this" method
// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//         alert(this.name);
//     }
// };
// user.sayHi();

// "this" is not bound
// let user = { name: "John" };
// let admin = { name: "Admin" };
// function sayHi() {
//     alert( this.name );
// }
// user.f = sayHi;
// admin.f = sayHi;
// user.f();
// admin.f();
// admin["f"]();

// "this" with arrow functions
// let user = {
//     firstName: "Ilya",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };
// user.sayHi();

// create a calculator
// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//     read() {
//         this.a = +prompt("a?", 0);
//         this.b = +prompt("b?", 0);
//     }
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};
ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep();
"use strict";
// solution 1 wrappers
// let user = {
//     firstName: "John",
//     sayHi () {
//         alert(`Hello, ${this.firstName}!`);
//     }
// };
// // setTimeout(function() {
// //     user.sayHi();
// // }, 1000);
// // shorter version
// setTimeout(() => user.sayHi(), 1000);

// solution 2 bind
// let user = {
//     firstName: "John"
// };
// function func() {
//     alert(this.firstName);
// }
// let funcUser = func.bind(user);
// funcUser();

// let user = {
//     firstName: "John"
// };
// function func (phrase) {
//     alert(phrase + ", " + this.firstName);
// }
// let funcUser = func.bind(user);
// funcUser("Hello");

// let user = {
//     firstName: "John",
//     say (phrase) {
//         alert(`${phrase}, ${this.firstName}!`);
//     },
// };
// let say = user.say.bind(user);
// say("Hello");
// say("Bye");

// partial functions
// function mul (a, b) {
//     return a * b;
// }
// let double = mul.bind(null, 2);
// alert(double(3));
// alert(double(4));
// alert(double(5));

// function mul (a, b) {
//     return a * b;
// }
// let double = mul.bind(null, 3);
// alert(double(3));
// alert(double(4));
// alert(double(5));

// going partial without context
// function partial (func, ...argsBound) {
//     return function (...args) {
//         return func.call(this, ...argsBound, ...args);
//     }
// }
// let user = {
//     firstName: "John",
//     say (time, phrase) {
//         alert (`[${time}] ${this.firstName}: ${phrase}!`);
//     }
// };
// user.sayNow = partial(user.say, new Date().getHours() + ":" + new Date().getMinutes());
// user.sayNow("Hello");

// tasks
// function askPassword (ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: "John",
//     loginOk () {
//         alert(`${this.name} logged in`);
//     },
//     loginFail () {
//         alert(`${this.name} failed to log in`);
//     },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

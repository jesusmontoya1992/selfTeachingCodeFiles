"use strict";
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
// let user = new User("Jack");
// alert(user.name);
// alert(user.isAdmin);

// new.target if new is not written
// function User(name) {
//     if (!new.target) {
//         return new User(name);
//     }
//     this.name = name;
// }
// let john = User("John"); /* new will be added automatically */
// alert(john.name);

// return with constructor functions
// function BigUser() {
//     this.name = "John";
//     return { name: "Godzilla" }; /* return {} overides this. */
// }
// alert( new BigUser().name );

// function SmallUser() {
//     this.name = "John";
//     return; /* empty return = this. */
// }
// alert( new SmallUser().name );

// Methods in contructor
// function User(name) {
//     this.name = name;
//     this.sayHi = function() {
//         alert( "My name is: " + this.name );
//     };
// }
// let john = new User("John");
// john.sayHi();

// create a calculator using a constructor
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt( "a?", 0 );
//         this.b = +prompt( "b?", 0 );
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// Create an accumulator
function Accumulator (startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt( "How much to add?", 0 );
    };
}
let accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
alert(accumulator.value);
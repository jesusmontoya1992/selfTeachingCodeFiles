"use strict"
// let sum = (a, b) => a + b;
// alert(sum(1, 2));

// if using only 1 parameter, () can be ommited
// let double = n => n * 2;
// alert(double(3));

// no parameters, then empty () must be present
// let sayHi = () => alert("Hello");
// sayHi();

// let age = prompt("What is you age?", 18);
// let welcome = (age < 18) ?
//     () => alert("Hello") :
//     () => alert("Greetings!");
// welcome();

// multiline arrow functions use {}
let sum = (a, b) => {
    let result = a + b;
    return result; /* must use return with {} */
};
alert(sum(1, 2));
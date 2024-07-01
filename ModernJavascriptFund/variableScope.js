"use strict";
// code blocks

// {
// let message = "Hello"
// alert(message);
// }
// alert(message); /* will not execute */

// 2 code blocks
// {
//     let message = "Hello";
//     alert(message);
// }
// {
//     let message = "Goodbye";
//     alert(message);
// }

// nested functions

// function makeCounter(){
//     let count = 0;
//     return function(){
//         return count++;
//     };
// }
// let counter = makeCounter();
// alert(counter());
// alert(counter());
// alert(counter());

// lexical environment
// function declarations

// task
// let phrase = "Hello";
// if (true) {
//     let user = "John";
//     function sayHi() {
//         alert(`${phrase}, ${user}`);
//     }
// }
// sayHi(); /* error */

// function sum (a) {
//     return function(b) {
//         return a + b;
//     };
// }
// alert(sum(1)(2));
// alert(sum(5)(-1));

// let x = 1;
// function func() {
//     let x = 2;
//     console.log(x);
// }
// func();

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inBtween (a, b) {
//     return function(x) {
//         return x >= a && x <= b;
//     };
// }
// alert(arr.filter(inBtween(3, 6)));
// function inArray (arr) {
//     return function(x) {
//         return arr.includes(x);
//     };
// }
// alert(arr.filter(inArray([1, 2, 10])));



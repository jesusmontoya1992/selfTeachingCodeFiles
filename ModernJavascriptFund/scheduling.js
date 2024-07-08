"use strict";
// function sayHi() {
//     alert("Hello");
// }
// setTimeout(sayHi, 2000);

// function sayHi(phrase, who){
//     alert(phrase + ", " + who);
// }
// setTimeout(sayHi, 1000, "Hello", "John");

// setTimeout("alert('Hello')", 1000);

// setTimeout(() => alert("hello"), 1000);

// cancelling with clearTimeout
// let timerID = setTimeout(() => alert("Never happens"), 1000);
// alert(timerID);
// clearTimeout(timerID);
// alert(timerID);

// setInterval
// let timerId = setInterval(() => alert("tick"), 2000);
// setTimeout(() => {clearInterval(timerId); alert("stop");}, 5000);

// nested setTimeout
// let timerId= setTimeout(function tick() {
//     alert("tick");
//     timerId = setTimeout(tick, 2000);
// }, 2000);
// setTimeout(() => {clearInterval(timerId); alert("stop");}, 5000);

// zero delay setTimeout
// setTimeout(() => alert("world"));
// alert("Hello");

// tasks
// setInterval
// function printNumbers (from, to) {
//     let current = from;
//     let timerId = setInterval(function() {
//         alert(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(5, 10);

// nested setTimeout
// function printNumbers (from, to) {
//     let current = from;
//     setTimeout (function go() {
//         alert(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(5, 10);

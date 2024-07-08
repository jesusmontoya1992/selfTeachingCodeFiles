"use strict";
// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}
// alert(f1.length);
// alert(f2.length);
// alert(many.length);

// function ask (question, ...handlers) {
//     let isYes = confirm(question);
//     for (let handler of handlers) {
//         if (handler.length == 0) {
//             if (isYes) handler();
//         } else {
//             handler(isYes);
//         }
//     }
// }
// ask ("question?", () => alert("You said yes"), result => alert(result));

// custom properties
// function sayHi() {
//     alert("Hi");
//     sayHi.counter++;
// }
// sayHi.counter = 0;
// sayHi();
// sayHi();
// alert(`Called ${sayHi.counter} times`);

// function makeCounter () {
//     function counter () {
//         return counter. count++;
//     };
//     counter.count = 0;
//     return counter;
// }
// let counter = makeCounter();
// alert(counter());
// alert(counter());

// Named function expressions

// tasks
// function makeCounter() {
//     let count = 0;
//     function counter() {
//         return count++;
//     }
//     counter.set = value => count = value;
//     counter.decrease = () => count--;
//     return counter;
// }



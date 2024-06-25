"use strict";

// symbol.iterator
// let range = {
//     from: 1,
//     to: 4,
// };
// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,
//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };
// for (let num of range) {
//     alert(num);
// }

// string is iterable
// for (let char of "test") {
//     alert(char);
// }

// calling an iterator explicitly
// let str = "Hello";
// let iterator = str[Symbol.iterator]();
// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     alert(result.value);
// }

// array.from
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2,
// };
// let arr = Array.from(arrayLike);
// alert(arr.pop());

// let str = "XPO";
// let chars = Array.from(str);
// alert(chars[0]);
// alert(chars[1]);
// alert(chars[2]);
// alert(chars.length);

// let str = "XPO";
// let chars = [];
// for (let char of str) {
//     chars.push(char);
// }
// alert(chars);

// function slice (str, start, end) {
//     return Array.from(str).slice(start, end).join("");
// }
// let str = "XPO";
// alert(slice(str, 1, 3));






"use strict";
// let obj = {};
// alert(obj.__proto__ === Object.prototype);
// alert(obj.toString === obj.__proto__.toString);
// alert(obj.toString === Object.prototype.toString);

// let arr = [1, 2, 3];
// alert(arr.__proto__ === Array.prototype);
// alert(arr.__proto__.__proto__ === Object.prototype);
// alert(arr.__proto__.__proto__.__proto__);

// let arr = [1, 2, 3];
// alert(arr);

// primitives
// String.prototype.show = function() {
//     alert(this);
// };
// "Boom!".show();

// tasks
// function f() {
//     alert("hello!");
// }

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// };

// f.defer(1000);

function f(a, b) {
    alert( a + b);
}
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};
f.defer(1000)(1, 2);


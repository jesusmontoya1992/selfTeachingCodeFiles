"use strict";
// transpararent caching
// function slow (x) {
//     alert(`Called with ${x}`);
//     return x;
// }
// function cachingDecorator (func) {
//     let cache = new Map();
//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func(x);
//         cache.set(x, result);
//         return result;
//     };
// }
// slow = cachingDecorator(slow);
// alert(slow(1));
// alert("Again: " + slow(1));
// alert(slow(2));
// alert("Again: " + slow(2));

// using fun.call for the context
// function sayHi() {
//     alert(this.name);
// }
// let user = {name: "John"};
// let admin = {name: "Admin"};
// sayHi.call(user);
// sayHi.call(admin);

// function say (phrase) {
//     alert(this.name + ": " + phrase);
// }
// let user = {name: "John"};
// say.call(user, "Hello");

// borrowing a method
// function hash() {
//     alert([].join.call(arguments));
// }
// hash(1, 2);

// tasks
// function work (a, b) {
//     alert (a + b);
// }
// function spy (func) {
//     function wrapper (...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }
//     wrapper.calls = [];
//     return wrapper;
// }
// work = spy(work);
// work(1, 2);
// work(4, 5);
// for (let args of work.calls) {
//     alert("call: " + args.join());
// }

// delaying decorator
function f (x) {
    alert (x);
}
function delay (f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("Test");
f1500("test");

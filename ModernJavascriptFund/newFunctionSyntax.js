"use strict";
// let sum = new Function("a", "b", "return a + b");
// alert(sum(1, 2));

// let sayHi = new Function('alert("Hello")');
// sayHi();

// CLOSURE
function getFunc() {
    let value = "test";
    let func = function() { alert(value);};
    return func;
}
getFunc()();
"use strict";
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList () {
//         this.students.forEach (
//             student => alert(this.title + ": " + student)
//         );
//     }
// };
// group.showList();

// arrow have no arguments
function defer (f, ms) {
    return function () {
        setTimeout( () => f.apply(this, arguments), ms);
    };
}
function sayHi (who) {
    alert("Hello, " + who);
}
let sayHiDeffered = defer(sayHi, 2000);
sayHiDeffered("John");


"use strict";
// conversion rules
// Symbol.toPrimitive
// let user = {
//     name: "John",
//     money: 1000,
//     [Symbol.toPrimitive](hint) {
//         alert( `hint: ${hint}` );
//         return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
// };
// alert(user);
// alert(+user);
// alert(user + 500);

// toString/valueOf
// let user = {name: "John"};
// alert(user);
// alert(user.valueOf() === user);

// example
// let user = {
//     name: "John",
//     money: 1000,
//     toString() {
//         return `{name: "${this.name}"}`;
//     },
//     valueOf(){
//         return this.money;
//     }
// };
// alert(user);
// alert(+user);
// alert(user + +user);
// alert(user + 500);

// toString to catch all
// let user = {
//     name: "John",
//     toString() {
//         return this.name;
//     }
// };
// alert(user);
// alert(user + 500);

// further conversions
// *
// let obj = {
//     toString() {
//         return "2";
//     }
// };
// alert(obj * 2);

// +
let obj = {
    toString() {
        return "2";
    }
};
alert(obj + 2); /* concactanates */




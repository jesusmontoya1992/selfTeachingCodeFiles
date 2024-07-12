"use strict";
// let user = {
//     name: "John",
// };
// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// alert(JSON.stringify(descriptor, null, 2));

// create a new falsey flag property
// let user = {};
// Object.defineProperty(user, "name", {
//     value: "John"
// });
// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// alert(JSON.stringify(descriptor, null, 2));

// non-writable flag
// let user = {
//     name: "John",
// };
// Object.defineProperty(user, "name", {
//     writable: false
// });
// user.name = "Pete";

// let user = {};
// Object.defineProperty(user, "name", {
//     value: "John",
//     enumarable: true,
//     configurable: true,
// });
// alert(user.name);
// user.name = "Pete";

// non-enumerable
// let user = {
//     name: "John",
//     toString() {
//         return this.name;
//     }
// }; 
// Object.defineProperty(user, "toString", {
//     enumerable: false
// });
// for (let key in user) alert(key);

// non-configurable
// let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// alert( JSON.stringify(descriptor, null, 2));

// let user = {
//     name: "John"
// };
// Object.defineProperty(user, "name", {
//     configurable: false
// });
// user.name = "Pete";
// // delete user.name;

// let user = {
//     name: "John"
// };
// Object.defineProperty(user, "name", {
//     writable: false,
//     configurable: false,
// });

// user.name = "pete";
// delete user.name;
// Object.defineProperty(user, "name", {value: "pete"});

// object.defineProperties


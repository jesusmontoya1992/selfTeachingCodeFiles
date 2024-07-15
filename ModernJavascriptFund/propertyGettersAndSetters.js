"use strict";
// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullName () {
//         return `${this.name} ${this.surname}`;
//     }
// };
// alert(user.fullName);

// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullName () {
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName (value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };
// user.fullName = "Alice Cooper";
// alert(user.name);
// alert(user.surname);

// accesor descriptors
// let user = {
//     name: "John",
//     surname: "Smith",
// };
// Object.defineProperty (user, "fullName", {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },
//     set(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// });
// alert(user.fullName);
// for(let key in user) alert(key);

// samarter getters/setters
// let user = {
//     get name() {
//         return this._name;
//     },
//     set name(value) {
//         if (value.length < 4) {
//             alert("Name is too short, need at least 4 charcaters");
//             return;
//         }
//         this._name = value;
//     }
// };
// user.name = "Pete";
// alert(user.name);
// user.name = "l";

// using for compatibility
function User (name, birthday) {
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty (this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}
let john = new User("John", new Date(1992, 6, 1));
alert(john.birthday);
alert(john.age);


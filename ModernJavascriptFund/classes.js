"use strict";
// class User {

//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         alert(this.name);
//     }
// }
// let user = new User("John");
// user.sayHi();
// alert(typeof User);
// alert(User === User.prototype.constructor);
// alert(User.prototype.sayHi);
// alert(Object.getOwnPropertyNames(User.prototype));

// syntactic sugar
// function User(name) {
//     this.name = name;
// }
// User.prototype.sayHi = function() {
//     alert(this.name);
// };
// let user = new User("John");
// user.sayHi();

// let User = class MyClass {
//     sayHi() {
//         alert(MyClass);
//     }
// };
// new User().sayHi();
// alert(MyClass);

// function makeClass(phrase) {
//     return class {
//         sayHi() {
//             alert(phrase);
//         }
//     };
// }
// let User = makeClass("hello");
// new User().sayHi();

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length < 4) {
//             alert("Name is too short");
//             return;
//         }
//         this._name = value;
//     }
// }
// let user = new User("John");
// alert(user.name);
// user = new User("");

// computed names
// class User {
//     ["say" + "Hi"]() {
//         alert("Hello");
//     }
// }
// new User().sayHi();

// class User {
//     name = "John";
//     sayHi() {
//         alert(`Hello, ${this.name}!`);
//     }
// }
// new User().sayHi();

// class User {
//     name = "John";
// }
// let user = new User();
// alert(user.name);
// alert(User.prototype.name);

// class User {
//     name = prompt("name, please?", "John");
// }
// let user = new User();
// alert(user.name);

// class Button {
//     constructor(value) {
//         this.value = value;
//     }
//     click() {
//         alert(this.value);
//     }
// }
// let button = new Button("hello");
// setTimeout(button.click, 1000);

class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        alert(this.value);
    }
}
let button = new Button("hello");
setTimeout(button.click, 1000);
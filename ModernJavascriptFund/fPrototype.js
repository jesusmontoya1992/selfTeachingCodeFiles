"use strict";
// let animal = {
//     eats: true,
// };
// function Rabbit (name) {
//     this.name = name;
// }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit");
// alert(rabbit.eats);

// .constructor
// function Rabbit(name) {
//     this.name = name;
//     alert(name);
// }
// let rabbit = new Rabbit("White rabbit");
// let rabbit2 = new rabbit.constructor("Black rabbit");

// tasks
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true,
// };
// let rabbit = new Rabbit();
// alert(rabbit.eats);

// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true,
// };
// let rabbit = new Rabbit();
// Rabbit.prototype = {};
// alert(rabbit.eats);

// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true,
// };
// let rabbit = new Rabbit();
// delete rabbit.eats;
// alert(rabbit.eats);

// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true,
// };
// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;
// alert(rabbit.eats);

// function User(name) {
//     this.name = name;
// }
// let user = new User("John");
// let user2 = new user.constructor("pete");
// alert(user.name);
// alert(user2.name);

function User(name) {
    this.name = name;
}
User.prototype = {};
let user = new User("john");
let user2 = new user.constructor("pete");
alert(user.name);
alert(user2.name);
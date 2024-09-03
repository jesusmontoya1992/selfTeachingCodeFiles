"use strict";
// class Rabbit {}
// let rabbit = new Rabbit();
// alert(rabbit instanceof Rabbit);

// function Rabbit() {}
// alert(new Rabbit() instanceof Rabbit);

// let arr = [1, 2, 3];
// alert(arr instanceof Array);
// alert(arr instanceof Object);

// class Animal {
//     static [Symbol.hasInstance](obj) {
//         if (obj.canEat) return true;
//     }
// }
// let newObj = {canEat: true};
// alert(newObj instanceof Animal);

// class Animal {}
// class Rabbit extends Animal {}
// let rabbit = new Rabbit();
// alert(rabbit instanceof Animal);

// let objectToString = Object.prototype.toString;
// let arr = [];
// alert(objectToString.call(arr));

let s = Object.prototype.toString;
alert(s.call(123));
alert(s.call(null));
alert(s.call(alert));
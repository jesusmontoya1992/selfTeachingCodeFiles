"use strict";
// class User {
//     static staticMethod() {
//         alert(this === User);
//     }
// }
// User.staticMethod();

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }
//     static createTodays() {
//         return new this("Today's digest", new Date());
//     }
// }
// let article = Article.createTodays();
// alert(article.title);
// alert(article.date);

// class Article {
//     static publisher = "Ilya Kantor";
// }
// alert(Article.publisher);

// class Animal {
//     static planet = "Earth";
//     constructor(name, speed) {
//         this.speed = speed;
//         this.name = name;
//     }
//     run(speed = 0) {
//         speed = this.speed + speed;
//         alert(`${this.name} runs with speed ${this.speed}.`);
//     }
//     static compare(animalA, animalB) {
//         return alert(animalA.speed - animalB.speed);
//     }
// }
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} hides!`);
//     }
// }
// let rabbits = [
//     new Rabbit("White Rabbit", 10),
//     new Rabbit("Black Rabbit", 5),
// ];
// rabbits.sort(Rabbit.compare);
// rabbits[0].run();
// alert(Rabbit.planet);


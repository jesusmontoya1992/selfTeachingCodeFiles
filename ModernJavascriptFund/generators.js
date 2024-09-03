"use strict";
// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }
// let generator = generateSequence();
// // alert(generator);
// let one = generator.next();
// alert(JSON.stringify(one));
// let two = generator.next();
// alert(JSON.stringify(two));
// let three = generator.next();
// alert(JSON.stringify(three));

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let generator = generateSequence();
// for (let value of generator) {
//     alert(value);
// }

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }
// let generator = generateSequence();
// for (let value of generator) {
//     alert(value);
// }

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let sequence = [0, ...generateSequence()];
// alert(sequence);

// using generators for iterables
// let range = {
//     from: 1,
//     to: 5,
//     *[Symbol.iterator]() {
//         for(let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     }
// };
// alert([...range]);

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }
// function* generatePasswordCodes() {
//     yield* generateSequence(48, 57);
//     yield* generateSequence(65, 90);
//     yield* generateSequence(97, 122);
// }
// let str = "";
// for (let code of generatePasswordCodes()) {
//     str = str + String.fromCharCode(code);
// }
// alert(str);

// function* gen() {
//     let result = yield "2 + 2 = ?";
//     alert(result);
// }
// let generator = gen();
// let question = generator.next().value;
// generator.next(4);

// function* gen() {
//     let ask1 = yield "2 + 2 = ?";
//     alert(ask1);
//     let ask2 = yield "3 * 3 = ?";
//     alert(ask2);
// }
// let generator = gen();
// alert(generator.next().value);
// alert(generator.next(4).value);
// alert(generator.next(9).done);

// function* gen() {
//     try {
//         let result = yield "2 + 2 = ?";
//         alert("The execution does not reach here.");
//     } catch(e) {
//         alert(e);
//     }
// }
// let generator = gen();
// let question = generator.next().value;
// generator.throw(new Error("The answer is not found"));

// generator return
// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const g = gen();
// g.next();
// g.return("foo");
// g.next();

function* pseudoRandom(seed) {
    let value = seed;
    while(true) {
        value = value * 16807 % 2147483647;
        yield value;
    }
};
let generator = pseudoRandom(1);
alert(generator.next().value);
alert(generator.next().value);
alert(generator.next().value);

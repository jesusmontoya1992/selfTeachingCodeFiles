"use strict";
// rest parameters
// function sum (a, b) {
//     return a + b;
// }
// alert(sum(1, 2, 3, 4, 5));

// function sumAll (...args) {
//     let sum = 0;
//     for (let arg of args) sum = sum + arg;
//     return sum;
// }
// alert(sumAll(1));
// alert(sumAll(1, 2));
// alert(sumAll(1, 2, 3));

// send the rest to an array
// function showName (firstName, lastName, ...titles) {
//     alert( firstName + " " + lastName );
//     alert(titles[0]);
//     alert(titles[1]);
//     alert(titles.length);
// }
// showName("Bob", "Smith", "software", "developer");

// arguments variable
// function showName () {
//     alert(arguments.length);
//     alert(arguments[0]);
//     alert(arguments[1]);
// }
// showName("John", "Smith");
// showName("Bob");

// spread syntax

// alert(Math.max(3, 5, 1));

// let arr =[3, 5, 1];
// alert(Math.max(arr)); /* does not work */

// let arr = [3, 5, 1];
// alert(Math.max(...arr));

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// alert(Math.max(...arr1, ...arr2));

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// alert(Math.max(1, ...arr1, 2, ...arr2, 25));

// it can also be used to merge arrays
// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];
// let merged = [0, ...arr, 2, ...arr2];
// alert(merged);

// let str = "Hello";
// alert([...str]);

// copy and array/object

// let arr = [1, 2, 3];
// let arrCopy =[...arr];
// alert(JSON.stringify(arr) === JSON.stringify(arrCopy));
// alert(arr === arrCopy);
// arr.push(4);
// alert(arr);
// alert(arrCopy);

// it also works to copy an object
let obj = {a: 1, b: 2, c: 3};
let objCopy = {...obj};
alert(JSON.stringify(obj) === JSON.stringify(objCopy));
alert(obj === objCopy);
obj.d = 4;
alert(JSON.stringify(obj));;
alert(JSON.stringify(objCopy));



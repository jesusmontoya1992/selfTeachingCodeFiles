"use strict";
// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }
// }
// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty());
// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr);
// alert(filteredArr.isEmpty());

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
    static get [Symbol.species]() {
        return Array;
    }
}
let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty());
let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr.isEmpty());
alert(filteredArr);
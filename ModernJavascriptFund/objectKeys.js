"use strict";
// Object.values
// let user = {
//     name: "John",
//     age: 30,
// };
// for (let value of Object.values(user)) {
//     alert(value);
// }

// transforming objects
// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };
// let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );
// alert(doublePrices.meat);
// alert(doublePrices.orange);

// exercises
// let salaries = {
//     "John": 100,
//     "pete": 300,
//     "mary": 250,
// };
// function sumSalaries(salaries){
//     let sum = 0;
//     for (let salary of Object.values(salaries)){
//         sum = sum + salary;
//     }
//     return sum;
// }
// alert(sumSalaries(salaries));

// Return property count
let user = {
    name: "John",
    age: 30,
};
function count(obj) {
    return Object.keys(obj).length;
}
alert(count(user));

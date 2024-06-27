"use strict";
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result = result * x;
//     }
//     return result;
// }
// alert(pow(2, 3));

// same function above but written recursevly calling self
// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n -1);
//     }
// }
// alert(pow(2, 4));

// Recursive travesals
// let company ={
//     sales: [
//         {name: "John", salary: 1000},
//         {name: "Alice", salary: 1600},
//     ],
//     development: {
//         sites: [
//             {name: "Peter", salary: 2000},
//             {name: "Alex", salary: 1800},
//         ],
//         internals: [
//             {name: "Jack", salary: 1300},
//         ]
//     },
// };
// function sumSalaries (department) {
//     if (Array.isArray(department)){
//         return department.reduce((prev, current) => prev + current.salary, 0);    
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum = sum + sumSalaries(subdep);
//         }
//         return sum;
//     }
// }
// alert(sumSalaries(company));

// recursive structures
// linked list

// tasks
// creat a toSum function using 3 different solution, loop, recursion, arithmetich progression

// loop
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// alert(sumTo(100));

// recursion
// function sumTo(n){
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
// }
// alert(sumTo(100));

// print list value

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            }
        }
    }
};
// using loop solution
// function printList(list) {
//     let tmp = list;
//     while (tmp) {
//         alert(tmp.value);
//         tmp = tmp.next;
//     }
// }
// printList(list);

// using recursive solution
// function printList (list) {
//     alert(list.value);
//     if (list.next) {
//         printList(list.next);
//     }
// }
// printList(list);

// output list value in reverse order
// using loop solution

// function printReverseList (list) {
//     let arr = [];
//     let tmp = list;

//     while (tmp) {
//         arr.push(tmp.value);
//         tmp = tmp.next;
//     }

//     for (let i = arr.length - 1; i >= 0; i --) {
//         alert(arr[i]);
//     }
// }
// printReverseList(list);

// using recursive solution
function printReverseList (list) {
    if (list.next) {
        printReverseList(list.next);
    }
    alert(list.value);
}
printReverseList(list);





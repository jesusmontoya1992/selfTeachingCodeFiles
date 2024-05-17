"use strict"
// while Loop (while it's true)
// while(condition) {code}
// let i =0;
// while(i<3) {
//     alert(i);
//     i++;
// }

// let i = 3;
// while (i) {
//     alert(i);
//     i--;
// }

// let i = 3;
// while (i) alert(i--);

// do while loop
// do {loop body executes first} while (condition is true continues to loop)

// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// for loop
// for (begin; condition; step) {loop body}

// for(let i = 0; i < 3; i++) {
//     alert(i);
// } /*i = inline variable, i does not exist outside the loop */

// declaring i outside the loop
// let i = 0;
// for (i = 0; i < 3; i++) {
//     alert(i);
// }
// alert(i);

// skipping parts of for loop
// remove begin
// let i = 0;
// for (; i < 3; i++) {
//     alert(i);
// }

// remove step
// let i = 0;
// for (; i < 3;) {
//     alert(i++);
// }

// infinite loop
// for (;;) {  
// }

// breaking the loop
// let sum = 0;
// while (true) {
//     let value = +prompt("enter a number", '');
//     if (!value) break;
//     sum += value;
// }
// alert("Sum: " + sum);

// continue to the next iteration
// outputs odd values
// for (let i = 0; i < 10; i++){
//     if(i % 2 == 0) continue;
//     alert(i);
// }

// labels for break/continue
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, '');
        if (!input) break outer;
    }
}
alert("Done!");






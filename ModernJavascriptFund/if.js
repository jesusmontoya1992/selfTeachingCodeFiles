"use strict"
// let year = prompt('In which year was ECMAScript-2015 published?', '');
// // if (year == 2015) alert('You are right!');
// if (year == 2015) {
//     alert("That's correct");
//     alert('You are so smart');
// }

// else clause
// let year = prompt('In which year was ECMAScript-2015 published?', '');
// if (year == 2015) {
//     alert("You guessed it right!");
// } else {
//     alert('How can you be so wrong?');
// }

// several else if
// let year = prompt('In which year was ECMAScript-2015 published?', '');
// if (year < 2015) {
//     alert('Too early...');
// } else if (year > 2015) {
//     alert("Too late");
// } else {
//     alert('Exactly!');
// }

// conditional operator ?
// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }
// alert(accessAllowed);

// ternary ? operator syntax
// let result = condition ? value1 : value2;

// let accessAllowed = age > 18 ? true : false;
// alert(accessAllowed);

// multiple ?
// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello!' :
//     (age < 100) ? 'Greetings!' :
//     'What an unusual age!';
// alert(message);

let question = prompt("What is the official name of javascript?", '');
if (question == "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know?" + ' "ECMAScript"!');
}


"use strict"
// function showMessage() {
//     alert("Hello everyone!");
// }

// showMessage();
// showMessage();

// local variable error
// function showMessage(){
//     let message = "Hello, I'm JavaScript!";
//     alert(message);
// }
// showMessage();
// alert(message); /* does not execute */

// Outer variables
// let userName = "John";
// function showMessage() {
//     let message = "Hello, " + userName;
//     alert(message);
// }
// showMessage();

// Modifying outer variables
// let userName = "John";
// function showMessage() {
//     userName = "Bob";
//     let message = "Hello, " + userName;
//     alert(message);
// }
// alert(userName);
// showMessage();
// alert(userName);

// Creating a local variables inside the function ignores the outer var
// let userName = "John";
// function showMessage() {
//     let userName = "Bob"; /*let creates a new var inside function, outer is ignored */
//     let message = "Hello, " + userName;
//     alert(message);
// }
// showMessage();
// alert(userName);

// Parameters
// function showMessage(from, text) {
//     alert(from + ": " + text);
// }
// showMessage("Ann", "Hello!");
// showMessage("Ann", "What's up?");

// function showMessage (from, text) {
//     from = "*" + from + "*";
//     alert(from + ": " + text) ;
// }
// let from = "Ann";
// showMessage(from, "Hello");
// alert(from); /* outer variable remains unchanged */

// Default values
// function showMessage (from, text = "no text given") {
//     alert( from + ": " + text);
// }
// showMessage("Ann");
// showMessage("Ann", "hello");
// showMessage("Ann", undefined);

// alternative default parameters
// function showMessage(text) {
//     if (text === undefined) {
//         text = "empty message";
//     }
//     alert(text);
// }
// showMessage();

// can also be accomplished using the || operator
// function showMessage(text) {
//     text = text || "empty";
//     alert(text);
// }
// showMessage();

// function showCount(count) {
//     alert(count ?? "unknown")
//     // if count is undefined or null, show "unknown"
// }
// showCount(0);
// showCount(null);
// showCount();

// Returning a value
// function sum(a, b) {
//     return a + b;
// }
// let result = sum(1, 2);
// alert(result);

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }
}
let age = prompt("How old are you?", 18);
if (checkAge(age)) {
    alert("Access granted");
} else {
    alert("Access denied");
};

let movieAge = prompt("How old are you to watch the movie?", 17);
function showMovie(movieAge) {
    if (!checkAge(movieAge)) {
     return alert("Showing you the movie");
    } else {
     return;
    }
};



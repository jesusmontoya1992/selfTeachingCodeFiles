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

function showMessage (from, text) {
    from = "*" + from + "*";
    alert(from + ": " + text) ;
}
let from = "Ann";
showMessage(from, "Hello");
alert(from); /* outer variable remains unchanged */

// Default values



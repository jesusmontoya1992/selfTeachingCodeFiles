"use strict"
// function expression allows to create a function in the middle of an expression
// let sayHi = function(){
//     alert("Hello");
// };
// alert(sayHi);

// copy a function to another variable
// function sayHi(){
//     alert("Hello");
// }
// let func = sayHi;
// func();
// sayHi();

// running the same code above in a function expression
// let sayHi = function(){
//     alert("Hello");
// }; /*use semicolon at the end of function expressions */
// let func = sayHi;
// func();
// sayHi();

// callback functions
// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }
// function showOk(){
//     alert("You agreed.");
// }
// function showCancel(){
//     alert("You canceled the execution");
// }
// ask("Do you agree?", showOk, showCancel);

// writing same function above shorter using a function expression
function ask(question, yes, no) {
    if(confirm(question)) yes()
        else no();
}
ask(
    "Do you agree?",
    function() {alert("You agreed.");},
    function() {alert("You canceled the execution");}
);
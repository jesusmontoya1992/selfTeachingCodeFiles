"use strict"
// || = or
// result = a || b;

// if (1 || 0) {
//     alert("truthy!");
// }

// let hour = 9;
// if (hour < 10 || hour > 18) {
//     alert('The office is closed.');
// }
// pass more conditions
// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//     alert('The office is closed.');
// }

// OR || finds the first thruthy value
// alert (1 || 0);
// alert(null || 1);
// alert(null || 0 || 1);
// alert(undefined || null || 0);

// let firstName = '';
// let lastName = "";
// let nickName = "SuperCoder";
// alert(firstName || lastName || nickName || "Anonymous");

// true || alert("Not printed");
// false || alert("printed");

// && operator
// alert(true && true);
// alert(false && true);
// alert(true && false);
// alert(false && false);

// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//     alert('The time is 12:30');
// }

// && if first operand is thruthy, && = second operand. falsy = returns falsy value, ignores the rest
// alert(1 && 0);
// alert(1 && 5);
// alert(null && 5);
// alert(0 && 'no matter what');
// alert(1 && 2 && null && 3);
// alert(1 && 2 && 3);

// !Not
// returns the reverse value
// alert(!true);
// alert(!0);

// !!= converts to a boolean type
// alert(!!"non-empty string");
// alert(!!null);

let userName = prompt("who is there?", '');

if (userName === "Admin") {
    let pass = prompt("Password?", "");
    if (pass === "TheMaster") {
        alert("Welcome!");
    } else if (pass === "" || pass === null) {
        alert("canceled");
    } else {
        alert("Wrong password");
    }
} else if (userName === "" || userName === null) {
    alert("canceled");
} else {
    alert("I don't know you");
}





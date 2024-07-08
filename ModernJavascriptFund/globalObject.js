"use strict";
// alert("Hello");
// window.alert("Hello");

// var globalVar = 5;
// alert(window.globalVar);

// let globalLet = 5;
// alert(window.globalLet); /* wont work */

window.currentUser = {
    name: "John",
};
alert(currentUser.name);
alert(window.currentUser.name);
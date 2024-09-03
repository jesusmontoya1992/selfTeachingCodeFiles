"use strict";
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
// function test() {
//     throw new ValidationError("Whoops!");
// }
// try {
//     test();
// } catch(err) {
//     alert(err.message);
//     alert(err.name);
//     alert(err.stack);
// }

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
// function readUser(json) {
//     let user = JSON.parse(json);
//     if (!user.age) {
//         throw new ValidationError("No field: age");
//     }
//     if (!user.name) {
//         throw new ValidationError("No field: name");
//     }
//     return user;
// }
// try {
//     let user = readUser('{"age": 25}');
// } catch (err) {
//     if (err instanceof ValidationError) {
//         alert("Invalid data: " + err.message);
//     } else if (err instanceof SyntaxError) {
//         alert("JSON Syntax Error: " + err.message);
//     } else {
//         throw err;
//     }
// }

// further inheritance
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "Validation Error";
//     }
// }
// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//         super("No property: " + property);
//         this.name = "Property Required Error";
//         this.property = property;
//     }
// }
// function readUser(json) {
//     let user = JSON.parse(json);
//     if (!user.age) {
//         throw new PropertyRequiredError("Age");
//     }
//     if (!user.name) {
//         throw new PropertyRequiredError("name");
//     }
//     return user;
// }
// try {
//     let user = readUser('{ "age": 25}');
// } catch (err) {
//     if (err instanceof ValidationError) {
//         alert("Invalid data: " + err.message );
//         alert(err.message);
//         alert(err.property);
//     } else if (err instanceof SyntaxError) {
//         alert("JSON Syntax Error: " + err.message);
//     } else {
//         throw err;
//     }
// }
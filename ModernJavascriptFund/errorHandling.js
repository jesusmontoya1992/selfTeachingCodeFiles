"use strict";
// try {
//     alert("Start of try runs");
//     alert("End of try runs");
// } catch (err) {
//     alert("catch is ignored");
// }

// try {
//     alert("start of try runs");
//     lalala;
//     alert("End of try (never reached)");
// } catch (err) {
//     alert("Error has occured!");
// }

// setTimeout(function() {
//     try {
//         noSuchVariable;
//     } catch {
//         alert("Error is caught here!");
//     }
// }, 1000);

// Error Object
// try {
//     lalala;
// } catch (err) {
//     alert(err.name);
//     alert(err.message);
//     alert(err.stack);
//     alert(err);
// }

// let json = '{"name": "John", "age": 30}';
// let user = JSON.parse(json);
// alert(user.name);
// alert(user.age);

// let json = "{ bad json }";
// try {
//     let user = JSON.parse(json);
//     alert(user.name);
// } catch (error) {
//     alert("Our apologies, the data has errors.");
//     alert(error.name);
//     alert(error.message);
// }

// let json = '{"age": 30}';
// try {
//     let user = JSON.parse(json);
//     alert(user.name);
// } catch (err) {
//     alert("doesnt execute");
// }

// let error = new Error("Things happen o_O");
// alert(error.name);
// alert(error.message);

// try {
//     JSON.parse("{bad json}");
// } catch (err) {
//     alert(err.name);
//     alert(err.message);
// }

// let json = '{"age": 30}';
// try {
//     let user = JSON.parse(json);
//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name");
//     }
//     alert(user.name);
// } catch (err) {
//     alert("JSON Error: " + err.message);
// }

// try {
//     user = {};
// } catch (err) {
//     if (err instanceof ReferenceError) {
//         alert("ReferenceError");
//     }
// }

// function readData() {
//     let json = '{"age": 30}';
//     try {
//         blabla();
//     } catch (err) {
//         if (!(err instanceof SyntaxError)) {
//             throw err;
//         }
//     }
// }
// try {
//     readData();
// } catch (err) {
//     alert("External catch got: " + err);
// }

// try catch finally
try {
    alert("try");
    if (confirm("Make an error?")) BAD_CODE();
} catch (err) {
    alert("catch");
} finally {
    alert("finally");
}
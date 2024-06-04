"use strict";
// two ways to create an empty object
// let user = new Object();
// let user = {};

// adding properties to objects using key:value pairs
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": false, /*multiword property name must be quoted */
// };

// accesing property values using dot notation
// alert(user.name);
// alert(user.age);
// alert(user.isAdmnin);

// adding a property to existing object
// user.isAdmnin = true;
// alert(user.isAdmnin);


// removing a property
// delete user.age;

// creating and accessing multi word properties using []
// user["multi word property"] = true;
// alert(user["multi word property"]);
// alert(user["likes birds"]);

// delete user["multi word property"];
// delete user["likes birds"];

// accesing properties using []
// let key = prompt("What do you want to know about the user?", "name");
// alert(user [key] );

// computed properties
// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5,
// };
// alert( bag.apple );

// property value shorthand
// function makeUser (name, age){
//     return {
//         name,
//         age: age,
//     };
// }
// let user = makeUser("Bob", 50);
// alert(user.name);

// Property existence  "in" operator
// let user = { name: "John", age: 30,};
// alert("age" in user);
// alert("This property name does not exist" in user);

// utilizing "in" to test properties of value of undefined
// let obj = {
//     test: undefined
// };
// alert( obj.test); /* fails to find property */
// alert( "test" in obj);

// "for in" loop
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
// };
// for (let key in user) {
//     alert( key );
//     alert( user[key] );
// }

// integer property names order
// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA",
// };
// for (let key in codes) {
//     alert(key); /* numbers are arrange in asending order */
// }
// fixed function above
// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "USA",
// };
// for (let key in codes) {
//     alert(+key); /* numbers are now arrange in creation order */
// }

// comparison by reference
// equal example
// let a = {};
// let b = a;
// alert( a == b);
// alert( a === b);

// unequal example
// let a = {};
// let b = {};
// alert( a == b );

// const objects can be modified
// const user = {
//     name: "John",
// };
// user.name = "Pete";
// alert(user.name);

// Cloning and merging, object.assign
// let user = {
//     name: "John",
//     age: 30,
// };
// let clone = {};
// for (let key in user) {
//     clone[key] = user[key];
// }
// clone.name = "Pete";
// alert( user.name );
// alert( clone.name);

// using object.assign
// let user = {name: "John",};
// let permission1 = { canView: true};
// let permission2 = { canEdit: true};
// Object.assign(user, permission1, permission2);
// alert(user.name);
// alert(user.canView);
// alert(user.canEdit);

// overwriting existing property
// let user = { name: "John" };
// Object.assign(user, { name: "Pete" });
// alert(user.name);

// clone with object.assign
// let user = {
//     name: "John",
//     age: 30
// };
// let clone = Object.assign( {}, user );
// alert(clone.name);
// alert(clone.age);

// nested clonning
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    }
};
let clone = structuredClone(user);
alert( user.sizes === clone.sizes );
user.sizes.width = 60;
alert( clone.sizes.width );




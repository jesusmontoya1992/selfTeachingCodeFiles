"use strict";
// creating a symbol
// let id = Symbol("id");

// different symbols can have the same description
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// alert( id1 == id2 );

// alert does not convert symbol to string automatically
// let id = Symbol("id");
// // alert(id); /* error */
// alert( id.toString() );
// alert( id.description );

// hidden properties
// let user = {
//     name: "John"
// };
// let id = Symbol("id");
// user[id] = 1;
// alert( user[id] );

// symbols inside objects must be in []
// let id = Symbol("id");
// let user = {
//     name: "john",
//     [id]: 123,
// }

// symbols are skipped in "for in" loops
// let id = Symbol("id");
// let user = {
//     name: "John",
//     age: 30,
//     [id]: 123,
// };
// for (let key in user) alert(key);
// alert( "direct: " + user[id] );

// object.assign also clones symbols
// let id = Symbol("id");
// let user = {
//     [id]: 123,
// };
// let clone = Object.assign( {}, user );
// alert( clone[id] );

// global symbols
// let id = Symbol.for("id"); /* reads and return symbol if it already exist, else creates */
// let idAgain = Symbol.for("id"); /* reuse the id global symbol from the registry  */
// alert( id === idAgain );

// Symbol.keyfor = gets name of symbol
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
// alert( Symbol.keyFor(sym) );
// alert( Symbol.keyFor(sym2) );

// Symbol.keyfor only returns global symbol names
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");
alert( Symbol.keyFor(globalSymbol) );
alert( Symbol.keyFor(localSymbol) );
alert( localSymbol.description );
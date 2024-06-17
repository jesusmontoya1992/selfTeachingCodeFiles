"use strict";
// ${}
// function sum(a, b) {
//     return a + b;
// }
// alert(`1 + 2 = ${sum(1, 2)}.`);

// multiple string lines using ``
// let guestList = `Guests:
// * John
// * Pete
// * Mary
// `;
// alert(guestList);

// special characters

// \n = new line
// let guestList = "Guests:\n* John\n* Pete\n* Mary";
// alert(guestList);

// to write a \ in a string it must be \\
// alert( "The backslash: \\" );

// inserting aposthrophe
// alert( 'I\'m the Walrus!' );

// string legnth
// alert( `My\n`.length );

// accessing characters
// let str = "Hello";
// alert( str[0] );
// alert( str.at(0) );

// alert( str[str.length -1] );
// alert( str.at(-1) );

// iterate
// for ( let char of "hello" ) {
//     alert(char);
// }

// changing the case
// alert( "Interface".toUpperCase() );
// alert( "INTERFACE".toLowerCase() );
// alert( "INTERFACE"[4].toLowerCase() );

// searching for a substring
// str.indexOf
// returns -1 if not found
// let str = "widget with id";
// alert( str.indexOf("widget") );
// alert( str.indexOf("get") );
// alert( str.indexOf("Widget") );
// alert( str.indexOf("id") );
// alert( str.indexOf("id", 2) );

// search for all occurances using a loop
// let str = "As sly as a fox, as strong as an ox";
// let target = "as";
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
//     alert( `Found at ${foundPos}` );
//     pos = foundPos + 1;
// }

// includes
// alert( "Widget with id".includes("Widget") );
// alert( "Hello".includes("Bye") );
// alert( "widget".includes("id") );
// alert( "widget".includes("id", 3) );

// startsWith & endsWith
// alert( "widget".startsWith("wid") );
// alert( "widget".endsWith("get") );

// Getting a substring

// slice
// let str = "stringify and";
// alert( str.slice(0, 5) );
// alert( str.slice(0, 1) );
// alert( str.slice(2) );

// let str = "stringify";
// alert( str.slice(-4, -1) ); /*starts at 4th pos from the right, ends at 1st post from right */

// let str = "stringify";
// alert( str.substring(2, 6) );
// alert( str.substring(6, 2) );

// alert( str.substr(2, 4) );
// alert( str.substr(-4, 2) );

// comparing strings
// lower case always greater than upper
// alert( "a" > "Z" );

// correct comparisons
// returns negative if str < str2, returns +# str > str2, returns 0 if equal
// alert( "hello".localeCompare("hello") );
// alert( "HELLO".localeCompare("hello") );
// alert( "hello".localeCompare("HELLO") );

// exercises
// convert first lettter to upper case
// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1) ;
// }
// alert( ucFirst("john") );

// check spam for xxx or viagra
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes("viagra") || lowerStr.includes("xxx");
// }
// alert( checkSpam("buy ViaGra now") );
// alert( checkSpam("free XXXXXXXX") );
// alert( checkSpam("innocent rabbit") );

// extract the value from $120 = 120
function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert( extractCurrencyValue("$120") );
alert( extractCurrencyValue("$10") );













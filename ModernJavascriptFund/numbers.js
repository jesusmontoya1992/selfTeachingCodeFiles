"use strict";
// different ways to write numbers
// let billion = 1000000000;
// let billion = 1_000_000_000;
// let billion = 1e9;
// alert( 7.3e9 );
// alert(1e3 === 1 * 1000);
// let microsecond = 0.000001;
// let microsecond = 1e-6;

// toString(base)
// base=16 hex, base=2 bitwise, base=36 latin
// let num = 255;
// alert( num.toString(16) );
// alert( num.toString(2) );
// alert( 123456..toString(36) );

// Rounding
// round down
// alert(Math.floor (3.1));
// alert(Math.floor (-1.1));

// round up
// alert(Math.ceil(3.1));
// alert(Math.ceil(-1.1));

// Math.round = rounds to nearest integer
// alert(Math.round(3.1));
// alert(Math.round(3.6));
// alert(Math.round(3.5));

// Math.trunc = removes anything after the decimal
// alert(Math.trunc(3.1));
// alert(Math.trunc(-1.1));

// toFixed = rounds to fix and returns a string
// let num = 12.34;
// alert( num.toFixed(1) );
// let num = 12.36;
// alert( num.toFixed(1) );
// let num = 12.34;
// alert( num.toFixed(5) );

// imprecise calculations
// alert( 1e500 );

// alert( 0.1 + 0.2 );
// alert( 0.1 + 0.2 == 0.3 );

// let sum = 0.1 + 0.2;
// alert( sum.toFixed(2) ); /* returns string */

// let sum = 0.1 + 0.2;
// alert( +sum.toFixed(2) ); /* returns number */

// isFinite and isNaN
// alert( isNaN(NaN) );
// alert( isNaN("str") );
// alert( NaN === NaN );

// alert( isFinite("15") );
// alert( isFinite("str") );
// alert( isFinite(Infinity) );

// let num = +prompt("Enter a number", "");
// alert( isFinite(num) );

// more strict
// alert( Number.isNaN(NaN) );
// alert( Number.isNaN("str" / 2) );
// alert( Number.isNaN("str") );
// alert( isNaN("str") );

// parseInt and parseFloat
// alert( +"100px" );
// alert( parseInt("100px") );
// alert( parseFloat("12.5em") )
// alert( parseInt("12.3") );
// alert( parseFloat("12.3.4") );
// alert( parseInt("a123") );

// Other math actions
// math.random() = returns a random number from 0 - 1
// alert( Math.random() );
// alert( Math.random() );

// alert( Math.max(3, 5, -10, 0, 1) );
// alert( Math.min(1,2) );

// alert( Math.pow(2, 10) );

// excercises
// let a = +prompt("The first number?", "" );
// let b = +prompt("The second number?", "");
// alert( a + b );.

// function random(min, max) {
//     return min + Math.random() * (max - min);
// }
// alert( random(1, 5) );













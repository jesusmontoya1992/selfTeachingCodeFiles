"use strict";
// splice

// let arr = ["I", "go", "home",];
// delete arr[1];
// alert(arr);
// alert( arr.length );

// let arr = ["I", "study", "Javascript"];
// arr.splice(1, 1);
// alert( arr );
// alert( arr.length );

// let arr = ["I", "study", "Javascript", "right", "now"];
// arr.splice( 0, 3, "lets", "dance" );
// alert( arr );

// let arr = ["I", "study", "Javascript", "right", "now"];
// let removed = arr.splice(0, 2);
// alert( removed );

// let arr = ["I", "study", "Javascript"];
// arr.splice(2, 0, "complex", "language");
// alert( arr );

// let arr = [1, 2, 5];
// arr.splice(-1, 0, 3, 4);
// alert(arr);

// slice

// let arr =["t", "e", "s", "t"];
// alert( arr.slice(1,3) );
// alert( arr.slice(-2) );

// concat

// let arr = [1, 2];
// alert( arr.concat([3, 4]) );
// alert( arr.concat([3, 4], [5, 6]) );
// alert( arr.concat([3, 4], 5, 6) );.

// foreach

// ["Bilbo", "Gandalf", "Nazgulf"].forEach(alert);

// ["Bilbo", "Gandalf", "Nazgulf"].forEach( (item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
// } );

// searching in array

// indexOf & includes
// let arr = [1, 0, false];
// alert( arr.indexOf(0) );
// alert( arr.indexOf(false) );
// alert( arr.indexOf(null) );
// alert( arr.includes(1) );

// lastIndexOf
// let fruits = ["Apple", "Orange", "Apple"];
// alert( fruits.indexOf("Apple") );
// alert( fruits.lastIndexOf("Apple") );

// find
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
// ];
// let user = users.find(item => item.id == 1);
// alert(user.name)

// findIndex and findLastIndex
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"},
// ];
// alert(users.findIndex(user => user.name =="John"));
// alert(users.findLastIndex(user => user.name =="John"));

// filter
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
// ];
// let someUsers = users.filter(item => item.id < 3);
// alert(someUsers);
// alert(someUsers.length);

// transform and array

// map
// let lengths = ["bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths);

// sort(fn)
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// let arr = [1, 2, 15,];
// arr.sort(compareNumeric);
// alert(arr);

// shorter version
// let arr = [1, 15, 2];
// arr.sort(function(a, b) {return a - b;});
// alert(arr);

// reverse
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// alert( arr );

// split 
// let names = "John, Bob, Carl";
// let arr = names.split(", ");
// for (let name of arr) {
//     alert(`A message to ${name}.`);
// }

// join
// let arr = ["John", "Bob", "Carl"];
// let str = arr.join(";");
// alert(str);

// reduce
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result);

// Array.isArray

// alert(typeof {});
// alert(typeof []);

// alert(Array.isArray({}));
// alert(Array.isArray([]));







"use strict";
// // map
// let map = new Map();
// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");
// alert(map.get(1));
// alert(map.get("1"));
// alert(map.size);

// map can also have objects
// let john = {name: "John"};
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 123);
// alert(visitsCountMap.get(john));

// iteration over map
// let recipeMap = new Map([
//     ["cucumber", 500],
//     ["tomatoes", 350],
//     ["onion", 50],
// ]);
// for (let vegetable of recipeMap.keys()){
//     alert(vegetable);
// }
// for (let amount of recipeMap.values()){
//     alert(amount);
// }
// for (let entry of recipeMap){
//     alert(entry);
// }

// Object.entries
// let map = new Map([
//     ["1", "str1"],
//     [1, "num1"],
//     [true, "bool1"],
// ]);
// alert(map.get("1"));

// let obj = {
//     name: "John",
//     age: 30,
// };
// let map = new Map(Object.entries(obj));
// alert(map.get("name"));

// Object.fromEntries
// let prices = Object.fromEntries([
//     ["banana", 1],
//     ["orange", 2],
//     ["meat", 4],
// ]);
// alert(prices.orange);

// let map = new Map();
// map.set("banana", 1);
// map.set("orange", 2);
// map.set("meat", 4);
// let obj = Object.fromEntries(map.entries());
// alert(obj.orange);

// set
// let set = new Set();
// let john = {name: "John"};
// let pete = {name: "Pete"};
// let mary = {name: "Mary"};
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// alert(set.size);
// for (let user of set) {
//     alert(user.name);
// }

// iteration over set
// let set = new Set(["oranges", "apples", "bananas"]);
// // for (let value of set) alert(value);
// set.forEach((value, valueAgain, set) => {
//     alert(value);
// });

// exercises
// function unique(arr) {
//     return Array.from(new Set(arr));
// }
// let values = [
//     "John", "John", "Mike", "Mike", "Bob",
// ];
// alert(unique(values));

// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// alert(keys);

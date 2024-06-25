"use strict";
// use case: additional data
// use case:caching
// weakSet
// let visitedSet = new WeakSet();
// let john = {name: "John"};
// let pete = {name: "Pete"};
// let mary = {name: "Mary"};
// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(john);
// alert(visitedSet.has(john));
// alert(visitedSet.has(mary));
// john = null;

// weakSet exercise
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"},
];
let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);
readMessages.add(messages[2]);
alert("Read message 0: " + readMessages.has(messages[0]));
alert("Read message 2: " + readMessages.has(messages[2]));
alert("Read message 3: " + readMessages.has(messages[3]));



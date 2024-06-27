"use script";
// let user = {
//     name: "John",
//     age: 30,
//     toString() {
//         return `{name: "${this.name}", age: ${this.age}}`;
//     }
// };
// alert(user);

// JSON.stringify
// let student = {
//     name: "John",
//     age: 30,
//     isAdmin: false,
//     courses: ["html", "css", "js"],
//     spouse: null,
// };
// let json = JSON.stringify(student);
// alert(typeof json);
// alert(json)

// alert(JSON.stringify(1));
// alert(JSON.stringify('test'));
// alert(JSON.stringify(true));
// alert(JSON.stringify([1, 2, 3, 4]));

// function properties, UNDEFINED and symbols are skipped
// let user = {
//     sayHi(){
//         alert("Hello");
//     },
//     [Symbol("id")]: 123,
//     something: undefined,
// };
// alert(JSON.stringify(user));

// nested properties work
// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["John", "Ann",]
//     },
// };
// alert(JSON.stringify(meetup));

// excluding and transforming: replacer
// jason stringify full syntax
// let jason = JSON.stringify(value[, replacer, space])

// let room = {
//     number: 23
// };
// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room,
// };
// room.occupiedBy = meetup;
// // alert(JSON.stringify(meetup, ["title", "participants"]));
// // alert(JSON.stringify(meetup, ["title", "participants", "name"]));
// // alert(JSON.stringify(meetup, ["title", "participants", "place", "name", "number",]));
// // using a function instead
// alert(JSON.stringify(meetup, function replacer(key, value) {
//     alert(`${key}: ${value}`);
//     return (key == "occupiedBy") ? undefined : value; /*skips ocupied by */
// }));

// formatting space
// let user = {
//     name: "John",
//     age: 25,
//     roles: {
//         isAdmin: false,
//         isEditor: true,
//     }
// };
// alert(JSON.stringify(user, null, 2));

// custom toJSON
// let room = {
//     number: 23
// };
// let meetup = {
//     title: "Conference",
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room,
// };
// alert(JSON.stringify(meetup));

// same above using toJSON
// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     }
// };
// let meetup = {
//     title: "Conference",
//     room,
// };
// alert(JSON.stringify(room));
// alert(JSON.stringify(meetup));

// JSON.parse
// syntax 
// let value = JSON.parse(str[, reviver]);

// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// alert(numbers[1]);
// alert(numbers[3]);

// can also be used for nested objects
// let userData = '{"name": "John", "Age": 35, "isAdmin": false, "friends": [0, 1, 2, 3]}';
// let user = JSON.parse(userData);
// alert(user.friends[1]);

// using reviver
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str, function(key, value) {
//     if (key == "date") return new Date(value);
//     return value;
// });
// alert(meetup.date.getDate());

// reviver also works with nested objects
// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;
// schedule = JSON.parse(schedule, function(key, value) {
//     if (key == "date") return new Date(value);
//     return value;
// });
// alert(schedule.meetups[1].date.getDate());

// tasks
// turn object to JSON and back
// let user = {
//     name: "John Smith",
//     age: 35,
// };
// let user2 = JSON.parse(JSON.stringify(user));
// alert(JSON.stringify(user2));

// exclude properties that reference meetup
let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room,
};
room.occupiedBy = meetup;
meetup.self = meetup;
alert(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));






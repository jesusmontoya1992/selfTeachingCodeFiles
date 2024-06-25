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
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["John", "Ann",]
    },
};
alert(JSON.stringify(meetup));


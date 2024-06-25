"use strict";
// array destructing
// let arr = ["John", "Smith"];
// let [firstName, surname] = arr;
// alert(firstName);
// alert(surname);

// array destructing with split for shorter
// let [firstName, surname] = "John Smit".split(" ");
// alert(firstName);
// alert(surname);

// ignore elements using comma
// let [firstName, , title] = ["Julius", "Ceaser", "Consul", "Rome"];
// alert(title);

// with an object
// let user = {};
// [user.name, user.surname] = "John Smith".split(" ");
// alert(user.name);
// alert(user.surname);

// looping with .entries()
// let user = {
//     name: "John",
//     age: 30,
// };
// for (let [key, value] of Object.entries(user)) {
//     alert(`${key}: ${value}`);
// }

// looping with map
// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");
// for (let [key, value] of user) {
//     alert(`${key}: ${value}`);
// }

// swapping variables trick
// let guest = "Jane";
// let admin = "Pete";
// [guest, admin] = [admin, guest];
// alert(`${guest} is guest and ${admin} is admin`);

// the rest
// let [name1, name2, ...theRest] = ["John", "Mike", "Carl", "Bob", "Dan",];
// alert(name1);
// alert(name2);
// alert(theRest[0]);
// alert(theRest.length);

// default values
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];
// alert(name);
// alert(surname);

// let [name = prompt("name?"), surname = prompt("surname?")] = ["julius"];
// alert(name);
// alert(surname);

// object destructing
// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200,
// };
// let {title, width, height} = options;
// alert(title);
// alert(width);
// alert(height);

// let {height, width, title} = {title:"Menu", height: 200, width: 100};
// alert(title);
// alert(width);
// alert(height);

// changing property names
// let options = {
//     title: "menu",
//     width: 100,
//     height: 200,
// };
// let {width: w, height: h, title: main} = options;
// alert(main);
// alert(w);
// alert(h);

// default values
// let options = {
//     title: "Menu",
// };
// let {width = prompt("Width?"), title = prompt("tittle?")} = options;
// alert(title);
// alert(width);

// combining : and =
// let options = {
//     title: "Menu",
// };
// let {width: w = 100, height: h = 200, title} = options;
// alert(title);
// alert(w);
// alert(h);

// extract only what we need
// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200,
// };
// let {title} = options;
// alert(title);

// The rest pattern
// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100,
// };
// let {title, ...rest} = options;
// alert(title);
// alert(rest.height);
// alert(rest.width);

// if there is not let
// let title, width, height;
// ({title, width, height} = {title: "Menu", width: 200, height: 100});
// alert(title);

// nested destructing
// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },
//     items: ["Cake", "Donut"],
//     extra: true,
// };
// let {
//     size: {width, height},
//     items: [item1, item2],
//     title = "Menu",
// } = options;
// alert(title);
// alert(width);
// alert(height);
// alert(item1);
// alert(item2);

// smart function parameters
// pass an object as function parameters
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"],
// };
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     alert(`${title} ${width} ${height}`);
//     alert(items);
// }
// showMenu(options);

// use a more complex destructing with nested objects and colon mapping
// let options = {
//     title: "My menu",
//     items: ["item1", "item2"],
// };
// function showMenu ({
//     title = "untitled",
//     width: w = 100,
//     height: h = 200,
//     items: [itemIndex1, itemIndex2],
// }) {
//     alert(`${title} ${w} ${h}`);
//     alert(itemIndex1);
//     alert(itemIndex2);
// }
// showMenu(options);

// using the whole {} as default
// function showMenu({title = "Menu", width = 100, height = 200} = {}) {
//     alert(`${title} ${width} ${height}`);
// }
// showMenu();

// task
// let user = { name: "John", years: 30,};
// let {name, years: age, isAdmin = false} = user;
// alert(name);
// alert(age);
// alert(isAdmin);

// maximal salary
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};
function topSalary(salaries){
    let maxSalary = 0;
    let maxName = null;
    for (const [name, salary] of Object.entries(salaries)){
        if (maxSalary < salary){
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}
alert(topSalary(salaries));


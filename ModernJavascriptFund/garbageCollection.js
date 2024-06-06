"use strict";
// two references
let user = {
    name: "John",
};
let admin = user;
alert(user.name);
alert(admin.name);
user = null;
alert(admin.name); /* property name is still reacheble through admin */
alert(user.name);




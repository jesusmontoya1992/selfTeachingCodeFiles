"use strict";
// let user = {};
// alert(user.address.street); /* will result in error */

// let html = document.querySelector(".elem").innerHTML; /* will result in null error */

// let user = {};
// alert(user.address ? user.address.street ? user.address.street.name : null : null);
// too long of a format to find a nested propety that doesnt exist

// using optional chaining "?." (if value doesnt exist it return undefined)
// let user = {};
// alert( user?.address?.street );

// let user = null;
// alert( user?.address );
// alert( user?.address.street );

// short-cicuiting
// let user = null;
// let x = 0;
// user?.sayHi(x++);
// alert(x);

// other variants

// ?.()
// let userAdmin = {
//     admin() {
//         alert( "I am admin" );
//     }
// };
// let userGuest = {};
// userAdmin.admin?.();
// userGuest.admin?.();

// ?.[]
let key = "firstName";
let user1 = {
    firstName: "John"
};
let user2 = null;
alert( user1?.[key] );
alert( user2?.[key] );
delete user1?.firstName; /* can also use ?. to delete property if it exist*/
alert( user1?.[key] );



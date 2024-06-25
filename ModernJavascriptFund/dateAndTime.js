"use strict";
// new Date()
// let now = new Date();
// alert(now);

// let jan01_1970 = new Date(0);
// alert(jan01_1970);

// adds 24 hours
// let jan02_1970 = new Date(24 * 3600 * 1000);
// alert(jan02_1970);

// before 1970
// let dec31_1969 = new Date(-24 * 3600 * 1000);
// alert(dec31_1969);

// let date = new Date("2017-01-26");
// alert(date);

// new Date(year, month, date, hours, minutes, seconds, miliseconds)
// let date = new Date(2011, 0, 1, 0, 0, 0, 0);
// alert(date);
// let sameDate = new Date(2011, 0, 1);
// alert(sameDate);

// Access date components
// let date = new Date();
// alert(date.getHours());
// alert(date.getUTCHours());

// alert(new Date().getTimezoneOffset());

// let today = new Date();
// today.setHours(0);
// alert(today);
// today.setHours(0, 0, 0, 0);
// alert(today);

// autocorrection
// let date = new Date(2013, 0, 32);
// alert(date);

// adding days and seconds
// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// alert(date);

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);
// alert(date);

// let date = new Date(2016, 0, 2);
// date.setDate(1);
// alert(date);
// date.setDate(0);
// alert(date);.

// date to number, date diff
// let start = new Date();
// for (let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i;
// }
// let end = new Date();
// alert(`The loop took ${end - start} ms`);

// Date.now()
// let start = Date.now();
// for (let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i ;
// }
// let end = Date.now();
// alert(`The loop Too ${end - start} ms`);

// benchmarking
// function diffSubtract (date1, date2) {
//     return date2 - date1;
// }
// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }
// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start
// }
// let time1 = 0;
// let time2 = 0;
// for (let i = 0; i < 10; i++) {
//      time1 = time1 + bench(diffSubtract);
//      time2 = time2 + bench(diffGetTime);
// }
// alert("Total time for diffSubtract: " + time1);
// alert("Total time for diffGetTime: " + time2 );

// Date.parse from a string
// convert string to date. format = YYYY-MM-DDTHH:mm:ss:sssZ
// let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
// alert(ms);

// // create new date from timestamp
// let date = new Date( Date.parse("2012-01-26T13:51:50.417-07:00") );
// alert(date);

// Tasks
// create a date
// let d1 = new Date(2012, 1,20, 3, 12);
// alert(d1);
// // or
// let d2 = new Date("2012-02-20T03:12");
// alert(d2);

// show a weekday
// function getWeekDay(date) {
//     let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
//     return days[date.getDay()];
// }
// let date = new Date(2014, 0, 3);
// alert(getWeekDay(date));

// Eruopean weekday
// let date = new Date(2012, 0, 3);
// function getLocalDay(date) {
//     let day = date.getDay();
//     if (day == 0) {
//         day = 7;
//     }
//     return day;
// }
// alert(getLocalDay(date));

// get last day of the month
// function getLastDayOfMonth (year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
// alert(getLastDayOfMonth(2012, 0));
// alert(getLastDayOfMonth(2012, 1));
// alert(getLastDayOfMonth(2013, 1));



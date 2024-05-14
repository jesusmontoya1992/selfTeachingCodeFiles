"use strict"
// ?? = returns first defined value
// let user;
// alert(user ?? "Anonymous");

// let user = "John";
// alert(user ?? "anonymous");

// let firstName = null;
// let lastName = null;
// let nickName = "supercoder";
// alert(firstName ?? lastName ?? nickName ?? "Anonymous");

// comparison with ||
// let firstName = null;
// let lastName = null;
// let nickName = "SuperCoder";
// alert(firstName || lastName || nickName || "Anonymous");

// let height = 0;
// alert(height || 100);
// alert(height ?? 100);

// Precedence
let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
alert(area);
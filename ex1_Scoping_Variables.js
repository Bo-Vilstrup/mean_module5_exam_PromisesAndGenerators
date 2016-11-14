/*

 Execute the examples from (1) related to Constants and Scoping. Make sure you understand and can explain
 block-scoped variables in relation to ES5 (var) scoping and hoisting.
 In all the following exercises you should use let-declarations, unless you really have a reason for not doing
 so.

 Scoping
 Block-Scoped Variables
 ES 6
 */
"use strict";
let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];

for (let i = 0; i < a.length; i++) { let x = a[i] }
for (let i = 0; i < b.length; i++) { let y = b[i]}

let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () {return i * 2}
}

console.log(callbacks[0]() === 0);
console.log(callbacks[1]() === 2);
console.log(callbacks[2]() === 4);



/*
// ES %

 var i, x, y;
 for (i = 0; i < a.length; i++) {
 x = a[i];
 …
 }
 for (i = 0; i < b.length; i++) {
 y = b[i];
 …
 }

 var callbacks = [];
 for (var i = 0; i <= 2; i++) {
 (function (i) {
 callbacks[i] = function() { return i * 2; };
 })(i);
 }
 callbacks[0]() === 0;
 callbacks[1]() === 2;
 callbacks[2]() === 4;

 */



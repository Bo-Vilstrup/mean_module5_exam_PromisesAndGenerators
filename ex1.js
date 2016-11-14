/*

 Execute the examples from (1) related to Constants and Scoping. Make sure you understand and can explain
 block-scoped variables in relation to ES5 (var) scoping and hoisting.
 In all the following exercises you should use let-declarations, unless you really have a reason for not doing
 so.

 */
"use strict";

const PI = 3.141593;
console.log(PI > 3.0);
console.log(PI);

let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];

for (let i = 0; i < a.length; i++) { let x = a[i] }

for (let i = 0; i < b.length; i++) { let y = b[i]}

let callbacks = [];

for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () {return i * 2}
}

callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;
"use strict";

// a1)
// Add the necessary code to make this example work (http://es6-features.org/#ExpressionBodies):

let evens = [0 ,2 ,4, 6, 8];

let odds  = evens.map(v => v + 1);
let pairs = evens.map(v => ({ even: v, odd: v + 1 }));
let nums  = evens.map((v, index) => v + index);

console.log(odds);
console.log(pairs);
console.log(nums);

// a2) Why does this work?:
let odds2 = evens.map(v => v+1);
console.log(odds2);
// while this doesn't (fix the example below, without going back to the solution above)?
/*
 var odds = evens.map(v => {
 v+1
 });
 */
// fixed
let odds3 = evens.map(v => {
    return v+1
});
console.log(odds3);
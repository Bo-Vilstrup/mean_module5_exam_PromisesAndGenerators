/*
 Assuming we had these variables (for example passed in via a HTTP request):
 let fName = "Kurt";
 let lName = "Wonnegut";
 let age = 98
 Create an object, using the Property Shorthand notation with a fName, lName and age property.

 */
"use strict";

let fName = "Kurt";
let lName = "Wonnegut";
let age = 98;

let person = {fName, lName, age};

console.log(person);

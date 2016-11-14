/*
 A) Given these declarations: let fName = "Kurt", lName = "Wonnegut";
 Implement a one-liner (using Array matching) to swap the two values so this statement:
 console.log(`First: ${fName}, Last: ${lName}`);
 Will print: First: Wonnegut, Last: Kurt

 */
"use strict";
//!!!!!!!!!!!!!! not working !!!!!!!!!!!!!!!!!!!!!!!

var list = [ 1, 2, 3 ];
var [ a, , b ] = list;
[ b, a ] = [ a, b ];

console.log(list);



//let fName = "Kurt";
//let lName = "Wonnegut";
//
//let person = {fName, lName};
//
//let [a, b] = person;
//[ b, a ] = [ a, b ];
//
//
//console.log(person);
//console.log(`First: ${fName}, Last: ${lName}`);

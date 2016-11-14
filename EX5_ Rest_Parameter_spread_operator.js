/*
 A) Implement the function f(..) below:
 function f(x,y,...rest){
 ...
 }
 So this statement:
 console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}));
 Will produce this output (should obviously work for any number/type of arguments):

 Hint: With es2015 you can get the class name using this construct: myinstance.conscructor.name

 */

//!!!!!!!!! not working !!!!!!!!!!!!!!
"use strict";

function f (x, y, ...a) {
    return (x + y) * a.length
}

console.log( f(1, 2, "hello", true, 7) === 9);


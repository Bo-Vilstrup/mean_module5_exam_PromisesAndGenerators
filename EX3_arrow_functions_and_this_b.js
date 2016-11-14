/*
B) Arrow functions and this or when not to use arrow functions
This example (taken from the slide referred to above), shows how we "loose" this, when extracting a method
from an object.

var counter = {
    count: 0,
    inc: function () {
        this.count++;
    }
}
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one


Rewrite the inc() function to use the arrow notation, and test whether this solves the problem, makes it
worse or leaves it unchanged.
 */
"use strict";

var counter = {
    count: 0,
    inc: () => this.count++
};
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

// -"use strict" first version :: output = 0,1
// "use strict" with arrow function :: output = 0, 0
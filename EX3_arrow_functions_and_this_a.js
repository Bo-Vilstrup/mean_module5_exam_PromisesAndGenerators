/*
 For this exercise you should refer to this slide ( http://js-plaul.rhcloud.com/javascript1/js.html#19 ) as a reference to
 ES5 this-pitfalls.
 Use the Constructor function in the example below, to explain about the ES5 this-behaviour. Execute the
 example, and solve the problem, first using ES5 features, and then using an es2015 arrow function.
 */
"use strict";
// A)
function Numbers(numbs) {
    var that = this;
    that.nums = numbs;
    that.fives = [];
    that.nums.forEach(function (v) {
        if (v % 5 === 0) {
            that.fives.push(v);
        }
    });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

// EM6
function Numbers2(numbs) {
    this.fives = numbs.filter(v => v % 5 === 0);
}
var numbers2 = new Numbers2([1,3,5,10,14,20,33,50]);
console.log(numbers2.fives);

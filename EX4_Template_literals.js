/*
 EX-4 Template literals
 Execute this example (http://es6-features.org/#StringInterpolation) and use template literals whenever it
 makes sense for all the following exercises.

 */
"use strict";

var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`;

console.log(message);
/*
EX9 Classes and Inheritance with es2015
    A) The declaration below defines a Shape class, whicha as it's only properties has a color field + a
getArea() and a getPerimeter() function which both returns undefined. This is the closest we get to
an abstract method in Java.
    class Shape {
    constructor(color){
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
}
Provide the class with a nice (using template literals) toString() method + a getter/setter for the colour
property. Test the class constructor, the getter/setter and the two methods.
 */
"use strict";

class Shape {
    constructor(color){
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    getColor() {
        return this._color;
    }
    setColor(color) {
        this._color = color;
    }
    toString() {
        return `${this._color}`;
    }
}

let shape = new Shape("red");
console.log(shape.toString());
shape.setColor("green");
console.log(shape.toString());

/*
 B) Create a new class Circle that should extend the Shape class.
 Provide the class with:

* A radius field
* A constructor that takes both colour and radius.
* Overwritten versions of the three methods defined in the Base
* Getter/Setter for radius
 Test the class constructor, the getters/setters and the three methods.
 */
console.log("---------------");


class Circle extends Shape {
    constructor(color, radius){
        super(color);
        this._radius = radius;
    }
    getArea() {
        return Math.PI*Math.pow(this._radius, 2);
    }
}

let circle = new Circle("yellow", 10);
console.log(circle.getArea());


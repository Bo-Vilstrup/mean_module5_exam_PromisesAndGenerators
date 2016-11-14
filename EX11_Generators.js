/*
 A) Skim these sections related to Generators and implement a few of the simple examples:

* https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Iterators_and_Generators
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
 */
"use strict";

function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

console.log("--------------");

/*
 B) Complete the Generator function below (it's not yet a generator function, what is missing)
 function* makeNames() {
 let firstNames = ["Lars", "Jan", "Ida", "Tine","Thomas"];
 let lastNames = ["Mortensen","Peterson","Obama","Jensen","Hansen"];
 }
 So these statements
 let index = 0;
 for(let name of makeNames()){
 console.log(name);
 if(index++ === 50){
 break;
 }
 }

 */

function* makeNames() {

    let firstNames = ["Lars", "Jan", "Ida", "Tine","Thomas"];
    let lastNames = ["Mortensen","Peterson","Obama","Jensen","Hansen"];
    let r1;
    let r2;

    while(true) {
        r1 = Math.round(Math.random()*(firstNames.length -1));
        r2 = Math.round(Math.random()*(lastNames.length -1));
        yield {firstName: firstNames[r1], lastName: lastNames[r2]};
    }
}

let maker = makeNames();
let index = 0;
do {
    console.log(maker.next().value);
} while(index++ <= 50);



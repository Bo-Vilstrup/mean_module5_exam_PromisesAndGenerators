"use strict";

let crypto = require('crypto');

let cryptoFactory = function(size) {
    return new Promise( (resolve, reject) => {
        // Do an async task async task and then..
        crypto.randomBytes(size, function(err, buffer) {
            let secureHex = buffer.toString('hex');

            if(secureHex) {
                resolve({"lenght": size, "random": secureHex});
            }
            else {
                reject('Failure!');
            }
        }); // End of crypto callback
    }); // End of Promise
}; // End of cryptoFactory


let results = [];
let p1 = cryptoFactory(48);
let p2 = cryptoFactory(40);
let p3 = cryptoFactory(32);
let p4 = cryptoFactory(24);
let p5 = cryptoFactory(16);
let p6 = cryptoFactory(8);


Promise.all([p1,p2,p3,p4, p5, p6]).then(arr => {
    results = arr;
    console.log(results);
}).catch(err =>  {
    console.log(err);
});

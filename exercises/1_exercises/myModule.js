/**
 * Created by bo on 11/1/16.
 */
"use strict";

let crypto = require('crypto');

let cryptoFactory = function(size) {
    return new Promise( (resolve, reject) => {
        // Do an async task async task and then..
        crypto.randomBytes(size, function(err, buffer) {
            let secureHex = buffer.toString('hex');

            if(secureHex) {
                resolve({"length": size, "random": secureHex});
            }
            else {
                reject('Failure!');
            }
        }); // End of crypto callback
    }); // End of Promise
}; // End of cryptoFactory


module.exports.secureRandoms = function(numberOfBits) {

    return new Promise( (resolve, reject) => {
        // Do an async task async task and then..
        let promises = [];
        let results = [];

        numberOfBits.forEach((bitSize) => {
            promises.push(cryptoFactory(bitSize));
        });

        Promise.all(promises).then(arr => {
            results = arr;

            if(results) {
                resolve({"title": numberOfBits.length +" Secure Randoms", "randoms": results});
            }
            else {
                reject('Failure!');
            }

        }).catch(err =>  {
            console.log(err);
        });
    }); // End of Promise
};






//module.exports.secureRandoms = function(numberOfBits) {
//
//    let promises = [];
//    let results = [];
//
//    numberOfBits.forEach((bitSize) => {
//        promises.push(cryptoFactory(bitSize));
//    });
//
//    Promise.all(promises).then(arr => {
//        results = arr;
//    }).catch(err =>  {
//        console.log(err);
//    });
//
//};





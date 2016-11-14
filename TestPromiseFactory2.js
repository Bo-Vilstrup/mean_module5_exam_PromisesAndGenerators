"use strict";
let promiseFactory = function(msg,delay) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> { //To demonstrate an async call
            let status = true;  // simulates the result of the operation
            if (status) {
                resolve(msg);
            }
            else {
                reject("UPPPPs");
            }
        }, delay);
    });
};

let SOME_DELAY = 1000;
let results = [];
let p1 = promiseFactory("Hello",SOME_DELAY*5);
let p2 = promiseFactory("World",SOME_DELAY*4);
let p3 = promiseFactory("cool",SOME_DELAY*3);
let p4 = promiseFactory("whenather",SOME_DELAY*2);

Promise.all([p1,p2,p3,p4]).then(arr => {
    results = arr;
    console.log(results);
}).catch(err =>  {
    console.log(err);
});

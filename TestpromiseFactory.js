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
let p1 = promiseFactory("Msg from Promise",SOME_DELAY*5);

p1.then(data => {
    results.push(data);
    return promiseFactory(`From p1 ${data}`, SOME_DELAY*3);
}).then(d => {
    results.push(d);
    return promiseFactory(`From p2 ${d}`, SOME_DELAY);
}).then(result =>  {
    results.push(result)
    return;
}).then(() => console.log(results))
    .catch(err =>  console.log(err));


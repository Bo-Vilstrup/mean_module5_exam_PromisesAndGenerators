/**
 * Created by bo on 11/1/16.
 */
"use strict";

let fetch =  require("node-fetch");

let urls = [
    "https://jsonplaceholder.typicode.com/photos?albumId=1",
    "https://jsonplaceholder.typicode.com/photos?albumId=3",
    "https://jsonplaceholder.typicode.com/photos?albumId=5",
    "https://jsonplaceholder.typicode.com/photos?albumId=7",
    "https://jsonplaceholder.typicode.com/photos?albumId=9"
];

module.exports.title = function(words) {

    return new Promise( (resolve, reject) => {
        // Do an async task async task and then..
        let results = [];
        let promises = [];

        urls.forEach((url) => {
            promises.push(fetch(url).then(res => res.json()));
        });

        Promise.all(promises).then(all => {

            all.forEach((some, index) => {
                results[index] = some.filter((album) => {
                    return album.title.split(" ").length === words;
                });
            });
            if(results) {
                resolve(results);
            }
            else {
                reject('Failure!');
            }
        });
    }).catch(err =>  {
        console.log(err);
    });
};






//module.exports.title = function(words) {
//
//    let promises = [];
//    urls.forEach((url) => {
//        promises.push(fetch(url).then(res => res.json()));
//    });
//
//    Promise.all(promises).then(all => {
//
//        all.forEach((some) => {
//            let result = some.filter((album) => {
//                return album.title.split(" ").length === words;
//            });
//            console.log(result);
//        });
//    });
//};
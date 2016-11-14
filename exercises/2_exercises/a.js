/*
 a)
 Test one of the url's to see the json you receive. Now use es2005 Promises to fetch data from all five url's,
 filter out only those albums where the title contains exactly three words, and print them (in this order) as
 sketched below.
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

let promises = [];
urls.forEach((url) => {
    promises.push(fetch(url).then(res => res.json()));
});

Promise.all(promises).then(all => {

    all.forEach((some) => {
        let result = some.filter((album) => {
            return album.title.split(" ").length === 3;
        });
        console.log(result);
    });
});



//function isBigEnough(album) {
//    return album.title.split(" ").length === 3;
//}

//let some = all[0];
//let result = some.filter(isBigEnough);
//console.log(result);

//all.forEach((some) => {
//    let result = some.filter(isBigEnough);
//    console.log(result);
//});


//fetch(urls[0])
//    .then(res => res.json())
//    .then(json => console.log(json.value.joke));

//for(let i = 0; i < 50; i++) {
//    promises.push(fetch("http://api.icndb.com/jokes/random0").then(res => res.json()));
//}

//Promise.all(promises).then(all => {
//    let myListOfJokes = all.map(orgJoke => {
//        return {joke: orgJoke.value.joke};
//    });
//    console.log(myListOfJokes);
//});
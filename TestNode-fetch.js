/**
 * Created by bo on 10/31/16.
 */
"use strict";

let fetch =  require("node-fetch");

fetch("http://api.icndb.com/jokes/random")
    .then(res => res.json())
    .then(json => console.log(json.value.joke));


let promises = [];
for(let i = 0; i < 50; i++) {
    promises.push(fetch("http://api.icndb.com/jokes/random").then(res => res.json()));
}

Promise.all(promises).then(all => {
    let myListOfJokes = all.map(orgJoke => {
        return {joke: orgJoke.value.joke};
    });
    console.log(myListOfJokes);
});
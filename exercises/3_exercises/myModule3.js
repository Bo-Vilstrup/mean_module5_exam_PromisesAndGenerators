/**
 * Created by bo on 11/2/16.
 */
/**
 * Created by bo on 11/1/16.
 */
"use strict";

let fetch =  require("node-fetch");

let urls = [
    "https://jokes-plaul.rhcloud.com/api/joke",
    "http://api.icndb.com/jokes/random0"
];

function Joke(title, joke, reference) {
    this.title = title;
    this.joke = joke;
    this.reference = reference;
    this.getJoke = function() {
        return {
            [this.title]: {
                joke: `${this.joke}`,
                reference: `${this.reference}`
            }
        }; // End of return
    }; // getJoke
} // End of joke


module.exports.get = function() {

    return new Promise( (resolve, reject) => {
        // Do an async task async task and then..
        let results = [];
        let promises = [];

        // get jokes for servers
        urls.forEach((url) => {
            promises.push(fetch(url).then(res => res.json()));
        });
        promises.push({"joke": "my funny joke"});

        Promise.all(promises).then(jokes => {

            let joke1 = new Joke("programmerJoke", jokes[0].joke, jokes[0].reference);
            let joke2 = new Joke("chucknorrisjoke", jokes[1].value.joke, "http://api.icndb.com/jokes/");
            let joke3 = new Joke("localJoke", jokes[2], "Local joke");

            results.push(joke1.getJoke());
            results.push(joke2.getJoke());
            results.push(joke3.getJoke());

            if(jokes) {
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

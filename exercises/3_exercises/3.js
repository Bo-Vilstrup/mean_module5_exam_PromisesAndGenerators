"use strict";
let express = require('express');
let app = express();

let jokes = require('./myModule3');

app.get('/api/threejokes', function (req, res) {

    let threeJokes = jokes.get();
    threeJokes.then((array) => {

        res.json(array);
    });
});

app.listen(3002);
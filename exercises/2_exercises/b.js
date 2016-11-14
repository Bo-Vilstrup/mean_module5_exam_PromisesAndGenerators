"use strict";
let express = require('express');
let app = express();
let album = require('./myModule2');


//let  bodyParser = require('body-parser');
//// Config body-parser
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/albumthreewords', function(req, res){

    let words = 3;
    let result = album.title(words);

    result.then(function(v) {
        res.json(v);
    });
});

app.get('/api/albums/:words', function(req, res){

    let words = parseInt( req.params.words );
    let result = album.title(words);

    result.then(function(v) {
        res.json(v);
    });
});


app.listen(3001);

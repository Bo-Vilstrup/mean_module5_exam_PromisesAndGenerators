/**
 * Created by bo on 11/1/16.
 */
"use strict";
let express = require('express');
let app = express();
let crypto = require('./myModule');

app.get('/api/securerandoms', function(req, res){

    let result = crypto.secureRandoms([48, 40, 32, 24, 16, 8]);
    result.then(function(v) {
        res.json(v);
    });
});

app.listen(3000);

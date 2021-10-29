var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Make a request to the API 
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(function (response) {
        // handle success
        let jokeData = response.data;
        res.render('login', {data: jokeData});
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
            
        });

module.exports = router;
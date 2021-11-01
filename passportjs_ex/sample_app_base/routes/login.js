var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Make a request to the API 
        axios.get('https://type.fit/api/quotes')
        .then(function (response) {
        // handle success
        
        let qoute = response;
        //Math.floor(Math.random() * qoute.length)
        let aQoute = qoute.data[Math.floor(Math.random() * qoute.data.length)];
        console.log(aQoute);
        res.render('login', {data: aQoute });
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
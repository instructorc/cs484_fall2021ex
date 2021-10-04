var fs = require('fs');
const outputInfo = require('./welcome.js'); 

//outputInfo.welcome(); /** Outputs info to console **/

//outputInfo.conclude(); /** Outputs info to console **/

//No-Blocking [Asynchronous]
/*fs.readFile('subjects.txt', 'utf8',  function(err, contents) {
     console.log(contents);
});*/

//Blocking  [Synchronous]
var data = fs.readFileSync('subjects.txt', 'utf8') ;
console.log(data);
 
console.log('after calling readFile');
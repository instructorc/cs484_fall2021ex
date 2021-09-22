var fs = require('fs');
const outputInfo = require('./welcome.js'); 

outputInfo.welcome(); /** Outputs info to console **/

outputInfo.conclude(); /** Outputs info to console **/

/**fs.readFile('subjects.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');**/
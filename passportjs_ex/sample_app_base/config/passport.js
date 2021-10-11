const LocalStrategy = require('passport-local').Strategy;
var sqlite3 = require('sqlite3').verbose()
let dataStore = require('../users.json');


module.exports = function(passport) {
console.log("Passport Function triggered");
//Passport pulls the the name variables from the name attribute in login form.  If different, you need to use whats on lines 10 and 11
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(username, password, done) {
	console.log(username);
	//Search users.json file to see if user exist
    
}));

passport.serializeUser(function(user, done) {
	done(null, user); 
});

passport.deserializeUser(function(user, done) {
	done(null, user); //you can access with req.user
});

}
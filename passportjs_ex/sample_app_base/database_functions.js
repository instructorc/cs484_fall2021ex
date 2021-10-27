var sqlite3 = require('sqlite3').verbose() //npm install sqlite3
//const bcrypt = require('bcryptjs');

//Creating a new database instance - Indication of connected database
//Before peforming any operations to database, make sure database is connected.
let db = new sqlite3.Database('./database/task.sqlite', (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        //Successful database connection
        console.log('Connected to the SQLite database.') 
    }
});

//Create a User
let createUser = () =>{
	var createUserSql ='INSERT INTO USER (user_id, user_email,user_password) VALUES (?,?,?)'
	var params =[null, "cujo@uic.edu", "asdfjkl;"];

	db.run(createUserSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("User Created");
		console.log(`Rows inserted ${this.changes}`);	  
	});
}

createUser();
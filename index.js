const express = require('express')
const app = express()
const port = 3000

//Middleware

//Handlebars
app.set('views', './views');
app.set('view engine', 'hbs');


// parse application/json
app.use(express.json());

// parse the name/value pair payload into array of values.
app.use(express.urlencoded());

//Simple get request and sending back a HTML file
app.get('/', (req, res) => {

  res.render('index',{name : "Instructor"});
})

//Simple get request and sending back a HTML file
app.get('/json', (req, res) => {

  var userData = {
    "user_name" : "aUser",
    "password" : "password01"
  };
  res.json(userData);
})

app.post('/info', (req, res) =>{
  const lastName = req.body.lname;
  const firstName = req.body.fname;
  console.log(lastName + " , " + firstName );
  res.send(`<ul> <li>First Name: ${firstName}</li>  <li>Last Name: ${lastName}</li></ul>`);
})

//routing with parameters
app.get('/welcome/:userName', (req, res) => {

    res.send(`<h1> Welcome ${req.params.userName}`);

}) 



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const http = require('http')
const fs = require('fs');


const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

    if(req.url == "/" && req.method == "GET"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./gridexample.html', function(err, data){
            res.write(data);
            res.end();
        });
      
    }else if(req.url =="/aboutus" && req.method == "GET"){
        res.write("About Us Page");
        res.end();
    }else{
        res.write('404 page');
        res.end();
    }

})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
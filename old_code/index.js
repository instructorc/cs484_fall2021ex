const http = require('http')
const fs = require('fs');


const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

    if(req.url == "/" && req.method == "GET"){
        res.setHeader('Content-Type', 'text/html');
        //Content Security Policy
        res.setHeader("Content-Security-Policy", "default-src 'self'");
       
        res.statusCode = 200;
        
        fs.readFile('./gridexample.html', function(err, data){
            res.write(data);
            res.end();
        });
      
    }else if(req.url =="/aboutus" && req.method == "GET"){
        res.write("About Us Page");
        console.log(req.params.id)
        res.end();
    }else{
        res.write('404 page');
        res.end();
    }

})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
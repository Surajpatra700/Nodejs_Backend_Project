
const {Console} = require('console');

const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 6500;

const server = http.createServer((req, res) => {  // req --> request & res --> response
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    if(req.url == "/"){
        res.statusCode == 200;
        res.end('<h1> This is Suraj Patra</h1> <p> Lorem Ipsum</p>');
    }else if(req.url == "/about"){
        res.statusCode == 200;
        res.end('<h1> I am Suraj Patra</h1> <p> Lets build an unique & worl changing app</p>');
    }else if(req.url == "/hello"){
        res.statusCode == 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode == 404;
        res.end('<h1> Not Found</h1> <p> Hey this page was not found</p>')
    }
})

server.listen(port, () => {
    console.log('Server is Listening on port ' + port);
});
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hello this is my Home Page')
    }
    if(req.url === '/about'){
        res.end('Here is something about us')
    }
    res.end(`<h1>Oops!</h1><p>Unable to fine the page you are requesting</p><a href="/">Back to Home</a>`)
})

server.listen(5000);

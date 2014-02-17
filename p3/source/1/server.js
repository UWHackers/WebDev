// require returns the module that we need as an object
var http = require('http');

// createServer takes a callback and returns a new object (server)
http.createServer(function (req, res) {
    console.log("Hello, I'm in the function now!"); // notice this?
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

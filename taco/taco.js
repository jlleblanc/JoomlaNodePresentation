var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("<h1>Here's a taco!</h1>");
}).listen(8888, '127.0.0.1');

console.log('Taco server ready at http://127.0.0.1:8888');
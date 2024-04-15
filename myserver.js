var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Welcome to my Server!" );
  res.end();
}).listen(8080);//Now, your computer works as a server!
// If anyone tries to access your computer on port 8080, they will get a "Welcome to my Server!" message in return!
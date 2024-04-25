const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to about us page");
  }
  res.end(`
  <h1>Page not found</h1>
  <p>The demanded page is not available</p>
  `);
});
server.listen(5000);

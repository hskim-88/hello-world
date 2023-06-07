const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World hskim!');
});

server.listen(8080, '0.0.0.0', () => {
  console.log(`Server running at 8080`);
});

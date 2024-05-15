const http = require('http');
const routes = require('./routes');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Log incoming requests
  console.log(`${req.method} ${req.url}`);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Pass the request to the router
  routes(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

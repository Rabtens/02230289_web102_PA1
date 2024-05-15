const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('./handlers');

const routes = (req, res) => {
  if (req.url === '/products' && req.method === 'GET') {
    getProducts(req, res);
  } else if (req.url.match(/\/products\/\w+/) && req.method === 'GET') {
    getProductById(req, res);
  } else if (req.url === '/products' && req.method === 'POST') {
    createProduct(req, res);
  } else if (req.url.match(/\/products\/\w+/) && req.method === 'PUT') {
    updateProduct(req, res);
  } else if (req.url.match(/\/products\/\w+/) && req.method === 'PATCH') {
    updateProduct(req, res); // Assuming PATCH is handled similarly to PUT
  } else if (req.url.match(/\/products\/\w+/) && req.method === 'DELETE') {
    deleteProduct(req, res);
  } else {
    // Handle invalid routes
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
};

module.exports = routes;

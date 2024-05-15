const fs = require('fs');

// Read data from JSON file
const readData = () => {
  try {
    const data = fs.readFileSync('./api/data.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading data:', err);
    return [];
  }
};

// Write data to JSON file
const writeData = (data) => {
  try {
    fs.writeFileSync('./api/data.json', JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing data:', err);
  }
};

const getProducts = (req, res) => {
  const products = readData();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(products));
};

const getProductById = (req, res) => {
  const products = readData();
  const productId = req.url.split('/')[2]; // Extract product ID from the URL
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(product));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Product not found' }));
  }
};

const createProduct = (req, res) => {
  try {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const newProduct = JSON.parse(body);
      const products = readData();
      const productId = (products.length + 1).toString(); // Generate a unique ID for the new product
      newProduct.id = productId;
      products.push(newProduct);
      writeData(products);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newProduct));
    });
  } catch (err) {
    console.error('Error creating product:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Internal Server Error' }));
  }
};

const updateProduct = (req, res) => {
  try {
    const productId = req.url.split('/')[2]; // Extract product ID from the URL
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const updatedProduct = JSON.parse(body);
      const products = readData();
      const index = products.findIndex((p) => p.id === productId);
      if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        writeData(products);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products[index]));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Product not found' }));
      }
    });
  } catch (err) {
    console.error('Error updating product:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Internal Server Error' }));
  }
};

const deleteProduct = (req, res) => {
  try {
    const productId = req.url.split('/')[2]; // Extract product ID from the URL
    const products = readData();
    const index = products.findIndex((p) => p.id === productId);
    if (index !== -1) {
      products.splice(index, 1);
      writeData(products);
      res.writeHead(204); // No Content
      res.end();
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found' }));
    }
  } catch (err) {
    console.error('Error deleting product:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Internal Server Error' }));
  }
};

module.exports = { readData, writeData, getProducts, getProductById, createProduct, updateProduct, deleteProduct };

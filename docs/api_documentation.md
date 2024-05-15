# API Documentation

## Products

### Get All Products
- **Endpoint:** GET /products
- **Response:** Returns a list of all products.

### Get Product by ID
- **Endpoint:** GET /products/:id
- **Response:** Returns a specific product by its ID.

### Create Product
- **Endpoint:** POST /products
- **Request Body:** JSON object representing the new product.
- **Response:** Returns the newly created product.

### Update Product
- **Endpoint:** PUT /products/:id
- **Request Body:** JSON object representing the updated product.
- **Response:** Returns the updated product.

### Delete Product
- **Endpoint:** DELETE /products/:id
- **Response:** Returns a success message if the product is deleted.

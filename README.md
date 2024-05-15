# Node.js RESTful API with Standard Libraries

## Introduction
In this project, we've developed a RESTful API using only the Node.js Standard Libraries. The API supports CRUD (Create, Read, Update, Delete) operations for a chosen resource, facilitating hands-on experience in server-side application development and RESTful API architecture design.

## Requirements
### Resource Selection
- Chose a resource for the API (e.g., products, users, blog posts), here i have used products.
- Defined the properties or fields associated with the chosen resource.

### Server Setup
- Utilized the http module from Node.js Standard Libraries to create an HTTP server.
- Configured the server to listen on a specific port (e.g., 3000).

### Data Storage
- Leveraged the fs module from Node.js Standard Libraries to store and retrieve resource data.
- Created a JSON file to store the resource data.
- Implemented CRUD operations by reading from and writing to the JSON file.

### Routing and Endpoints
- Implemented the following endpoints for the chosen resource:
  - GET /resource: Retrieve a list of all resources.
  - GET /resource/:id: Retrieve a specific resource by its ID.
  - POST /resource: Create a new resource.
  - PUT /resource/:id: Update an existing resource by its ID.
  - PATCH /resource/:id: Partial update of an existing resource by its ID.
  - DELETE /resource/:id: Delete a resource by its ID.

### Request Handling
- Parsed incoming request bodies (for POST and PUT requests) using appropriate Node.js Standard Libraries.
- Validated incoming data and handled errors appropriately.
- Utilized try...catch...finally blocks to handle exceptions and ensure proper resource cleanup.

### Response Handling
- Sent appropriate responses with relevant status codes (e.g., 200 OK, 201 Created, 404 Not Found) and data payload (if applicable).
- Handled edge cases and error scenarios gracefully.
- Implemented try...catch...finally blocks to handle exceptions and ensure proper resource cleanup.

### Documentation
- Documented API endpoints, including expected request/response formats and any specific requirements or constraints.
  - Example: [GitHub REST API Documentation](https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api?apiVersion=2022-11-28)

## Expected Outcomes
By the end of this project, we've achieved:
- A fully functional RESTful API built using only the Node.js Standard Libraries.
- Support for CRUD operations for the chosen resource.
- Correct handling of requests and responses, including appropriate error handling and validation mechanisms.
- Storage and retrieval of resource data from a JSON file using the fs module.
- Implementation of try...catch...finally blocks to handle exceptions and ensure proper resource cleanup during request and response handling.

## Conclusion
Through this project, we've gained practical experience in server-side development, API design, and working with Node.js Standard Libraries.


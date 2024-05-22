## E-commerce Project Overview

This E-commerce API, built with TypeScript and Express, integrates MongoDB via Mongoose and uses Zod for validation. It provides endpoints for managing products and orders, including creation, retrieval, updating, deletion, product search, and inventory management.

## Technology Used

-   Typescript
-   MongoDB (Mongoose)
-   Node.js
-   Express
-   Cors
-   dotenv
-   Zod for validation

# API Endpoints:

## Product Management

Create a New Product

-   Endpoint: /api/products
-   Method: POST

Retrieve a List of All Products

-   Endpoint: /api/products
-   Method: GET

Retrieve a Specific Product by ID

-   Endpoint: /api/products/:productId
-   Method: GET

Update Product Information

-   Endpoint: /api/products/:productId
-   Method: PUT

Delete a Product

-   Endpoint: /api/products/:productId
-   Method: DELETE

Search for a Product

-   Endpoint: /api/products?searchTerm=name
-   Method: GET

## Order Management

Create a New Order

-   Endpoint: /api/orders
-   Method: POST

Retrieve All Orders

-   Endpoint: /api/orders
-   Method: GET

Retrieve Orders by User Email

-   Endpoint: /api/orders?email=level2@programming-hero.com
-   Method: GET

## How to Run the Project

Clone the Repository

git clone https://github.com/AALabonya/ecommerce-backend.git

cd ecommerce-backend

Install Dependencies

npm install

Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=5000

DATABASE_URL=< mongodb-uri >

Start the Server

npm start

The server will start running on http://localhost:5000.

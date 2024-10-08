# Green Nursery Backend

This repository contains the backend implementation for the Green Nursery nursery plant website. The backend is built using Node.js, Express, TypeScript, Mongoose, and MongoDB.

- [Live Site](https://green-nursery-client-l2b3a4.vercel.app)
- [Project Preview Video](https://youtu.be/ztzE5YffC0o)

## Features

- **Product Management:** APIs for creating, reading, updating, and deleting products.
- **Database Integration:** MongoDB for persistent data storage.
- **CRUD Operations:** Endpoints to manage nursery plant products.
- **No Authentication Yet:** Currently, the backend does not include user authentication.

## Tech Stack

- **Backend Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB
- **ODM:** Mongoose

## Installation

To run the Green Nursery backend locally, follow these steps:

1. Clone the repository: `https://github.com/aumansur/l2-b3-a4-green-nursery-server.git`
2. Navigate to the project directory: `cd l2-b3-a4-green-nursery-server`
3. Install dependencies: `npm install`
4. Set up your environment variables by creating a `.env` file in the root directory with the following contents:
   ```
   DB_URL=your_mongodb_connection_string
   ```
5. Start the development server: `npm run dev`
6. The server will be running on `http://localhost:5000`.

## API Endpoints

- **GET /product:** Retrieve a list of all products.
- **GET /products/:id:** Retrieve a single product by ID.
- **POST /product:** Create a new product.
- **PUT /product/:id:** Update an existing product by ID.
- **DELETE /product/:id:** Delete a product by ID.

## Usage

- **Fetch Products:** Use `GET /product` to get a list of all products.
- **Fetch Single Product:** Use `GET /product/:id` to get details of a single product.
- **Add Product:** Use `POST /product` with product details in the request body.
- **Update Product:** Use `PUT /product/:id` with updated product details in the request body.
- **Delete Product:** Use `DELETE /product/:id` to remove a product.


## Contact

For issues and feedback, please contact Ahammad ullah mansur  at ahammadullah2001@gmail.com
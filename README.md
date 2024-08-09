# Backend Task

This project is a backend API built with Node.js, Express, and MongoDB. It includes user authentication, role-based access control, and CRUD operations for products.

## Features

- User registration and login
- JWT-based authentication
- Role-based access control for product operations
- CRUD operations for products

## Technologies Used

- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance running (locally or on a cloud service)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Phanindrababu5868/user_management_backend
   cd backend-task
   ```
2. Install dependencies:
   ```bash
   npm start
   ```

3. Set up environment variables:
   Create a .env file in the root of the project and add the following variables:
   ```plaintext
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
   
## Running the Application
1. Start the server:
   ```bash
   npm start
   ```
2. The API will be running at http://localhost:3000.

# API Endpoints
## Auth Routes

- Register a new user
   - URL: POST /api/user/register
   - Body:
     ```json
      {
        "username": "string",
        "email": "string",
        "password": "string",
        "role": "string"  // (admin, manager, staff)
      }
     ```
   - Response:
     ```json
      {
       "message": "User created successfully"
      }
     ```
- Login a user
   - URL: POST /api/user/login
     
   - Body:
     ```json
      {
        
        "email": "string",
        "password": "string",
      }
     ```
     
   - Response:
     ```json
      {
       "message": "User created successfully"
      }
     ```


## Product Routes

- Create a new product (admin only)
   - URL: URL: POST /api/products
   - Headers:
      ```plaintext
      Authorization: Bearer <token>
      ```  
   - Body:
     ```json
      {
        "title": "string",
        "description": "string",
        "inventoryCount": "number"
      }
     ```
   - Response:
     ```json
      {
       "message": "Product created successfully"
      }
     ```
- Get all products (admin and manager only)
  
   - URL: GET /api/products
     
   - Headers:
      ```plaintext
      Authorization: Bearer <token>
      ```  
   - Response:
     ```json
      [
        {
         "_id": "string",
         "title": "string",
         "description": "string",
         "inventoryCount": "number"
       }
     ]
     ```
     
- Update a product (admin and manager only)
  
   - URL: PUT /api/products/:id
     
   - Headers:
      ```plaintext
      Authorization: Bearer <token>
      ```
  
   - Body:
     ```json
      {
        "title": "string",
        "description": "string",
        "inventoryCount": "number"
      }
     ```
     
   - Response:
     ```json
      {
       "message": "Product updated successfully"
      }
     ```
- Delete a product (admin only)
  
   - URL: DELETE /api/products/:id
     
   - Headers:
      ```plaintext
      Authorization: Bearer <token>
      ```
  
     
   - Response:
     ```json
      {
       "message": "Product deleted successfully"
      }
     ```
     
  


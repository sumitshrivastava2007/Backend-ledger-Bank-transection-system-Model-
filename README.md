# 📘 Backend Ledger

Backend Ledger is a fully backend-based project that demonstrates user authentication functionality including user registration and login using modern backend technologies.

This project focuses on understanding how backend systems handle authentication, database storage, and API testing.

---

## 🚀 Features

- User Registration (Create New Account)
- User Login Authentication
- Password Hashing for Security
- MongoDB Database Integration
- RESTful API Structure
- API Testing using Postman

---

## 🛠️ Tech Stack

- Node.js – JavaScript runtime environment
- Express.js – Backend framework for handling routes and middleware
- MongoDB – NoSQL database for storing user data
- Mongoose – ODM for MongoDB
- Postman – API testing tool
- bcrypt – Password hashing
- JWT (JSON Web Token) – Authentication mechanism

---

## 🔐 Authentication Flow

### Register User
- User sends name, email, and password.
- Password is hashed using bcrypt.
- User data is stored in MongoDB.
- Success response is returned.
 
### Login User
- User sends email and password.
- Password is compared with hashed password in database.
- If valid, JWT token is generated.
- Token is returned to user for authentication.

---

## ⚙️ Installation & Setup

1. Clone the repository:

git clone https://github.com/your-username/backend-ledger.git

2. Navigate to project folder:

cd backend-ledger

3. Install dependencies:

npm install

4. Create a .env file and add:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

5. Start the server:

npm start

Server will run on:  
http://localhost:5000

---

## 📬 API Endpoints

### Register User
POST /api/auth/register

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}

---

### Login User
POST /api/auth/login

Request Body:
{
  "email": "john@example.com",
  "password": "123456"
}

---

## 🧪 API Testing

All APIs are tested using Postman to ensure:
- Proper request handling
- Correct status codes
- Secure authentication flow

---

## 🎯 Learning Objectives

- Understand backend authentication flow
- Learn password hashing and JWT
- Connect Node.js with MongoDB
- Structure backend project professionally
- Test APIs using Postman

---

## 📌 Future Improvements

- Add Role-Based Authorization
- Add Email Verification
- Add Refresh Tokens
- Add Password Reset Feature
- Deploy to cloud (Render / Railway / AWS)

---

## 👨‍💻 Author

Your Name  
Backend Developer | Node.js Enthusiast

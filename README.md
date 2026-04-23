# 📚 Bookstore API

A RESTful API for managing a bookstore, built with **Node.js**, **Express**, **PostgreSQL**, and containerized using **Docker**.  
This project provides CRUD operations for books and authors without authentication, making it lightweight and easy to use for demos or internal projects.

---

## 🚀 Features
- CRUD operations for **Books** and **Authors**
- PostgreSQL database integration
- Dockerized setup for quick deployment
- RESTful API design with proper error handling
- Simple, modular project structure

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL## 📂 Project Structure
bookstore-api/
│── src/
│   ├── config/        # DB config
│   ├── controllers/   # Route handlers
│   ├── models/        # Database models
│   ├── routes/        # API endpoints
│   └── utils/         # Helpers & middleware
│── docker-compose.yml # Docker setupAPI Endpoints
 **Books
GET /api/books → List all books

POST /api/books → Add a new book

GET /api/books/:id → Get book details

PUT /api/books/:id → Update book

DELETE /api/books/:id → Remove book

Authors
GET /api/authors → List all authors

POST /api/authors → Add a new author

GET /api/authors/:id → Get author details

PUT /api/authors/:id → Update author

DELETE /api/authors/:id → Remove author
│── Dockerfile         # Backend container
│── README.md          # Documentation

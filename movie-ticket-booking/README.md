# 🎬 Movie Ticket Booking System

## 📌 Overview
This **Movie Ticket Booking System** is a **Node.js REST API** built using the **MVC pattern** with in-memory storage. The system allows users to:
- **Book movie tickets** (Auto-assign seats)
- **View booked ticket details**
- **List all attendees for a specific movie showtime**
- **Cancel booked tickets**
- **Modify seat assignments**
- **API documentation using Swagger**
- **Data validation using Joi**
- **Unit testing with Jest**

---

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js
- **Validation:** Joi
- **API Documentation:** Swagger
- **Testing Framework:** Jest, Supertest
- **Data Storage:** In-Memory (JS Objects)

---

## 📂 Project Structure
/movie-ticket-booking │── /controllers # Handles API requests & responses │── /middlewares # Middleware for validation │── /models # In-memory database models │── /routes # API routes │── /services # Business logic │── /swaggerDocs # Swagger API Documentation │── /swagger # Swagger setup │── /tests # Jest test cases │── server.js # Entry point │── package.json │── README.md


---

## Swagger API Documentation
After starting the server, access API documentation at:
📌 http://localhost:3000/api-docs

✅ Running the Project
📌 Install Dependencies
npm install

📌 Start the Server
npm start

📌 Run Unit Tests
npm test

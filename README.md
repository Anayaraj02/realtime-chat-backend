# 🔧 realtime-chat-backend

This is the backend of a real-time chat application built using **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. It provides RESTful APIs for authentication and messaging, along with real-time communication support using WebSockets.

---

## 🚀 Features

- ✅ User registration and login
- 🔐 JWT-based authentication
- 💬 Real-time messaging with Socket.IO
- 🧾 MongoDB for storing user and chat data
- 📦 CORS, cookie-based sessions, and environment configuration

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Real-time Communication**: Socket.IO
- **Authentication**: JWT
- **Other Tools**: dotenv, cors, bcrypt, cookie-parser

---

## 📁 Folder Structure

/server
├── controllers/
├── models/
├── routes/
├── socket/
├── middleware/
├── config/
├── .env
└── server.js

---

# 🔵 SERVER README (SportNest Backend)

```md
# 🏟️ SportNest - Server Side

## 📌 Project Name
SportNest - Sports Facility Booking Management System API

---

## 🎯 Purpose
This is the backend API for **SportNest**, built using **Node.js + Express + MongoDB**.  
It handles authentication, facilities management, and booking operations securely.

---

## 🌐 Live API URL
https://your-server-live-url.com

---

## ⚙️ Features

- 🔐 JWT Authentication (HTTPOnly Cookies)
- 👤 User Login / Register API
- 🏟️ CRUD Operations for Facilities
- 📅 Booking Management System
- 🔒 Protected Routes Middleware
- 👨‍🏫 Owner-based Facility Management
- 📊 MongoDB Aggregation for filtering/search
- ❌ Cancel Booking Feature
- 🧾 Clean REST API structure
- 🌐 CORS enabled for frontend integration

---

## 🗄️ Database Collections

### Facilities
- name
- facility_type
- location
- price_per_hour
- capacity
- available_slots
- description
- owner_email
- booking_count

### Bookings
- facility_id
- user_email
- booking_date
- time_slot
- hours
- total_price
- status (default: "pending")

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- CORS
- Dotenv
- Better Auth

---

## 📦 NPM Packages Used

```bash
express
mongoose
mongodb
jsonwebtoken
cookie-parser
cors
dotenv
nodemon
better-auth

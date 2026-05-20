# 🏟️ SportNest - Sports Facility Booking System (Server Side)

## 📌 Project Name
SportNest - Sports Facility Booking Management System

---

## 🎯 Purpose
SportNest is a full-stack sports facility booking platform built using the **MERN Stack (MongoDB, Express.js, Node.js, React)**.

This server-side application handles:
- Authentication using JWT with HTTP-only cookies
- Sports facility CRUD operations
- Booking management system
- User-specific data handling
- Secure REST API development

The system allows users to explore and book sports facilities such as football turfs, badminton courts, swimming lanes, and tennis courts.

---

## 🌐 Live Server URL
https://sportnest-server.vercel.app/

---

## ⚙️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- CORS  
- Dotenv  

---

## 📦 NPM Packages Used

- express  
- mongoose  
- cors  
- dotenv  
- nodemon (dev dependency)  

---

## 🔐 Authentication System

This project uses **JWT Authentication with HTTP-only cookies** for security.

### Features:
- User Registration  
- User Login  
- Secure JWT token generation  
- Token stored in HTTP-only cookie  
- Protected routes using middleware  
- Logout (cookie clear)  

---

## 🧩 Main Features (Server Side)

### 👤 Authentication
- Register user  
- Login user  
- Logout user  
- JWT token verification middleware  

---

### 🏟️ Facilities Management
- Create facility (Owner only)  
- Get all facilities (Public)  
- Get single facility by ID  
- Update facility (Owner only)  
- Delete facility (Owner only)  

---

### 📅 Booking System
- Create booking (Authenticated users only)  
- Get user-specific bookings  
- Cancel booking  
- Store booking status (default: `pending`)  

---

### 🔎 Search & Filter
- Search facilities by name using `$regex`  
- Filter by sport type using `$in`  

---

## 🗄️ Database Models

### 🏟️ Facilities Collection

```js
{
  name: String,
  facility_type: String,
  location: String,
  price_per_hour: Number,
  capacity: Number,
  available_slots: [String],
  description: String,
  owner_email: String,
  booking_count: Number
}
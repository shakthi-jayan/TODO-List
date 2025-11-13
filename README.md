# TODO List App

A simple full-stack **Task Management** application built using:

* **Vite + React (Frontend)**
* **Node.js + Express (Backend)**
* **MongoDB Atlas (Database)**
* **ESM module system**
* **REST API architecture**
* **Vercel for frontend deployment**
* **Render for backend deployment**

This project supports creating tasks, deleting tasks, and toggling task completion status using a RESTful API.

---

## 🚀 Tech Stack

### **Frontend**

* Vite + React
* React Router
* Bootstrap for UI
* Fetch API for backend communication

### **Backend**

* Node.js
* Express
* Mongoose
* CORS
* ESM module structure
* REST API routes and controllers

### **Database**

* MongoDB Atlas (Cloud Database)

### **Deployment**

* **Vercel** → React Frontend
* **Render** → Node/Express Backend
* **Environment variables** handled securely on Render for:

  ```
  MONGO_URI=<your-mongodb-atlas-connection-string>
  PORT=4000
  ```

---

## 🔧 **Features**

* Add a new task with:

  * Title
  * Status (Pending / Completed)
  * Priority (Low / Medium / High)
* View all tasks
* Toggle task status (pending ↔ completed)
* Delete a task
* Fully responsive and simple UI
* API connected to cloud-hosted Node backend

---

## 📁 Project Structure

```
TODO-List/
   frontend/
      src/
      vite.config.js
      package.json
      ...
   backend/
      routes/
      controllers/
      models/
      server.js
      package.json
```

---

## 🌐 Live Links

### **Frontend (Vercel)**

```
https://<your-frontend-url>.vercel.app/
```

### **Backend (Render)**

```
https://<your-backend-url>.onrender.com/
```

---

## 🔌 **Backend API Endpoints**

### **Base URL**

```
https://your-backend.onrender.com
```

### **GET All Tasks**

```
GET /tasks
```

### **POST Add Task**

```
POST /tasks/add
```

Body:

```json
{
  "title": "Task Title",
  "status": "pending",
  "priority": "medium"
}
```

### **PATCH Update Task Status**

```
PATCH /tasks/update/:id
```

### **DELETE Task**

```
DELETE /tasks/delete/:id
```

---

## ⚙️ **How to Run Locally**

### 1. Clone repository

```
git clone https://github.com/your-username/TODO-List.git
```

### 2. Setup Backend

```
cd backend
npm install
```

Create `.env`:

```
MONGO_URI=<your-atlas-url>
PORT=5000
```

Run backend:

```
npm run dev
```

### 3. Setup Frontend

```
cd ../frontend
npm install
npm run dev
```

---

## ☁️ Deployment Notes

### **Frontend (Vercel)**

* Vercel automatically builds Vite apps using:

  ```
  npm install
  npm run build
  ```
* Output directory: `dist`

### **Backend (Render)**

* Render service type: **Web Service**
* Root directory: `backend`
* Build command:

  ```
  npm install
  ```
* Start command:

  ```
  npm start
  ```
* Add environment variables inside Render dashboard.

---

## 👤 Author

**Shakthi Jayan**

---



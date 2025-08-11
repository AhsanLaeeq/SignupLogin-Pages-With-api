# 🔐 Auth App – MERN Authentication System

A **full-stack authentication application** built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
This project demonstrates **secure user signup, login, and authentication** using **JWT tokens**, with a clean separation between frontend and backend.

---

## 📂 Project Structure

auth-app/
├── client/ # React frontend (UI & client-side logic)
└── api/ # Express backend (API & authentication logic)

yaml
Copy
Edit

---

## 🚀 Features

- ✅ **User Registration & Login**
- 🔑 **JWT-based Authentication**
- 📦 **MongoDB Database Integration**
- ⚡ **Express.js REST API**
- 🎨 **React Frontend**
- 🔐 **Protected Routes**
- 🛡 **Password Hashing with bcrypt**
- 🌐 **Cross-Origin Resource Sharing (CORS) Configured**

---

## 🛠 Tech Stack

**Frontend:**  
- React.js  
- Axios  
- React Router DOM  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (via Mongoose)  
- JWT (JSON Web Token)  
- bcrypt  

---

## 📸 Screenshots
*(Add screenshots of your app here to make it more visually appealing)*

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/auth-app.git
cd auth-app
2️⃣ Install dependencies for backend
bash
Copy
Edit
cd api
npm install
3️⃣ Install dependencies for frontend
bash
Copy
Edit
cd ../client
npm install
4️⃣ Environment Variables
Create a .env file inside the ap/ folder and add:

init
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
5️⃣ Run the backend server
bash
Copy
Edit
cd api
npm start
6️⃣ Run the frontend
bash
Copy
Edit
cd ../client
npm start
📌 Usage
Open http://localhost:3000/ to access the React frontend.

Backend runs on http://localhost:5000/.

📜 License
This project is open-source and free to use under the MIT License.

🤝 Connect with Me
💼 LinkedIn – Ahsan Laeeq
🌐 Let’s connect and collaborate!

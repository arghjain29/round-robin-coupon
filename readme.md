# Round-Robin Coupon Distribution

A full-stack web application that allows users to claim coupons through a fair round-robin distribution system. The backend is built with Node.js, Express, and MongoDB, while the frontend is built with React + Vite and Tailwind CSS.

## 🚀 Live Demo

- **Frontend:** Deployed on Vercel
- **Backend:** Deployed on Vercel

## ✨ Features

- ✅ **Coupon Management:** Users can view and claim available coupons.
- ✅ **Secure Authentication:** Browser-based identification using cookies & headers.
- ✅ **Fair Distribution:** Implements a round-robin mechanism for coupon allocation.
- ✅ **Minimal & Vibrant UI:** Built with React, TypeScript, Tailwind CSS, and a glassmorphic theme.
- ✅ **API Integration:** Uses Axios for making secure API requests.
- ✅ **Error Handling & Toast Notifications:** Real-time feedback using React Toastify.
- ✅ **Fully Deployed:** Hosted on Vercel (Frontend & Backend).

## 🛠 Tech Stack

**Frontend:**

- React (with TypeScript)
- Vite (for development)
- Tailwind CSS (with a glassmorphic UI)
- React Toastify (for notifications)
- Axios (for API requests)
- TypeScript

**Backend:**

- Node.js + Express.js (RESTful API)
- MongoDB + Mongoose (Database)
- Express middlewares (CORS, logging, error handling)
- Deployed on Vercel

## 📜 Features Breakdown

### 1️⃣ Backend Functionality

- **RESTful API with Express.js.**
- **Coupon Management System:**
    - `GET /api/coupons/available` → Fetches available coupons.
    - `POST /api/coupons/claim` → Allows users to claim a coupon.
- Uses `withCredentials: true` and sends `X-Browser-ID` in headers to track unique users.
- **Middleware:** Extracts IP address & Browser ID and attaches them to each request for user identification.

**Tech Stack Used in Backend:**

- Express.js for REST API
- Mongoose (MongoDB) for database
- Express Middleware for security, logging, and authentication
- CORS for handling cross-origin requests
- Vercel for deployment

## 📌 Features

- ✅ Minimal & modern UI with a glassmorphic theme
- ✅ Real-time notifications with React Toastify
- ✅ REST API with Express.js
- ✅ Deployed on Vercel

## 📦 Installation & Setup

### 🔹 Backend Setup

```sh
cd server
npm install
```

Create a `.env` file in the `server/` directory and configure:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
CLIENT_URL=your_frontend_url
```

Start the backend server:

```sh
npm start
```

### 🔹 Frontend Setup

```sh
cd frontend
npm install
npm run dev
```

## 🎯 API Endpoints

| Method | Endpoint                | Description             | Auth |
|--------|-------------------------|-------------------------|------|
| GET    | /api/coupons/available  | Fetch available coupons | No   |
| POST   | /api/coupons/claim      | Claim a coupon          | Yes  |

**Headers:**

```yaml
X-Browser-ID: your-unique-browser-id
withCredentials: true
```

## 🌟 Technologies Used

- **Frontend:** React, Tailwind CSS, TypeScript, Vite
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** browser ID tracking
- **Hosting:** Vercel (Frontend & Backend)
- **State Management:** React Context API

## 🎨 UI Preview

(Add Screenshot of UI)

## 📢 To-Do & Future Enhancements

- ✅ Basic UI & Styling Improvements
- ✅ Responsive Layout
- ⬜ Animations for better UX
- ⬜ Admin Panel for managing coupons
- ⬜ Performance Optimizations

## 📞 Contact

For any questions or issues, feel free to open an issue in the GitHub repository or reach out to me.️ Round-Robin Coupon Distribution

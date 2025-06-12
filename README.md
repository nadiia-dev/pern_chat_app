# PERN Chat Application

A real-time chat application built with the PERN stack (PostgreSQL, Express.js, React, Node.js) featuring modern messaging capabilities and user authentication.

## 🚀 Features

- **Real-time messaging** with Socket.IO
- **User authentication** and authorization
- **Private conversations** between users
- **Message history** and persistence
- **Online/offline status** indicators
- **Responsive design** for all devices
- **Message notifications**

## 🛠️ Tech Stack

### Frontend

- **React** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.IO Client** - Real-time bidirectional communication
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Socket.IO** - Real-time communication
- **PostgreSQL** - Relational database
- **Prisma** - Database ORM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nadiia-dev/pern_chat_app.git
   cd pern_chat_app
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the backend directory:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/chat_app_db"

   # JWT
   JWT_SECRET="your-super-secret-jwt-key"

   # Server
   PORT=5000
   NODE_ENV="development"

   # CORS
   CLIENT_URL="http://localhost:3000"
   ```

   Create a `.env` file in the frontend directory:

   ```env
   SERVER_URL="http://localhost:5000"
   MODE=development
   ```

5. **Set up the database**

   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma generate
   ```

6. **Start the development servers**

   Backend (from backend directory):

   ```bash
   npm run dev
   ```

   Frontend (from frontend directory):

   ```bash
   npm start
   ```

The application will be available at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📦 Building for Production

1. **Build the frontend**

   ```bash
   cd frontend
   npm run build
   ```

2. **Build the backend**

   ```bash
   cd backend
   npm run build
   ```

3. **Start production server**
   ```bash
   cd backend
   npm start
   ```

## 🚀 Deployment

### Environment Variables for Production

```env
DATABASE_URL="your-production-database-url"
JWT_SECRET="your-production-jwt-secret"
NODE_ENV="production"
CLIENT_URL="https://your-frontend-domain.com"
```

### Deployment Platforms

- **Frontend**: Vercel
- **Backend**: Render
- **Database**: PostgreSQL on Neon

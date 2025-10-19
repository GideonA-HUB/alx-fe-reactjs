import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Post from "./components/Post";

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to React Router Advanced</h1>
      <p className="text-gray-600">Explore nested, dynamic, and protected routes below.</p>
    </div>
  );
}

function Login({ onLogin }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      <button
        onClick={onLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Log In
      </button>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav className="bg-gray-800 p-4 flex justify-center gap-6 text-white">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/post/1">Sample Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />

        {/* ✅ Protected Route Example */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ✅ Dynamic Route Example */}
        <Route path="/post/:id" element={<Post />} />

        {/* Redirect for unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home-banner">
      <div className="banner-content">
        <h1>Welcome to My Website</h1>
        <p>Your journey to learning React starts here 🚀</p>
        <Link to="/login">
          <button className="banner-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="login-page">
      <h2 className="page-title">Login Page</h2>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">My Website</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div className="login-container">
      {/* Header with navigation buttons */}
      <div className="top-buttons">
        <button className="top-button" onClick={() => navigate("/")}>Home</button>
        <button className="top-button signup" onClick={() => navigate("/signup")}>Sign Up</button>
      </div>

      {/* Login Box */}
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>Log in to continue tracking your habits.</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Extra Options */}
        <div className="extra-links">
          <a href="/forgot-password">Forgot Password?</a>
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 HabitTrack. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;

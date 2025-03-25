import React, { useState } from "react";
import "./SignUp.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successfully!");
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <p>Enter your details to create your account</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="icon">👤</span> {/* User Icon */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <span className="icon">📧</span> {/* Email Icon */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span> {/* Lock Icon */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <span className="icon">🔑</span> {/* Key Icon */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
      <p className="login-link">Already have an account? <a href="#">Login</a></p>
    </div>
  );
};

export default SignupForm;




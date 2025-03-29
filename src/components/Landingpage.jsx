import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="logo">HabitTrack</h1>
        <nav className="nav">
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Build Better Habits, <span>One Day at a Time</span>
        </h1>
        <p className="hero-subtitle">
          Track, manage, and visualize your daily habits to create lasting positive change in your life.
        </p>
        <div className="hero-buttons">
          <button className="btn primary" onClick={() => navigate("/signup")}>Get Started</button>
          <button className="btn secondary">Try Demo</button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Build Better Habits?</h2>
        <button className="btn primary" onClick={() => navigate("/signup")}>Start Tracking Now</button>
      </section>
    </div>
  );
};

export default LandingPage;

import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">HabitTrack</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <button className="btn-login" onClick={() => window.location.href = "/login"}>Login</button>
          <button className="btn-signup" onClick={() => window.location.href = "/signup"}>Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Build Better Habits, <span>One Day at a Time</span></h1>
        <p>Track, manage, and visualize your daily habits to create lasting positive change in your life.</p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Try Demo</button>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section" id="features">
        <h2>Key Features</h2>
        <div className="feature-list">
          <div className="feature">
            <span>📅</span>
            <h3>Track Your Habits</h3>
            <p>Create and track daily, weekly, or custom habits to build a better you.</p>
          </div>
          <div className="feature">
            <span>📊</span>
            <h3>See Your Progress</h3>
            <p>Visualize your growth with beautiful analytics and track your streaks.</p>
          </div>
          <div className="feature">
            <span>✅</span>
            <h3>Stay Consistent</h3>
            <p>Build consistency with streak tracking and achieve your long-term goals.</p>
          </div>
          <div className="feature">
            <span>🎯</span>
            <h3>Achieve Your Goals</h3>
            <p>Transform your life by building positive habits that stick.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step"><span>1️⃣</span> <strong>Create Your Habits</strong> - Add, categorize, and set goals.</div>
          <div className="step"><span>2️⃣</span> <strong>Track Consistently</strong> - Check off habits, build streaks.</div>
          <div className="step"><span>3️⃣</span> <strong>Analyze & Improve</strong> - View stats, track progress.</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 HabitTrack. All rights reserved.</p>
        <nav>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;

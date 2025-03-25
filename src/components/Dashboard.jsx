import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddHabitModal from "./AddHabitModal"; // Import the modal
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleLogout = () => {
    navigate("/"); // Redirect to landing page on logout
  };

  const handleSettingsClick = () => {
    navigate("/settings"); // Navigate to Settings page
  };

  const handleTeamClick = () => {
    navigate("/team"); // Navigate to Team Management page
  };

  const handleAddHabitClick = () => {
    setIsModalOpen(true); // Show modal when "Add New Habit" is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Hide modal when closed
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">HabitTrack</h2>
        <nav className="menu">
          <button className="nav-btn active">Dashboard</button>
          <button className="nav-btn">Statistics</button>
          <button className="nav-btn" onClick={handleTeamClick}>Team</button>
          <button className="nav-btn" onClick={handleSettingsClick}>Settings</button>
        </nav>
        <div className="user-info">
          <p>Signed in as</p>
          <p className="user-email">user@gmail.com</p>
          <button className="logout-btn" onClick={handleLogout}>Log out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Your Habits</h1>
          <p>Track and manage your daily habits</p>
          <button className="add-habit-btn" onClick={handleAddHabitClick}>+ Add New Habit</button>
        </header>

        {/* Progress Cards */}
        <section className="progress-cards">
          <div className="card">
            <p>Today's Progress</p>
            <h3>0%</h3>
            <p>0 of 1 habits completed</p>
          </div>
          <div className="card">
            <p>Highest Streak</p>
            <h3>5 days</h3>
            <p>Keep going to increase your streak!</p>
          </div>
          <div className="card">
            <p>Weekly Average</p>
            <h3>0.0 / 7</h3>
            <p>Average habit completion per week</p>
          </div>
          <div className="card">
            <p>Top Category</p>
            <h3>Health</h3>
            <p>1 habit in this category</p>
          </div>
        </section>

        {/* Pending Habits */}
        <section className="pending-habits">
          <h2>Pending (2)</h2>
          <div className="habit">
            <input type="checkbox" />
            <div className="habit-info">
              <h3>Morning Exercise <span className="habit-tag">Health</span></h3>
              <p>30 minutes of cardio or strength training</p>
            </div>
            <p className="habit-time">3 mins ago</p>
          </div>
          <div className="habit">
            <input type="checkbox" />
            <div className="habit-info">
              <h3>Read a Book <span className="habit-tag">Learning</span></h3>
              <p>Read at least 30 pages</p>
            </div>
            <p className="habit-time">5 days ago</p>
          </div>
        </section>
      </main>

      {/* Add Habit Modal */}
      <AddHabitModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default Dashboard;

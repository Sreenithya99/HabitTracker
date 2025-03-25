import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

function Settings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("notifications");
  const [notificationSettings, setNotificationSettings] = useState({
    dailyReminders: false,
    weeklyReport: true,
    emailNotifications: true,
    pushNotifications: false,
  });

  // Toggle Switch Handler
  const toggleSetting = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    });
  };

  // Clear Data Handler
  const handleClearData = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all your data? This action cannot be undone."
    );

    if (confirmDelete) {
      localStorage.clear(); // Clear all stored data
      setNotificationSettings({ // Reset state
        dailyReminders: false,
        weeklyReport: false,
        emailNotifications: false,
        pushNotifications: false,
      });

      alert("All data has been cleared!");
      navigate("/dashboard"); // Redirect user after clearing data
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">HabitTrack</h2>
        <nav className="menu">
          <button className="nav-btn" onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button className="nav-btn">Statistics</button>
          <button className="nav-btn">Team</button>
          <button className="nav-btn active">Settings</button>
        </nav>
        <div className="user-info">
          <p>Signed in as</p>
          <p className="user-email">user@gmail.com</p>
          <button className="logout-btn" onClick={() => navigate("/")}>Log out</button>
        </div>
      </aside>

      <main className="main-content">
        <header className="settings-header">
          <h1>Settings</h1>
          <p>Manage your account and preferences</p>
        </header>

        {/* Tabs */}
        <div className="settings-tabs">
          <button className={activeTab === "profile" ? "settings-tab active" : "settings-tab"} onClick={() => setActiveTab("profile")}>
            Profile
          </button>
          <button className={activeTab === "notifications" ? "settings-tab active" : "settings-tab"} onClick={() => setActiveTab("notifications")}>
            Notifications
          </button>
          <button className={activeTab === "account" ? "settings-tab active" : "settings-tab"} onClick={() => setActiveTab("account")}>
            Account
          </button>
        </div>

        {/* Tab Content */}
        <div className="settings-content">
          {activeTab === "profile" && (
            <div className="profile-section">
              <h2>Profile Information</h2>
              <input type="text" placeholder="Name" value="John Doe" readOnly />
              <input type="email" placeholder="Email" value="john.doe@example.com" readOnly />
              <button className="save-btn">Save Changes</button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="notifications-section">
              <h2>Notification Settings</h2>
              <div className="notification-item">
                <span>Daily Reminders</span>
                <p>Receive a daily reminder to complete your habits</p>
                <label className="switch">
                  <input type="checkbox" checked={notificationSettings.dailyReminders} onChange={() => toggleSetting("dailyReminders")} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="notification-item">
                <span>Weekly Report</span>
                <p>Get a weekly summary of your habit progress</p>
                <label className="switch">
                  <input type="checkbox" checked={notificationSettings.weeklyReport} onChange={() => toggleSetting("weeklyReport")} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="notification-item">
                <span>Email Notifications</span>
                <p>Receive notifications via email</p>
                <label className="switch">
                  <input type="checkbox" checked={notificationSettings.emailNotifications} onChange={() => toggleSetting("emailNotifications")} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="notification-item">
                <span>Push Notifications</span>
                <p>Receive push notifications in your browser</p>
                <label className="switch">
                  <input type="checkbox" checked={notificationSettings.pushNotifications} onChange={() => toggleSetting("pushNotifications")} />
                  <span className="slider"></span>
                </label>
              </div>
              <button className="save-btn">Save Notification Settings</button>
            </div>
          )}

          {activeTab === "account" && (
            <div className="account-section">
              <h2>Account Management</h2>
              <input type="password" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
              <button className="save-btn">Update Password</button>

              <div className="danger-zone">
                <h3>⚠ Danger Zone</h3>
                <p>Permanently delete all your data and habits.</p>
                <button className="delete-btn" onClick={handleClearData}>Clear All Data</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Settings;

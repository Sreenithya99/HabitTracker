import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage"; // Fixed capitalization
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import SettingsPage from "./components/Settings"; // Uncommented the import
import TeamManagementPage from "./components/TeamManagementPage"; // Added Import
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings/*" element={<SettingsPage />} /> {/* Enabled Settings Page Route */}
        <Route path="/team" element={<TeamManagementPage />} /> {/* Added Team Management Page Route */}
      </Routes>
    </Router>
  );
}

export default App;

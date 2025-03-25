import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamManagementPage.css';

const TeamManagementPage = () => {
    const navigate = useNavigate(); // Initialize navigate

    // Logout handler
    const handleLogout = () => {
        navigate('/'); // Redirect to the landing page
    };

    return (
        <div className="container">
            <aside className="sidebar">
                <h1>HabitTrack</h1>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Statistics</li>
                        <li className="active">Team</li>
                        <li>Settings</li>
                    </ul>
                </nav>
                <div className="user-info">
                    <p>Signed in as:</p>
                    <p>User</p>
                    <p>you@gmail.com</p>
                    <button onClick={handleLogout}>Log out</button> {/* Logout button */}
                </div>
            </aside>

            <main className="main-content">
                <div className="header">
                    <h2>Team</h2>
                    <p>Manage your team members and their access</p>
                    <button className="invite-button">+ Invite Team Member</button>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search team members..." />
                </div>

                <div className="team-grid">
                    <div className="team-card">
                        <div className="avatar">AJ</div>
                        <h3>Alex Johnson</h3>
                        <p>Team Lead</p>
                        <p>alex@example.com</p>
                    </div>

                    <div className="team-card">
                        <div className="avatar">JS</div>
                        <h3>Jamie Smith</h3>
                        <p>Developer</p>
                        <p>jamie@example.com</p>
                    </div>

                    <div className="team-card">
                        <div className="avatar">ML</div>
                        <h3>Morgan Lee</h3>
                        <p>Designer</p>
                        <p>morgan@example.com</p>
                    </div>

                    <div className="add-member-card">+ Add Team Member</div>
                </div>
            </main>
        </div>
    );
};

export default TeamManagementPage;

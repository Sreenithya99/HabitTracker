# Habit Tracker

A full-stack web application to help users build, track, and analyze their daily habits and workouts, with team collaboration features.

---

## Features

- **User Authentication:** Sign up, log in, and manage your profile securely.
- **Habit Management:**  
  - Create, edit, and delete habits.
  - Track daily completion and streaks.
  - View all your habits in a dashboard.
- **Statistics & Analytics:**  
  - Visualize your progress with charts and statistics.
  - See streaks and completion rates.
- **Calendar View:**  
  - View your habit and workout completion on a calendar.
- **Team Collaboration:**  
  - Invite team members by email.
  - Manage and view your team.
  - Track team progress.
- **Responsive UI:**  
  - Modern, mobile-friendly interface using React and Bootstrap.

---

## Tech Stack

- **Frontend:**  
  - React (with hooks and functional components)
  - React Router (for navigation)
  - Bootstrap (for styling)
  - Axios / Fetch API (for backend communication)

- **Backend:**  
  - Node.js & Express (RESTful API)
  - MongoDB (database)
  - Mongoose (ODM for MongoDB)

---

## Folder Structure

```
Habit_Tracker/
│
├── backend/
│   ├── models/         # Mongoose schemas (Habit, User, etc.)
│   ├── routes/         # Express routes (habits.js, user.js, auth.js)
│   ├── server.js       # Entry point for backend server
│   └── ...             # Other backend files
│
└── Habit/
    ├── src/
    │   ├── components/ # React components (Dashboard, TeamManagementPage, etc.)
    │   ├── App.jsx     # Main React app
    │   └── ...         # Other frontend files
    └── ...             # Config, public, etc.
```

---

## How It Works

1. **User registers/logs in** to the application.
2. **User creates habits** and tracks their daily completion.
3. **Habits are stored** in MongoDB, associated with the user's email.
4. **User can invite team members** and manage team collaboration.
5. **Statistics and calendar views** help users visualize their progress.
6. **All data is managed** through RESTful API endpoints.

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Backend Setup

```sh
cd backend
npm install
# Configure your .env file for MongoDB connection
npm start
```

### Frontend Setup

```sh
cd Habit
npm install
npm run dev
```

### Open in Browser

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5001](http://localhost:5001)

---

## API Endpoints (Sample)

- `POST /api/habits` — Create a new habit
- `GET /api/habits?userEmail=...` — Get all habits for a user
- `PUT /api/habits/:id` — Update a habit
- `DELETE /api/habits/:id` — Delete a habit
- `POST /api/teams/invite` — Invite a team member

---

## Screenshots

![Screenshot 2025-06-11 095036](https://github.com/user-attachments/assets/1b229f6d-0a62-45e0-8c2a-1f6ebf6788b4)


---

## License

This project is for educational purposes.

---

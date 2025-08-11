import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome Back! 🚀</h1>
        <p>Your personal space to explore and manage everything</p>
      </div>

      <div className="dashboard-cards">
        <div className="card">
          <h2>📊 Analytics</h2>
          <p>View detailed analytics of your activity</p>
          <button>View More</button>
        </div>

        <div className="card">
          <h2>⚙️ Settings</h2>
          <p>Customize your preferences</p>
          <button>Go to Settings</button>
        </div>

        <div className="card">
          <h2>💬 Messages</h2>
          <p>Check your latest messages</p>
          <button>Open Inbox</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard: React.FC = () => {
  const username = "John Doe"; // Replace with actual user data from context or props

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Welcome, {username}</h1>
      <h2><Link to="/patient/profile">My Profile</Link></h2>
      <h2><Link to="/patient/appointments">Upcoming Appointments</Link></h2>
      <h2><Link to="/patient/doctors">My Doctors</Link></h2>
      <h2><Link to="/patient/notifications">Medication Notifications</Link></h2>
      <h2><Link to="/patient/medical-history">Medical History</Link></h2>
    </div>
  );
};

export default PatientDashboard;

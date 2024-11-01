import React from 'react';
import { Link } from 'react-router-dom';

const DoctorDashboard: React.FC = () => {
  const username = "Dr. Smith"; // Replace with actual user data from context or props

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Welcome, {username}</h1>
      <h2><Link to="/doctor/profile">My Profile</Link></h2>
      <h2><Link to="/doctor/appointments">My Appointments</Link></h2>
      <h2><Link to="/doctor/patients">My Patients</Link></h2>
      <h2><Link to="/doctor/notifications">Upcoming Appointment Notifications</Link></h2>
      <h2><Link to="/doctor/pharmacy">Access Pharmacy</Link></h2>
    </div>
  );
};

export default DoctorDashboard;

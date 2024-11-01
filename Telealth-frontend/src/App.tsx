// src/App.tsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './componets/Authentication/Auth/Login';
import Register from './componets/Authentication/Auth/Register';
import PatientDashboard from './componets/Dashboard//PatientDashboard';
import DoctorDashboard from './componets/Dashboard/DoctorDashboard';
// import Home from './pages/Home';
// import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

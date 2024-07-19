import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newsafar from './pages/Newsafar';
import Formsafar from './pages/Formsafar';
import Booking from './pages/Booking';
import Forget from './pages/Forget';
import Sidebar from './pages/Sidebar';
import Login from './pages/Login';
import Header from './pages/Header';
import BookingList from './pages/BookingList';
import './App.css';

// Define FullDashboard before the App function
const FullDashboard = () => (
  <div>
    <Header />
    <Sidebar />
  </div>
);

const FullDashboardWithRequests = () => (
  <div>
    <Header />
    <Sidebar />
    <BookingList />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newsafar />} />
        <Route path="adminlogin" element={<Login />} />
        <Route path="formsafar" element={<Formsafar />} />
        <Route path="booking" element={<Booking />} />
        <Route path="forget" element={<Forget />} />
        <Route path="dashboard" element={<FullDashboard />} />
        <Route path="bookinglist" element={<FullDashboardWithRequests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

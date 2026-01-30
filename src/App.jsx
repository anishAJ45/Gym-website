import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router"
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { ToastContainer } from 'react-toastify'
import Membership from './components/Membership'
import Trainer from './components/Trainer'
import About from './components/About'
import Contact from './components/Contact'
import AdminDashboard from './components/AdminDashboard'
import AdmissionForm from './components/AdmissionForm'
import FeeStatusChecker from './components/FeeStatusChecker'

import ProtectedRoute from './components/ProtectedRoute'
import Loader from './components/Loader'

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loader for every page change
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) return <Loader />;

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />



        {/* Protected Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/admission" element={
          <ProtectedRoute>
            <AdmissionForm />
          </ProtectedRoute>
        } />
        <Route path="/admin/fee-status" element={
          <ProtectedRoute>
            <FeeStatusChecker />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App

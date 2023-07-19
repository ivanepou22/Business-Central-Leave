import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../src/services/authService';
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home';
import Logout from './pages/Logout';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import LeaveApplications from './pages/LeaveApplications';
import Employees from './pages/Employees';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  const user = auth.getCurrentUser();

  return (
    <div className="app app-login p-0">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path='/leave-applications' element={<LeaveApplications />} user={user} />
              <Route path='/employees' element={<Employees />} user={user} />
              <Route path='/users' element={<Users />} user={user} />
              <Route path="/home" element={<Home />} user={user} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/forgot-password" element={<ResetPassword />} />
            <Route path="/" element={<Login />} />
            <Route path='/not-found' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </React.Fragment>
    </div>
  )
}

export default App

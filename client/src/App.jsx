import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home';
import Logout from './pages/Logout';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import LeaveApplications from './pages/LeaveApplications';
import Employees from './pages/Employees';
import Users from './pages/Users';

function App() {
  return (
    <div className="app app-login p-0">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path='/leave-applications' element={<LeaveApplications/>} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/users' element={<Users />} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/reset-password" element={<ResetPassword/>} />
            <Route path="/" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}

export default App

import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
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

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
  }, []);

  return (
    <div className="app app-login p-0">
      <React.Fragment>
        <BrowserRouter>
        <ToastContainer />
          <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path='/leave-applications' element={<LeaveApplications/>} user={user} />
            <Route path='/employees' element={<Employees />} user={user}/>
            <Route path='/users' element={<Users />} user={user}/>
            <Route path="/logout" element={<Logout/>} />
            <Route path="/home" element={<Home/>} user={user}/>
            <Route path="/forgot-password" element={<ResetPassword/>} />
            <Route path="/" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}

export default App

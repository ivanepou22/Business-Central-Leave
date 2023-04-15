import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home';
import Logout from './pages/Logout';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <div className="app app-login p-0">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/reset-password" element={<ForgotPassword/>} />
            <Route path="/" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}

export default App

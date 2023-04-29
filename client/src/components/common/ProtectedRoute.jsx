import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import auth from '../../services/authService'

function ProtectedRoute() {

    const user = auth.getCurrentUser();
    return user ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute
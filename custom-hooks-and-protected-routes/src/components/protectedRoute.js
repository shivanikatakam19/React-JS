import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = (props) => {
    return (
        props.isAuthenticated ?
            <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoute;
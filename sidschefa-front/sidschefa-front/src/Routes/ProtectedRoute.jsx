import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserRole } from '../utils/auth';

const ProtectedRoute = ({ element, requiredRole }) => {
  const userRole = getUserRole();

  if (userRole === requiredRole) {
    return element;
  } else {
    return <Navigate to="/NoAccessPage" />;
  }
};

export default ProtectedRoute;
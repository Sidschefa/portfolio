import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserRole } from '../utils/auth';

const ProtectedRoute = ({ element, requiredRole }) => {

  const userRole = getUserRole();

  if (requiredRole.includes(userRole)) {
    return element;
  } else if (userRole === null) {
    return <Navigate to="/Login" />;
  }

  else {
    return <Navigate to="/NoAccessPage" />;
  }
};

export default ProtectedRoute;
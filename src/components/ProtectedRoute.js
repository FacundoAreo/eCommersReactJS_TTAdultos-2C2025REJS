import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulación de autenticación - en una app real esto vendría de un contexto
const isAuthenticated = () => {
  return localStorage.getItem('userToken') !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
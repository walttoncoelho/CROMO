import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let token = localStorage.getItem("token") 
    ?? true; // habilitar enquanto em desenvolvimento

  if (!token) {
    // retornar para pagina de login
    return <Navigate to="/manager" />;
  }
  return children;
};

export default ProtectedRoute;
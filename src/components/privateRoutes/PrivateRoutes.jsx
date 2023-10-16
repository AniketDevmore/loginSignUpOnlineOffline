import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");
  return email && password ? children : <Navigate to="/" />;
};

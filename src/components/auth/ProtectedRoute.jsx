import React from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

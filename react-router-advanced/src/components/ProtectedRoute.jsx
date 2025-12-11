import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Simple mock for checker

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
